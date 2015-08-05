(function ()
{
    'use strict';

    angular.module('fuse')
        .controller('MsNavController', MsNavController)
        .controller('MsNavToggleController', MsNavToggleController)
        .directive('msNav', msNav)
        .directive('msNavItem', msNavItem)
        .directive('msNavTitle', msNavTitle)
        .directive('msNavButton', msNavButton)
        .directive('msNavToggle', msNavToggle)
        .directive('msNavToggleItems', msNavToggleItems);

    /** @ngInject */
    function MsNavController()
    {
        var vm = this,
            disabled = false,
            toggleItems = [],
            expandedItems = [];

        // Data

        // Methods
        vm.isDisabled = isDisabled;
        vm.enable = enable;
        vm.disable = disable;
        vm.setToggleItem = setToggleItem;
        vm.setExpandedItem = setExpandedItem;
        vm.clearExpandedItems = clearExpandedItems;
        vm.collapseAll = collapseAll;

        //////////

        /**
         * Is navigation disabled
         *
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

        /**
         * Set toggle item
         *
         * @param element
         * @param scope
         */
        function setToggleItem(element, scope)
        {
            toggleItems.push({
                'element': element,
                'scope'  : scope
            })
        }

        /**
         * Set expanded item
         *
         * @param element
         * @param scope
         */
        function setExpandedItem(element, scope)
        {
            expandedItems.push({
                'element': element,
                'scope'  : scope
            })
        }

        /**
         * Clear expanded items list
         */
        function clearExpandedItems()
        {
            expandedItems = [];
        }

        /**
         * Collapse all navigation items except the
         * one we just expanded and its parents
         */
        function collapseAll()
        {
            var collapse;

            angular.forEach(toggleItems, function (toggleItem)
            {
                collapse = true;

                angular.forEach(expandedItems, function (expandedItem)
                {
                    if ( angular.equals(toggleItem.scope, expandedItem.scope) )
                    {
                        collapse = false;
                    }
                });

                // Collapse
                if ( collapse )
                {
                    // Call collapse on the toggle item's scope
                    toggleItem.scope.collapse();
                }
            });
        }
    }

    /** @ngInject */
    function msNav()
    {
        return {
            restrict  : 'E',
            scope     : {},
            controller: 'MsNavController',
            compile   : function (tElement, tAttrs)
            {
                tElement.addClass('ms-nav');

                return function postLink($scope, $element, $attrs, MsNavCtrl)
                {

                }
            }
        };
    }

    /** @ngInject */
    function msNavTitle()
    {
        return {
            restrict: 'A',
            compile : function (tElement, tAttrs)
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
            compile : function (tElement, tAttrs)
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
            compile : function (tElement, tAttrs)
            {
                tElement.addClass('ms-nav-button');

                return function postLink($scope, $element)
                {

                }
            }
        };
    }

    /** @ngInject */
    function MsNavToggleController($scope, $q, $animate)
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
         *
         * @param element
         */
        function init(element)
        {
            vm.element = element;
        }

        /**
         * Is element collapsed
         *
         * @returns {bool}
         */
        function isCollapsed()
        {
            return vm.element.attr('collapsed') === 'true';
        }

        /**
         * Is element expanded
         *
         * @returns {bool}
         */
        function isExpanded()
        {
            return !isCollapsed();
        }

        /**
         * Expand the element
         *
         * @returns $promise
         */
        function expand()
        {
            // Create a new deferred object
            var deferred = $q.defer();

            // If the menu item is already expanded, do nothing..
            if ( isExpanded() )
            {
                // Reject the deferred object
                deferred.reject({'error': true});

                // Return the promise
                return deferred.promise;
            }

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

                    // Resolve the deferred object
                    deferred.resolve({'success': true});
                }
            );

            // Return the promise
            return deferred.promise;
        }

        /**
         * Collapse the element
         *
         * @returns $promise
         */
        function collapse()
        {
            // Create a new deferred object
            var deferred = $q.defer();

            // If the menu item is already collapsed, do nothing..
            if ( isCollapsed() )
            {
                // Reject the deferred object
                deferred.reject({'error': true});

                // Return the promise
                return deferred.promise;
            }

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

                    // Resolve the deferred object
                    deferred.resolve({'success': true});
                }
            );

            // Return the promise
            return deferred.promise;
        }
    }

    /** @ngInject */
    function msNavToggle()
    {
        return {
            restrict  : 'A',
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

                    // Init the toggle controller with the $element
                    MsNavToggleCtrl.init($element);

                    // Store toggle-able element and its scope in the main nav controller
                    MsNavCtrl.setToggleItem($element, $scope);

                    // Click handler
                    $element.children('.ms-nav-button').on('click', toggle);

                    // Toggle function
                    function toggle()
                    {
                        // If navigation is disabled, do nothing...
                        if ( MsNavCtrl.isDisabled() )
                        {
                            return;
                        }

                        // Disable the entire navigation to prevent spamming
                        MsNavCtrl.disable();

                        if ( MsNavToggleCtrl.isCollapsed() )
                        {
                            // Clear the expanded items list
                            MsNavCtrl.clearExpandedItems();

                            // Emit pushToExpandedList event
                            $scope.$emit('msNav::pushToExpandedList');

                            // Collapse all other menu items
                            MsNavCtrl.collapseAll();

                            // Expand this
                            expandThis();
                        }
                        else
                        {
                            // Broadcast collapseAllChildren event
                            $scope.$broadcast('msNav::collapseAllChildren');

                            // Collapse this
                            collapseThis();
                        }
                    }

                    /**
                     * Expand
                     */
                    function expandThis()
                    {
                        // Expand and then...
                        MsNavToggleCtrl.expand().then(function ()
                        {
                            // Enable the entire navigation after animations completed
                            MsNavCtrl.enable();
                        });
                    }

                    /**
                     * Collapse
                     */
                    function collapseThis()
                    {
                        // Collapse and then...
                        MsNavToggleCtrl.collapse().then(function ()
                        {
                            // Enable the entire navigation after animations completed
                            MsNavCtrl.enable();
                        });
                    }

                    // Listen for collapseAllChildren event
                    $scope.$on('msNav::collapseAllChildren', collapseThis);

                    // Listen for pushToExpandedList event
                    $scope.$on('msNav::pushToExpandedList', function ()
                    {
                        MsNavCtrl.setExpandedItem($element, $scope);
                    });

                    // Expose the controller functions to
                    // the scope for programmatic use
                    $scope.collapse = function ()
                    {
                        // Call collapse on the controller
                        MsNavToggleCtrl.collapse();
                    };

                    $scope.expand = function ()
                    {
                        // Call expand on the controller
                        MsNavToggleCtrl.expand();
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
            compile : function (tElement, tAttrs)
            {
                return function postLink($scope, $element)
                {

                }
            }
        };
    }

})();