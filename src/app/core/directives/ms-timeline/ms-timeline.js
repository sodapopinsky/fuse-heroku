(function ()
{
    'use strict';

    angular
        .module('app.core')
        .controller('MsTimelineController', MsTimelineController)
        .controller('MsTimelineItemController', MsTimelineItemController)
        .directive('msTimeline', msTimelineDirective)
        .directive('msTimelineItem', msTimelineItemDirective);

    /** @ngInject */
    function MsTimelineController()
    {
        var vm = this;

        // Data
        vm.scrollEl = undefined;
        vm.loadMoreEl = undefined;

        vm.onScrollRegistered = false;
        vm.loadMore = vm.loadMore || angular.noop;
        vm.threshold = 144;

        // Methods
        vm.init = init;
        vm.registerOnScroll = registerOnScroll;
        vm.unregisterOnScroll = unregisterOnScroll;

        //////////

        /**
         * Initialize the controller with the values
         *
         * @param loadMoreEl
         * @param scrollEl
         */
        function init(loadMoreEl, scrollEl)
        {
            vm.loadMoreEl = loadMoreEl;
            vm.scrollEl = scrollEl;

            // Register onScroll event
            vm.registerOnScroll();
        }

        /**
         * onScroll Event
         */
        function onScroll()
        {
            if ( vm.scrollEl.scrollTop() + vm.scrollEl.height() + vm.threshold > vm.loadMoreEl.position().top )
            {
                // Unregister scroll event to prevent triggering the function over and over again
                vm.unregisterOnScroll();

                // Trigger load more event
                vm.loadMore().then(function ()
                {
                    vm.registerOnScroll();
                });
            }
        }

        /**
         * onScroll event registerer
         */
        function registerOnScroll()
        {
            vm.onScrollRegistered = true;
            vm.scrollEl.on('scroll', onScroll);
        }

        /**
         * onScroll event unregisterer
         */
        function unregisterOnScroll()
        {
            vm.onScrollRegistered = false;
            vm.scrollEl.off('scroll', onScroll);
        }
    }

    /** @ngInject */
    function msTimelineDirective()
    {
        return {
            scope           : {},
            controller      : 'MsTimelineController as vm',
            bindToController: {
                'loadMore': '&?msTimelineLoadMore'
            },
            compile         : function (tElement)
            {
                tElement.addClass('ms-timeline');

                return function postLink(scope, iElement, iAttrs, MsTimelineController)
                {
                    // Create an element for triggering the load more action and append it
                    var loadMoreEl = angular.element('<div class="loader"></div>');
                    iElement.append(loadMoreEl);

                    // Grab the scrollable element
                    var scrollEl = angular.element('#content > md-content');

                    // Initialize the controller with the values
                    MsTimelineController.init(loadMoreEl, scrollEl);

                    // Cleanup
                    scope.$on('$destroy', function ()
                    {
                        MsTimelineController.unregisterOnScroll();
                    });
                };
            }
        };
    }

    /** @ngInject */
    function MsTimelineItemController($scope, $q, $timeout)
    {
        var vm = this;

        // Data
        vm.scrollEl = undefined;
        vm.element = undefined;

        vm.threshold = 72;
        vm.itemLoaded = false;
        vm.itemInViewport = false;

        // Methods
        vm.init = init;
        vm.testForImage = testForImage;
        vm.testForVisibility = testForVisibility;

        //////////

        // Setup watchers
        setupWatchers();

        /**
         * Setup watchers
         */
        function setupWatchers()
        {
            var itemReadyWatcher = $scope.$watch(
                function ()
                {
                    return vm.itemLoaded && vm.itemInViewport;
                },
                function (current, old)
                {
                    if ( current === old )
                    {
                        return;
                    }

                    if ( current )
                    {
                        vm.element.removeClass('hidden').addClass('animate');

                        // Unbind itemReadyWatcher
                        itemReadyWatcher();
                    }
                }, true);
        }

        /**
         * Initialize the controller with the values
         *
         * @param scrollEl
         * @param element
         */
        function init(scrollEl, element)
        {
            vm.scrollEl = scrollEl;
            vm.element = element;

            // Check if the timeline item has ms-card
            if ( vm.element.find('ms-card') )
            {
                // If the ms-card template loaded...
                $scope.$on('msCard::cardTemplateLoaded', function (event, args)
                {
                    var cardEl = angular.element(args[0]);

                    // Test the card to see if there is any image on it
                    vm.testForImage(cardEl).then(function ()
                    {
                        $timeout(function ()
                        {
                            vm.itemLoaded = true;
                        });
                    });
                });
            }
            else
            {
                // Test the element to see if there is any image on it
                vm.testForImage(vm.element).then(function ()
                {
                    $timeout(function ()
                    {
                        vm.itemLoaded = true;
                    });
                });
            }

            // Check if the loaded element also in the viewport
            vm.scrollEl.on('scroll', vm.testForVisibility);

            // Test for visibility for the first time without waiting for the scroll event
            vm.testForVisibility();
        }

        /**
         * Test the given element for image
         *
         * @param element
         * @returns promise
         */
        function testForImage(element)
        {
            var deferred = $q.defer(),
                imgEl = element.find('img');

            if ( imgEl.length > 0 )
            {
                imgEl.on('load', function ()
                {
                    deferred.resolve('Image is loaded');
                });
            }
            else
            {
                deferred.resolve('No images');
            }

            return deferred.promise;
        }

        /**
         * Test the element for visibility
         */
        function testForVisibility()
        {
            if ( vm.scrollEl.scrollTop() + vm.scrollEl.height() > vm.element.position().top + vm.threshold )
            {
                $timeout(function ()
                {
                    vm.itemInViewport = true;
                });

                // Unbind the scroll event
                vm.scrollEl.off('scroll', vm.testForVisibility);
            }
        }
    }

    /** @ngInject */
    function msTimelineItemDirective()
    {
        return {
            scope     : true,
            require   : ['^msTimeline', 'msTimelineItem'],
            controller: 'MsTimelineItemController',
            compile   : function (tElement)
            {
                tElement.addClass('ms-timeline-item').addClass('hidden');

                return function postLink(scope, iElement, iAttrs, ctrls)
                {
                    var MsTimelineController = ctrls[0],
                        MsTimelineItemController = ctrls[1];

                    MsTimelineItemController.init(MsTimelineController.scrollEl, iElement);
                };
            }
        };
    }
})();