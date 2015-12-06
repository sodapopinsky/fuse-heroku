(function ()
{
    'use strict';

    angular
        .module('app.core')
        .directive('msThemeOptions', msThemeOptionsDirective)
        .directive('msThemeOptionsButton', msThemeOptionsButtonDirective);

    /** @ngInject */
    function msThemeOptionsDirective($document)
    {
        return {
            restrict   : 'E',
            templateUrl: 'app/core/directives/ms-theme-options/ms-theme-options.html',
            controller : 'msThemeOptionsController as vm',
            scope      : true,
            link       : function (scope, element, attrs, ctrl)
            {
                scope.$on('themeOptions:toggle', function ()
                {
                    if ( element.hasClass('open') )
                    {
                        close();
                    }
                    else
                    {
                        open();
                    }

                });

                function open()
                {
                    element.addClass('open');
                    $document.on('click', outSideClick);
                }

                function close()
                {
                    element.removeClass('open');
                    $document.off('click', outSideClick);
                }

                var outSideClick = function (event)
                {
                    var isChild = element.has(event.target).length > 0;

                    if ( !isChild )
                    {
                        close();
                    }
                }

            }
        };
    }

    function msThemeOptionsButtonDirective()
    {
        return {
            restrict: 'A',
            require : '^msThemeOptions',
            link    : function (scope, element, attrs)
            {
                /**
                 * Click Event
                 */
                element.on('click', function (event)
                {
                    event.preventDefault();
                    scope.$broadcast('themeOptions:toggle');
                });
            }
        };
    }
})();