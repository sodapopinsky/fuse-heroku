(function ()
{
    'use strict';

    angular
        .module('app.core')
        .directive('msSplashScreen', msSplashScreenDirective);

    /** @ngInject */
    function msSplashScreenDirective($animate)
    {
        return {
            restrict: 'A',
            link    : function (scope, iElement)
            {
                scope.$on('msSplashScreen::remove', function ()
                {
                    scope.$evalAsync(function ()
                    {
                        $animate.leave(iElement.children().eq(1)).then(function ()
                        {
                            iElement.remove();
                        });
                    });
                });
            }
        };
    }
})();