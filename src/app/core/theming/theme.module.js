(function ()
{
    'use strict';

    angular
        .module('app.core')
        .provider('fuseTheming', fuseTheming)
        .config(config)
        .run(runBlock);

    /** @ngInject */
    function fuseTheming()
    {
        var palettes,
            themes;

        return {
            setPalettes: function (_palettes)
            {
                palettes = _palettes;
            },
            setThemes  : function (_themes)
            {
                themes = _themes;
            },
            $get       : function ()
            {
                return {
                    palettes: palettes,
                    themes  : themes
                };
            }
        };
    }

    /** @ngInject */
    function config($mdThemingProvider, fusePalettes, fuseThemes, fuseThemingProvider)
    {
        $mdThemingProvider.alwaysWatchTheme(true);

        // Define custom palettes
        angular.forEach(fusePalettes, function (palette)
        {
            $mdThemingProvider.definePalette(palette.name, palette.options);
        });

        // Register custom themes
        for ( var themeName in fuseThemes )
        {
            var theme = fuseThemes[themeName];

            $mdThemingProvider.theme(themeName)
                .primaryPalette(theme.primary.name, theme.primary.options)
                .accentPalette(theme.accent.name, theme.accent.options)
                .warnPalette(theme.warn.name, theme.warn.options)
                .backgroundPalette(theme.background.name, theme.background.options);
        }

        // Store certain generated PALETTES and THEMES objects from
        // $mdThemingProvider so we can inject them into other areas
        fuseThemingProvider.setPalettes($mdThemingProvider._PALETTES);
        fuseThemingProvider.setThemes($mdThemingProvider._THEMES);
    }

    /** @ngInject */
    function runBlock(themeGenerator)
    {
        // Generate extra classes based on registered themes so we
        // can use same colors with non-angular-material elements
        themeGenerator.generate();
    }
})();
