(function ()
{
    'use strict';

    angular.module('app.core')
        .factory('fuseGenerator', fuseGenerator);

    /** @ngInject */
    function fuseGenerator($rootScope, fuseTheming)
    {
        // Storage for simplified themes object
        var themes = {};

        var service = {
            generate: generate
        };

        return service;

        /**
         * Generate less variables for each theme from theme's
         * palette by using material color naming conventions
         */
        function generate()
        {
            var registeredThemes = fuseTheming.themes;
            var registeredPalettes = fuseTheming.palettes;

            // First, create a simplified object that stores
            // all registered themes and their colors

            // Iterate through registered themes
            angular.forEach(registeredThemes, function (registeredTheme)
            {
                themes[registeredTheme.name] = {};

                // Iterate through color types
                angular.forEach(registeredTheme.colors, function (colorType, colorTypeName)
                {
                    themes[registeredTheme.name][colorTypeName] = {
                        'name'  : colorType.name,
                        'levels': {
                            'default': {
                                'color'    : rgba(registeredPalettes[colorType.name][colorType.hues.default].value),
                                'contrast1' : rgba(registeredPalettes[colorType.name][colorType.hues.default].contrast, 1),
                                'contrast2': rgba(registeredPalettes[colorType.name][colorType.hues.default].contrast, 2),
                                'contrast3': rgba(registeredPalettes[colorType.name][colorType.hues.default].contrast, 3),
                                'contrast4': rgba(registeredPalettes[colorType.name][colorType.hues.default].contrast, 4)
                            },
                            'hue1'   : {
                                'color'   : rgba(registeredPalettes[colorType.name][colorType.hues['hue-1']].value),
                                'contrast1': rgba(registeredPalettes[colorType.name][colorType.hues['hue-1']].contrast, 1),
                                'contrast2': rgba(registeredPalettes[colorType.name][colorType.hues['hue-1']].contrast, 2),
                                'contrast3': rgba(registeredPalettes[colorType.name][colorType.hues['hue-1']].contrast, 3),
                                'contrast4': rgba(registeredPalettes[colorType.name][colorType.hues['hue-1']].contrast, 4)
                            },
                            'hue2'   : {
                                'color'   : rgba(registeredPalettes[colorType.name][colorType.hues['hue-2']].value),
                                'contrast1': rgba(registeredPalettes[colorType.name][colorType.hues['hue-2']].contrast, 1),
                                'contrast2': rgba(registeredPalettes[colorType.name][colorType.hues['hue-2']].contrast, 2),
                                'contrast3': rgba(registeredPalettes[colorType.name][colorType.hues['hue-2']].contrast, 3),
                                'contrast4': rgba(registeredPalettes[colorType.name][colorType.hues['hue-2']].contrast, 4)
                            },
                            'hue3'   : {
                                'color'   : rgba(registeredPalettes[colorType.name][colorType.hues['hue-3']].value),
                                'contrast1': rgba(registeredPalettes[colorType.name][colorType.hues['hue-3']].contrast, 1),
                                'contrast2': rgba(registeredPalettes[colorType.name][colorType.hues['hue-3']].contrast, 2),
                                'contrast3': rgba(registeredPalettes[colorType.name][colorType.hues['hue-3']].contrast, 3),
                                'contrast4': rgba(registeredPalettes[colorType.name][colorType.hues['hue-3']].contrast, 4)
                            }
                        }
                    };
                });
            });

            console.log(themes);

            // Store the themes in the service for external use
            storeThemes(themes);

            // Iterate through simplified themes
            // object and create less variables
            var lessVars = [];

            angular.forEach(themes, function (theme, themeName)
            {
                lessVars = [];
                lessVars.push('@themeName:' + themeName);

                angular.forEach(theme, function (colorTypes, colorTypeName)
                {
                    angular.forEach(colorTypes.levels, function (colors, colorLevelName)
                    {
                        angular.forEach(colors, function (color, colorName)
                        {
                            lessVars.push('@' + colorTypeName + ucfirst(colorLevelName) + ucfirst(colorName) + ':' + color);
                        });
                    });
                });

                // Join variables
                lessVars = lessVars.join(';\n') + ';';

                // Render less
                render(lessVars);
            });
        }

        // -------------------------
        // INTERNAL HELPER FUNCTIONS
        // -------------------------

        /**
         * Modify and store themes for global use
         *
         * @param themes
         */
        function storeThemes(themes)
        {
            var t = angular.copy(themes);

            // Reformat themes for Object Usage
            angular.forEach(t, function (theme)
            {
                angular.forEach(theme, function (colorType, colorTypeName)
                {
                    theme[colorTypeName] = colorType.levels;
                    theme[colorTypeName].color = colorType.levels.default.color;
                    theme[colorTypeName].contrast1 = colorType.levels.default.contrast1;
                    theme[colorTypeName].contrast2 = colorType.levels.default.contrast2;
                    theme[colorTypeName].contrast3 = colorType.levels.default.contrast3;
                    theme[colorTypeName].contrast4 = colorType.levels.default.contrast4;
                    delete theme[colorTypeName].default;
                });
            });

            // Store themes and selected theme on the $rootScope
            $rootScope.themes = t;
            $rootScope.selectedTheme = t.default;

            console.log(t);
        }


        /**
         * Render less files
         */
        function render(lessVars)
        {
            var lessColorStyles = '[md-theme=@{themeName}] {\n\n    .secondary-text,\n    .icon {\n        color: @backgroundDefaultContrast2;\n    }\n\n    .hint-text,\n    .disabled-text {\n        color: @backgroundDefaultContrast3;\n    }\n\n    .divider {\n        color: @backgroundDefaultContrast4;\n    }\n\n    // Primary\n    .md-primary-bg {\n        background-color: @primaryDefaultColor;\n        color: @primaryDefaultContrast1;\n\n        .secondary-text,\n        .icon {\n            color: @primaryDefaultContrast2;\n        }\n\n        .hint-text,\n        .disabled-text {\n            color: @primaryDefaultContrast3;\n        }\n\n        .divider {\n            color: @primaryDefaultContrast4;\n        }\n\n        // Primary, Hue-1\n        &.md-hue-1 {\n            background-color: @primaryHue1Color;\n            color: @primaryHue1Contrast1;\n\n            .secondary-text,\n            .icon {\n                color: @primaryHue1Contrast2;\n            }\n\n            .hint-text,\n            .disabled-text {\n                color: @primaryHue1Contrast3;\n            }\n\n            .divider {\n                color: @primaryHue1Contrast4;\n            }\n        }\n\n        // Primary, Hue-2\n        &.md-hue-2 {\n            background-color: @primaryHue2Color;\n            color: @primaryHue2Contrast1;\n\n            .secondary-text,\n            .icon {\n                color: @primaryHue2Contrast2;\n            }\n\n            .hint-text,\n            .disabled-text {\n                color: @primaryHue2Contrast3;\n            }\n\n            .divider {\n                color: @primaryHue2Contrast4;\n            }\n        }\n\n        // Primary, Hue-3\n        &.md-hue-3 {\n            background-color: @primaryHue3Color;\n            color: @primaryHue3Contrast1;\n\n            .secondary-text,\n            .icon {\n                color: @primaryHue3Contrast1;\n            }\n\n            .hint-text,\n            .disabled-text {\n                color: @primaryHue3Contrast3;\n            }\n\n            .divider {\n                color: @primaryHue3Contrast4;\n            }\n        }\n    }\n\n    // Primary foreground\n    .md-primary-fg {\n        color: @primaryDefaultColor;\n\n        // Primary foreground, Hue-1\n        &.md-hue-1 {\n            color: @primaryHue1Color;\n        }\n\n        // Primary foreground, Hue-2\n        &.md-hue-2 {\n            color: @primaryHue2Color;\n        }\n\n        // Primary foreground, Hue-3\n        &.md-hue-3 {\n            color: @primaryHue3Color;\n        }\n    }\n\n    // Accent\n    .md-accent-bg {\n        background-color: @accentDefaultColor;\n        color: @accentDefaultContrast1;\n\n        .secondary-text,\n        .icon {\n            color: @accentDefaultContrast2;\n        }\n\n        .hint-text,\n        .disabled-text {\n            color: @accentDefaultContrast3;\n        }\n\n        .divider {\n            color: @accentDefaultContrast4;\n        }\n\n        // Accent, Hue-1\n        &.md-hue-1 {\n            background-color: @accentHue1Color;\n            color: @accentHue1Contrast1;\n\n            .secondary-text,\n            .icon {\n                color: @accentHue1Contrast2;\n            }\n\n            .hint-text,\n            .disabled-text {\n                color: @accentHue1Contrast3;\n            }\n\n            .divider {\n                color: @accentHue1Contrast4;\n            }\n        }\n\n        // Accent, Hue-2\n        &.md-hue-2 {\n            background-color: @accentHue2Color;\n            color: @accentHue2Contrast1;\n\n            .secondary-text,\n            .icon {\n                color: @accentHue2Contrast2;\n            }\n\n            .hint-text,\n            .disabled-text {\n                color: @accentHue2Contrast3;\n            }\n\n            .divider {\n                color: @accentHue2Contrast4;\n            }\n        }\n\n        // Accent, Hue-3\n        &.md-hue-3 {\n            background-color: @accentHue3Color;\n            color: @accentHue3Contrast1;\n\n            .secondary-text,\n            .icon {\n                color: @accentHue3Contrast2;\n            }\n\n            .hint-text,\n            .disabled-text {\n                color: @accentHue3Contrast3;\n            }\n\n            .divider {\n                color: @accentHue3Contrast4;\n            }\n        }\n    }\n\n    // Accent foreground\n    .md-accent-fg {\n        color: @accentDefaultColor;\n        \n        // Accent foreground, Hue-1\n        &.md-hue-1 {\n            color: @accentHue1Color;\n        }\n        \n        // Accent foreground, Hue-2\n        &.md-hue-2 {\n            color: @accentHue2Color;\n        }\n        \n        // Accent foreground, Hue-3\n        &.md-hue-3 {\n            color: @accentHue3Color;\n        }\n    }\n\n    // Warn\n    .md-warn-bg {\n        background-color: @warnDefaultColor;\n        color: @warnDefaultContrast1;\n\n        .secondary-text,\n        .icon {\n            color: @warnDefaultContrast2;\n        }\n\n        .hint-text,\n        .disabled-text {\n            color: @warnDefaultContrast3;\n        }\n\n        .divider {\n            color: @warnDefaultContrast4;\n        }\n        \n        // Warn, Hue-1\n        &.md-hue-1 {\n            background-color: @warnHue1Color;\n            color: @warnHue1Contrast1;\n\n            .secondary-text,\n            .icon {\n                color: @warnHue1Contrast2;\n            }\n\n            .hint-text,\n            .disabled-text {\n                color: @warnHue1Contrast3;\n            }\n\n            .divider {\n                color: @warnHue1Contrast4;\n            }\n        }\n\n        // Warn, Hue-2\n        &.md-hue-2 {\n            background-color: @warnHue2Color;\n            color: @warnHue2Contrast1;\n\n            .secondary-text,\n            .icon {\n                color: @warnHue2Contrast2;\n            }\n\n            .hint-text,\n            .disabled-text {\n                color: @warnHue2Contrast3;\n            }\n\n            .divider {\n                color: @warnHue2Contrast4;\n            }\n        }\n\n        // Warn, Hue-3\n        &.md-hue-3 {\n            background-color: @warnHue3Color;\n            color: @warnHue3Contrast1;\n\n            .secondary-text,\n            .icon {\n                color: @warnHue3Contrast2;\n            }\n\n            .hint-text,\n            .disabled-text {\n                color: @warnHue3Contrast3;\n            }\n\n            .divider {\n                color: @warnHue3Contrast4;\n            }\n        }\n    }\n\n    // Warn foreground\n    .md-warn-fg {\n        color: @warnDefaultColor;\n        \n        // Warn foreground, Hue-1\n        &.md-hue-1 {\n            color: @warnHue1Color;\n        }\n        \n        // Warn foreground, Hue-2\n        &.md-hue-2 {\n            color: @warnHue2Color;\n        }\n        \n        // Warn foreground, Hue-3\n        &.md-hue-3 {\n            color: @warnHue3Color;\n        }\n    }\n\n    // Background\n    .md-background-bg {\n        background-color: @backgroundDefaultColor;\n        color: @backgroundDefaultContrast1;\n        \n        // Background, Hue-1\n        &.md-hue-1 {\n            background-color: @backgroundHue1Color;\n            color: @backgroundHue1Contrast1;\n        }\n        \n        // Background, Hue-2\n        &.md-hue-2 {\n            background-color: @backgroundHue2Color;\n            color: @backgroundHue2Contrast1;\n        }\n        \n        // Background, Hue-3\n        &.md-hue-3 {\n            background-color: @backgroundHue3Color;\n            color: @backgroundHue3Contrast1;\n        }\n    }\n\n    // Background foreground\n    .md-background-fg {\n        color: @backgroundDefaultColor;\n        \n        // Background foreground, Hue-1\n        &.md-hue-1 {\n            color: @backgroundHue1Color;\n        }\n        \n        // Background foreground, Hue-2\n        &.md-hue-2 {\n            color: @backgroundHue2Color;\n        }\n        \n        // Background foreground, Hue-3\n        &.md-hue-3 {\n            color: @backgroundHue3Color;\n        }\n    }\n}\n';
            var lessInput = lessVars + lessColorStyles;

            less
                .render(lessInput, {})
                .then(function (output)
                {
                    var headEl = document.getElementsByTagName('head')[0];
                    var styleEl = document.createElement('style');
                    styleEl.setAttribute('type', 'text/css');
                    styleEl.appendChild(document.createTextNode(output.css));
                    headEl.appendChild(styleEl);
                },
                function (error)
                {
                    console.error(error);
                });
        }

        /**
         * Convert color array to rgb/rgba
         * Also apply contrast fixes if necessary
         */
        function rgba(color, _contrastLevel)
        {
            var contrastLevel = _contrastLevel || false;

            // Fix 255,255,255,0.XX to 255,255,255
            if ( color.length === 4 && color[0] === 255)
            {
                color.splice(3, 4);
            }

            if ( contrastLevel )
            {
                color = applyContrast(color, contrastLevel);
            }

            if ( color.length === 3 )
            {
                return 'rgb(' + color.join(',') + ')';
            }
            else if ( color.length === 4 )
            {
                return 'rgba(' + color.join(',') + ')';
            }
            else
            {
                console.error('Invalid number of arguments in the color array: ' + color.length + '\n' + 'The array must have 3 or 4 colors.');
            }
        }

        /**
         * Apply given contrast level to the given color
         *
         * @param color
         * @param contrastLevel
         */
        function applyContrast(color, contrastLevel)
        {
            var contrastLevels = {
                'white': {
                    '1': '1',
                    '2': '0.7',
                    '3': '0.3',
                    '4': '0.12'
                },
                'black': {
                    '1': '0.87',
                    '2': '0.54',
                    '3': '0.26',
                    '4': '0.12'
                }
            };

            // If white
            if ( color[0] === 255 && color[1] === 255 && color[2] === 255)
            {
                color[3] = contrastLevels.white[contrastLevel];
            }
            // If black
            else if ( color[0] === 0 && color[1] === 0, color[2] === 0 )
            {
                color[3] = contrastLevels.black[contrastLevel];
            }

            return color;
        }

        /**
         * Uppercase first
         */
        function ucfirst(string)
        {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

})();