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
        var parser,
            palettes,
            themes;

        return {
            setParser  : function (_parser)
            {
                parser = _parser;
            },
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
                    parser  : parser,
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

        fuseThemingProvider.setParser($mdThemingProvider._parseRules);
        fuseThemingProvider.setPalettes($mdThemingProvider._PALETTES);
        fuseThemingProvider.setThemes($mdThemingProvider._THEMES);
    }

    /** @ngInject */
    function runBlock($rootScope, fuseTheming, fuseThemes, themeService, $mdColorPalette, themeGenerator)
    {

        // Generate custom rules
        //generateCustomRules();

        // Generate theme palette css
        //themeService.generateThemePaletteCss(fuseThemes.default);

        //console.log($rootScope);

        /**
         * Generate custom css rules
         */
        function generateCustomRules()
        {
            // Get document head
            var headEl = document.getElementsByTagName('head')[0];

            // Custom rules
            var customRules = {
                'primary': ".md-primary-bg.md-THEME_NAME-theme .secondary-text { color: '{{primary-contrast}}' }",
                //'accent' : ".md-THEME_NAME-theme.md-accent-bg .secondary-text { color: '{{accent-contrast}}' }",
                //'warn'   : ".md-THEME_NAME-theme.md-warn-bg .secondary-text { color: '{{warn-contrast}}' }"
                //'background': ".md-THEME_NAME-theme .secondary-text { color: '{{foreground-2}}' }",
            };

            // Iterate through each theme
            for ( var themeName in fuseThemes )
            {
                // Get the theme
                var theme = fuseTheming.themes[themeName];

                // Iterate through every color type
                for ( var colorType in customRules )
                {
                    // Generate rules for the selected color type
                    var generatedRules = fuseTheming.parser(theme, colorType, customRules[colorType]);

                    // Iterate through generated rules
                    angular.forEach(generatedRules, function (generatedRule)
                    {
                        // Create a new style element
                        var styleEl = document.createElement('style');
                        styleEl.setAttribute('type', 'text/css');

                        // Insert generated rules to the style element and append the style element to the <head>
                        styleEl.appendChild(document.createTextNode(generatedRule));
                        headEl.appendChild(styleEl);
                    });
                }

                //console.log(generatedRules);
                //console.log(fuseTheming.themes[themeName]);

            }
        }

        // Generate themes
        themeGenerator.generate();
    }
})();
