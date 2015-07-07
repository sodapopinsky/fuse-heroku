(function () {
    'use strict';

    angular
        .module('app.core')
        .provider('palettes', palettes)
        .config(themeConfiguration);

    /** @ngInject */
    function palettes() {
        var palette;
        return {
            set: function (value) {
                palette = value;
            },
            $get: function () {
                return palette;
            }
        };
    }

    /** @ngInject */
    function themeConfiguration($mdThemingProvider, wipThemes, wipPalettes, palettesProvider) {
        $mdThemingProvider.alwaysWatchTheme(true);

        angular.forEach(wipPalettes, function (palette) {
            registerPalette(palette);
        });

        palettesProvider.set($mdThemingProvider._PALETTES);

        //angular.forEach(wipThemes, function (theme) {
        for (var themeName in wipThemes) {
            registerTheme(themeName, wipThemes[themeName]);
        }

        function registerPalette(palette) {
            $mdThemingProvider.definePalette(palette.name, palette.options);
        }

        function registerTheme(themeName, themePalette) {
            //console.log(theme);
            $mdThemingProvider.theme(themeName)
                .primaryPalette(themePalette.primary.name, themePalette.primary.options)
                .accentPalette(themePalette.accent.name, themePalette.accent.options)
                .warnPalette(themePalette.warn.name, themePalette.warn.options)
                .backgroundPalette(themePalette.background.name, themePalette.background.options);
        }
    }
})();
