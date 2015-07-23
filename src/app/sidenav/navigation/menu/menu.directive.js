(function ()
{
    'use strict';

    angular.module('fuse')
        .factory('msNavService', msNavService)
        .controller('MsNavController', MsNavController)
        .directive('msNav', msNav)
        .directive('msNavToggle', msNavToggle)

        .directive('menuLink', menuLink)
        .directive('menuToggle', menuToggle);

    /** @ngInject */
    function msNavService($state)
    {
        var togglePaths = [];

        var service = {
            saveTogglePaths: saveTogglePaths,
            updateToggle   : updateToggle
        };

        function saveTogglePaths(scope, paths)
        {
            togglePaths.push({
                'scope': scope,
                'paths': paths
            });

            //console.log(togglePaths);

            //updateToggle();
        }

        function updateToggle()
        {
            if ( !togglePaths.length )
            {
                return;
            }

            // Close all
            closeAll();

            var stateName = $state.current.name;

            angular.forEach(togglePaths, function (toggle)
            {
                console.log(toggle);

                angular.forEach(toggle.paths, function (path)
                {
                    if ( stateName === path )
                    {
                        toggle.scope.toggle();
                    }
                });
            });

        }

        function closeAll()
        {
            angular.forEach(togglePaths, function (toggle)
            {
                toggle.scope.close();
            });
        }

        return service;
    }

    function MsNavController($scope)
    {
        var vm = this;
    }

    function msNav(msNavService)
    {
        return {
            scope     : {},
            controller: 'MsNavController',
            link      : function ($scope, element, attrs)
            {
                msNavService.updateToggle();
            }
        }
    }

    function msNavToggle(msNavService)
    {
        return {
            require: '^msNav',
            scope  : {},
            compile: function (element, attrs)
            {
                element.addClass('ms-nav-toggle');

                return function postLink($scope, element, attrs, MsNavController)
                {
                    // Iterate through all the ui-sref attributes and store them
                    // with the scope of this toggle
                    var linkEl = element.find('a');
                    var paths = [];

                    angular.forEach(linkEl, function (link)
                    {
                        paths.push(angular.element(link).attr('ui-sref'));
                    });

                    msNavService.saveTogglePaths($scope, paths);

                    // Open - close functionality
                    var open = function ()
                    {
                        element.addClass('active');
                    };

                    var close = function ()
                    {
                        element.removeClass('active');

                        //element.find('.ms-nav-toggle').scope().close();

                        console.log(element.find('.ms-nav-toggle'));
                        console.log(angular.element(element.find('.ms-nav-toggle')).scope());
                    };

                    var isOpen = function ()
                    {
                        return element.hasClass('active');
                    };

                    var toggle = function ()
                    {
                        if ( isOpen() )
                        {
                            close();
                        }
                        else
                        {
                            open();
                        }
                    };

                    var toggleButton = element.children('.ms-nav-toggle-button');
                    toggleButton.on('click', toggle);

                    // Expose the toggle functions
                    $scope.toggle = toggle;
                    $scope.open = open;
                    $scope.close = close;
                }
            }
        }
    }


    function menuLink(navigation)
    {
        return {
            scope      : {
                section: '='
            },
            templateUrl: 'app/sidenav/navigation/menu/menu-link.tmpl.html',
            link       : function ($scope, $element)
            {
                var controller = $element.parent().controller();
                $scope.isSelected = function ()
                {
                    return navigation.isPageSelected($scope.section);
                };

                $scope.focusSection = function ()
                {
                    // set flag to be used later when
                    // $locationChangeSuccess calls openPage()
                    controller.autoFocusContent = true;
                };
            }
        };
    }

    function menuToggle($timeout, navigation)
    {
        return {
            scope      : {
                section: '='
            },
            templateUrl: 'app/sidenav/navigation/menu/menu-toggle.tmpl.html',
            link       : function ($scope, $element)
            {
                //var controller = $element.parent().controller();
                //var $ul = $element.find('ul');
                //var originalHeight;

                $scope.isOpen = function ()
                {
                    return navigation.isSectionSelected($scope.section);
                };
                $scope.toggle = function ()
                {
                    navigation.toggleSelectSection($scope.section);
                };
                $scope.$watch(
                    function ()
                    {
                        return navigation.isSectionSelected($scope.section);
                    },
                    function (open)
                    {
                        var $ul = $element.find('ul');
                        var targetHeight = open ? getTargetHeight() : 0;
                        $timeout(function ()
                        {
                            $ul.css({height: targetHeight + 'px'});
                        }, 0, false);

                        function getTargetHeight()
                        {
                            var targetHeight;
                            $ul.addClass('no-transition');
                            $ul.css('height', '');
                            targetHeight = $ul.prop('clientHeight');
                            $ul.css('height', 0);
                            $ul.removeClass('no-transition');
                            return targetHeight;
                        }
                    }
                );

                var parentNode = $element[0].parentNode.parentNode.parentNode;
                if ( parentNode.classList.contains('parent-list-item') )
                {
                    var heading = parentNode.querySelector('h2');
                    $element[0].firstChild.setAttribute('aria-describedby', heading.id);
                }
            }
        };
    }
})();