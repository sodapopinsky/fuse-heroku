(function () {
    'use strict';

    angular.module('app.core')
        .controller('ThemeChangerController', ThemeChangerController);

    /** @ngInject */
    function ThemeChangerController($rootScope, $route, palettes, wipThemes, themeService) {
        var vm = this;
        vm.isOpen = false;
        vm.setTheme = setTheme;
        vm.themes = wipThemes;
        vm.getThemeColor = getThemeColor;

        function setTheme(themeName, themePalette) {
            $rootScope.appTheme = themeName;
            themeService.generateThemePaletteCss(themePalette);
            //for update chart colors
            $route.reload();
        }

        function getThemeColor(paletteColor, level, op) {
            op = op || 1;
            var rgb = angular.copy(palettes[paletteColor.name][level].value);
            rgb.push(op);
            //console.log(rgb);

            return 'rgba(' + rgb.join() + ')';
        }

    }
})();
