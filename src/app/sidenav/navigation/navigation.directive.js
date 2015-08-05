(function ()
{
    'use strict';

    angular.module('fuse')
        .factory('msNavService', msNavService)
        .controller('MsNavController', MsNavController)
        .controller('MsNavToggleController', MsNavToggleController)
        .directive('msNav', msNav)
        .directive('msNavItem', msNavItem)
        .directive('msNavTitle', msNavTitle)
        .directive('msNavButton', msNavButton)
        .directive('msNavToggle', msNavToggle)
        .directive('msNavToggleItems', msNavToggleItems);

    /** @ngInject */
    function msNavService()
    {
        var disabled = false;

        var service = {
            isDisabled: isDisabled,
            disable   : disable,
            enable    : enable
        };

        return service;

        //////////

        /**
         * Is navigation disabled
         * @returns {boolean}
         */
        function isDisabled()
        {
            return disabled;
        }

        /**
         * Disable the navigation
         */
        function disable()
        {
            disabled = true;
        }

        /**
         * Enable the navigation
         */
        function enable()
        {
            disabled = false;
        }

    }

    /** @ngInject */
    function MsNavController(msNavService)
    {
        var vm = this;

        // Data
        vm.element = undefined;

        // Methods
        vm.init = init;

        //////////

        /**
         * Init the controller by storing the element
         * @param element
         */
        function init(element)
        {
            vm.element = element;
        }

    }

    /** @ngInject */
    function MsNavToggleController($scope, $animate, msNavService)
    {
        var vm = this;

        // Data
        vm.element = undefined;
        vm.classes = {
            expanded         : 'expanded',
            expandAnimation  : 'expand-animation',
            collapseAnimation: 'collapse-animation'
        };

        // Methods
        vm.init = init;
        vm.isCollapsed = isCollapsed;
        vm.isExpanded = isExpanded;
        vm.expand = expand;
        vm.collapse = collapse;

        //////////

        /**
         * Init the controller by storing the element
         * @param element
         */
        function init(element)
        {
            vm.element = element;
        }

        /**
         * Is element collapsed
         * @returns {bool}
         */
        function isCollapsed()
        {
            return vm.element.attr('collapsed') === 'true';
        }

        /**
         * Is element expanded
         * @returns {bool}
         */
        function isExpanded()
        {
            return !isCollapsed();
        }

        /**
         * Expand the element
         */
        function expand()
        {
            // Disable the navigation to prevent spamming
            msNavService.disable();

            // Set element attr
            vm.element.attr('collapsed', false);

            // Grab the element to expand
            var elementToExpand = angular.element(vm.element.find('ms-nav-toggle-items')[0]);

            // Move the element out of the dom flow and
            // make it block so we can get its height
            elementToExpand.css({
                'position'  : 'absolute',
                'visibility': 'hidden',
                'display'   : 'block'
            });

            // Grab the height
            var height = elementToExpand[0].offsetHeight;

            // Reset the style modifications
            elementToExpand.css({
                'position'  : '',
                'visibility': '',
                'display'   : ''
            });

            // Animate the height
            $animate.animate(elementToExpand,
                {
                    'display': 'block',
                    'height' : '0px'
                },
                {
                    'height': height + 'px'
                },
                vm.classes.expandAnimation
            ).then(
                function ()
                {
                    // Add expanded class
                    elementToExpand.addClass(vm.classes.expanded);

                    // Clear the inline styles after animation done
                    elementToExpand.css({'height': ''});

                    // Enable the navigation
                    msNavService.enable();
                }
            );
        }

        /**
         * Collapse the element
         */
        function collapse()
        {
            // Disable the navigation to prevent spamming
            msNavService.disable();

            // Set element attr
            vm.element.attr('collapsed', true);

            // Grab the element to collapse
            var elementToCollapse = angular.element(vm.element.find('ms-nav-toggle-items')[0]);

            // Grab the height
            var height = elementToCollapse[0].offsetHeight;

            // Animate the height
            $animate.animate(elementToCollapse,
                {
                    'height': height + 'px'
                },
                {
                    'height': '0px'
                },
                vm.classes.collapseAnimation
            ).then(
                function ()
                {
                    // Remove expanded class
                    elementToCollapse.removeClass(vm.classes.expanded);

                    // Clear the inline styles after animation done
                    elementToCollapse.css({
                        'display': '',
                        'height' : ''
                    });

                    // Enable the navigation
                    msNavService.enable();
                }
            );
        }
    }

    /** @ngInject */
    function msNav()
    {
        return {
            restrict: 'E',
            scope     : {},
            controller: 'MsNavController',
            compile   : function (tElement, tAttrs)
            {
                tElement.addClass('ms-nav');

                return function postLink($scope, $element, $attrs, MsNavCtrl)
                {
                    // Init the controller with the $element
                    MsNavCtrl.init($element);
                }
            }
        };
    }

    /** @ngInject */
    function msNavTitle()
    {
        return {
            restrict: 'A',
            compile: function (tElement, tAttrs)
            {
                tElement.addClass('ms-nav-title');

                return function postLink($scope, $element)
                {

                }
            }
        };
    }

    /** @ngInject */
    function msNavItem()
    {
        return {
            restrict: 'E',
            compile: function (tElement, tAttrs)
            {
                return function postLink($scope, $element)
                {

                }
            }
        };
    }

    /** @ngInject */
    function msNavButton()
    {
        return {
            restrict: 'AE',
            compile: function (tElement, tAttrs)
            {
                tElement.addClass('ms-nav-button');

                return function postLink($scope, $element)
                {

                }
            }
        };
    }

    /** @ngInject */
    function msNavToggle(msNavService)
    {
        return {
            restrict: 'A',
            require   : ['^msNav', 'msNavToggle'],
            controller: 'MsNavToggleController',
            scope     : true,
            compile   : function (tElement, tAttrs)
            {
                tElement.addClass('ms-nav-toggle');

                // Add collapsed attr
                if ( angular.isUndefined(tAttrs.collapsed) )
                {
                    tAttrs.collapsed = true;
                }
                tElement.attr('collapsed', tAttrs.collapsed);

                return function postLink($scope, $element, $attrs, ctrls)
                {
                    var MsNavCtrl = ctrls[0],
                        MsNavToggleCtrl = ctrls[1];

                    // Init the controller with the $element
                    MsNavToggleCtrl.init($element);

                    // Click handler
                    $element.children('.ms-nav-button').on('click', toggle);

                    // Toggle function
                    function toggle()
                    {
                        // If navigation is disabled, do nothing...
                        if ( msNavService.isDisabled() )
                        {
                            return;
                        }

                        if ( MsNavToggleCtrl.isCollapsed() )
                        {
                            MsNavToggleCtrl.expand();
                        }
                        else
                        {
                            MsNavToggleCtrl.collapse();
                        }
                    }
                };
            }
        };
    }

    /** @ngInject */
    function msNavToggleItems()
    {
        return {
            restrict: 'E',
            compile: function (tElement, tAttrs)
            {
                return function postLink($scope, $element)
                {

                }
            }
        };
    }

})();