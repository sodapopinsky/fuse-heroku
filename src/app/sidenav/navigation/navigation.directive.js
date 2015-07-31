(function ()
{
    'use strict';

    angular.module('fuse')
        .factory('msNavService', msNavService)
        .controller('MsNavController', MsNavController)
        .directive('msNav', msNav)
        .directive('msNavToggle', msNavToggle);

    /** @ngInject */
    function msNavService($state)
    {
        var toggleables = [];

        var service = {
            saveToggleables  : saveToggleables,
            updateToggleables: updateToggleables,
            closeAll         : closeAll
        };

        function saveToggleables(scope, states)
        {
            toggleables.push({
                'scope' : scope,
                'states': states
            });
        }

        function updateToggleables()
        {
            // If there are no active toggles, bail
            if ( !toggleables.length )
            {
                return;
            }

            // Iterate through all toggleables and open the ones that have matching state names
            var currentState = $state.current.name;
            angular.forEach(toggleables, function (toggleable)
            {
                angular.forEach(toggleable.states, function (state)
                {
                    if ( currentState === state )
                    {
                        toggleable.scope.open();
                    }
                });
            });
        }

        /**
         * Close all
         */
        function closeAll(exception)
        {
            angular.forEach(toggleables, function (toggleable)
            {
                if ( exception && angular.equals(exception, toggleable.scope) )
                {
                    return;
                }

                toggleable.scope.close();
            });
        }

        return service;
    }

    function MsNavController()
    {
        var vm = this;
    }

    function msNav(msNavService)
    {
        return {
            scope     : {},
            controller: 'MsNavController',
            link      : function ()
            {
                msNavService.updateToggleables();
            }
        };
    }

    function msNavToggle(msNavService)
    {
        return {
            require: '^msNav',
            scope  : true,
            compile: function (element)
            {
                element.addClass('ms-nav-toggle');

                return function postLink($scope, $element)
                {
                    var toggleOpened = false;
                    var toggleItems = $element.children('ul');

                    // Iterate through all the ui-sref attributes and
                    // store them along with the scope of this toggle
                    var linkEl = $element.find('a');
                    var states = [];

                    angular.forEach(linkEl, function (link)
                    {
                        states.push(angular.element(link).attr('ui-sref'));
                    });

                    // Save toggle paths
                    msNavService.saveToggleables($scope, states);

                    /**
                     * Return if toggle is open
                     */
                    var isOpen = function ()
                    {
                        return toggleOpened;
                    };


                    /**
                     * Open the toggle
                     */
                    var open = function ()
                    {
                        $element.addClass('open');
                        toggleOpened = true;
                        toggleItems.slideDown();
                    };

                    /**
                     * Close the toggle
                     */
                    var close = function ()
                    {
                        $element.removeClass('open');
                        toggleOpened = false;
                        toggleItems.slideUp();
                    };

                    /**
                     * Toggle
                     */
                    var toggle = function ()
                    {
                        if ( isOpen() )
                        {
                            $scope.$broadcast('MSNav::ParentToggleClosed');
                            close();
                        }
                        else
                        {
                            if ( $element.parents('.ms-nav-toggle.open').length )
                            {
                                var exception = $element.parents('.ms-nav-toggle.open').scope();
                                msNavService.closeAll(exception);
                            }
                            else
                            {
                                msNavService.closeAll();
                            }

                            open();
                        }
                    };

                    // Catch broadcasted event
                    $scope.$on('MSNav::ParentToggleClosed', close);

                    // Toggle button functionality
                    var toggleButton = $element.children('.ms-nav-button');
                    toggleButton.on('click', toggle);

                    // Expose the toggle functions so we can access them from outside
                    $scope.open = open;
                    $scope.close = close;
                };
            }
        };
    }

})();