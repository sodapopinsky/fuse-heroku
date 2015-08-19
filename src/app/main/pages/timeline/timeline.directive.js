(function ()
{
    'use strict';

    angular.module('fuse')
        .directive('msTimeline', msTimeline)
        .directive('onRepeatDone', onRepeatDone);

    /** @ngInject */
    function onRepeatDone()
    {
        return {
            restriction: 'A',
            link       : function ($scope, element, attributes)
            {
                $scope.$emit(attributes.onRepeatDone || 'repeatDone', element);
            }
        };
    }

    /** @ngInject */
    function msTimeline($window, $timeout)
    {
        return {
            scope: true,
            link : function ($scope, $element)
            {
                var vm = $scope.vm;
                var timelineHeight;
                var scrollEl = angular.element('#content > md-content');
                vm.limit = 1;


                // When ng-repeat done
                $scope.$on('repeatDone', function ()
                {
                    // If msCard exists; wait for template load
                    if ( $element.find('ms-card').length > 0 )
                    {
                        $scope.$on('templateLoaded', function ()
                        {
                            initTimeline();
                        });
                    }
                    else
                    {
                        initTimeline();
                    }
                });

                // Add Items for the first load
                function initTimeline()
                {
                    // Wait if image exists in timeline item
                    if ( $element.find('img').length > 0 )
                    {
                        // Images loaded in timeline item
                        $element.find('img').bind('load', function ()
                        {
                            console.log('images loaded');
                            checkHeights();
                        });
                    }
                    else
                    {
                        checkHeights();
                    }

                }

                // If timeline height smaller than content height
                // adds one item more
                function checkHeights()
                {
                    timelineHeight = $element.outerHeight();

                    console.log(scrollEl.outerHeight());
                    console.log(timelineHeight);

                    if ( timelineHeight < scrollEl.outerHeight() )
                    {
                        addItem();
                    }

                }

                function addItem()
                {
                    $timeout(function ()
                    {
                        vm.limit++;
                    });
                }


                // On Content scroll
                scrollEl.on('scroll', function ()
                {
                    console.log('scrolled');
                    if ( scrollEl[0].scrollTop + scrollEl[0].offsetHeight >= scrollEl[0].scrollHeight )
                    {
                        addItem();
                        console.log('limit increased');
                    }

                });
            }
        };
    }
})();
