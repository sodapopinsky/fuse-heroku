(function ()
{
    'use strict';

    angular.module('app.core')
        .controller('ThemeChangerController', ThemeChangerController);

    /** @ngInject */
    function ThemeChangerController($rootScope, $route, fuseThemes, fuseTheming)
    {
        var vm = this;
        vm.isOpen = false;
        vm.setTheme = setTheme;
        vm.themes = fuseThemes;
        vm.getThemeColor = getThemeColor;

        /**
         * Set theme
         *
         * @param themeName
         */
        function setTheme(themeName)
        {
            $rootScope.appTheme = themeName;
            $rootScope.selectedTheme = $rootScope.themes[themeName];
            $route.reload();
        }

        /**
         * Get certain color from theme
         *
         * @param paletteColor
         * @param level
         * @returns {string}
         */
        function getThemeColor(paletteColor, level)
        {
            var color = angular.copy(fuseTheming.palettes[paletteColor.name][level].value);

            if ( color.length === 4 )
            {
                return 'rgba(' + color.join() + ')';
            }
            else
            {
                return 'rgb(' + color.join() + ')';
            }
        }
    }
})();
