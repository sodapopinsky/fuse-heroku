(function () {
    'use strict';

    angular.module('app.core')
        .controller('ThemeChangerController', ThemeChangerController);

    /** @ngInject */
    function ThemeChangerController($rootScope, $route, fuseThemes, fuseTheming) {
        var vm = this;
        vm.isOpen = false;
        vm.setTheme = setTheme;
        vm.themes = fuseThemes;
        vm.getThemeColor = getThemeColor;

        function setTheme(themeName, themePalette) {
            $rootScope.appTheme = themeName;
            $rootScope.selectedTheme = $rootScope.themes[themeName];
            //themeService.generateThemePaletteCss(themePalette);
            //for update chart colors
            $route.reload();
        }

        function getThemeColor(paletteColor, level, op) {
            op = op || 1;
            var rgb = angular.copy(fuseTheming.palettes[paletteColor.name][level].value);
            rgb.push(op);
            //console.log(rgb);

            return 'rgba(' + rgb.join() + ')';
        }

    }
})();
