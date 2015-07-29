(function ()
{
    'use strict';

    angular.module('app.core')
        .factory('fuseGenerator', fuseGenerator);

    /** @ngInject */
    function fuseGenerator(fuseTheming, $rootScope)
    {
        var service = {
            generate: generate
        };

        return service;

        /**
         * Generate less variables
         */
        function generate()
        {
            var palettes = fuseTheming.palettes;
            var themeList = {};

            // Iterate through themes
            angular.forEach(fuseTheming.themes, function (theme)
            {
                themeList[theme.name] = {};

                // Iterate through color types
                angular.forEach(theme.colors, function (colorType, colorTypeName)
                {
                    themeList[theme.name][colorTypeName] = {
                        'name'  : colorType.name,
                        'levels': {
                            'default': {
                                'color'   : rgba(palettes[colorType.name][colorType.hues.default].value),
                                'contrast': rgba(palettes[colorType.name][colorType.hues.default].contrast)
                            },
                            'hue1'   : {
                                'color'   : rgba(palettes[colorType.name][colorType.hues['hue-1']].value),
                                'contrast': rgba(palettes[colorType.name][colorType.hues['hue-1']].contrast)
                            },
                            'hue2'   : {
                                'color'   : rgba(palettes[colorType.name][colorType.hues['hue-2']].value),
                                'contrast': rgba(palettes[colorType.name][colorType.hues['hue-2']].contrast)
                            },
                            'hue3'   : {
                                'color'   : rgba(palettes[colorType.name][colorType.hues['hue-3']].value),
                                'contrast': rgba(palettes[colorType.name][colorType.hues['hue-3']].contrast)
                            }
                        }
                    };
                });
            });

            $rootScope.themes = angular.copy(themeList);

            // Reformat themes for Object Usage
            angular.forEach($rootScope.themes, function (theme)
            {
                angular.forEach(theme, function (colorType, colorTypeName)
                {
                    theme[colorTypeName] = colorType.levels;
                    theme[colorTypeName].color = colorType.levels.default.color;
                    theme[colorTypeName].contrast = colorType.levels.default.contrast;
                    delete theme[colorTypeName].default;
                });
            });
            $rootScope.selectedTheme = $rootScope.themes.default;

            // Iterate through color list and create less variables
            var lessVars = [];

            angular.forEach(themeList, function (theme, themeName)
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

        /**
         * Convert color array to rgb/rgba
         */
        function rgba(color)
        {
            if ( color.length === 3 )
            {
                return 'rgb(' + color.join(',') + ')';
            }
            else
            {
                return 'rgba(' + color.join(',') + ')';
            }
        }

        /**
         * Uppercase first
         */
        function ucfirst(string)
        {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        /**
         * Render less files
         */
        function render(lessVars)
        {
            var lessColorStyles = '[md-theme=@{themeName}] {\n\n    /**\n    * Primary\n    */\n    .md-primary-bg {\n        background-color: @primaryDefaultColor;\n        color: @primaryDefaultContrast;\n        &.md-hue-1 {\n            background-color: @primaryHue1Color;\n            color: @primaryHue1Contrast;\n        }\n        &.md-hue-2 {\n            background-color: @primaryHue2Color;\n            color: @primaryHue2Contrast;\n        }\n        &.md-hue-3 {\n            background-color: @primaryHue3Color;\n            color: @primaryHue3Contrast;\n        }\n    }\n\n    .md-primary-fg {\n        color: @primaryDefaultColor;\n        &.md-hue-1 {\n            color: @primaryHue1Color;\n        }\n        &.md-hue-2 {\n            color: @primaryHue2Color;\n        }\n        &.md-hue-3 {\n            color: @primaryHue3Color;\n        }\n    }\n\n    /**\n      * Accent\n      */\n    .md-accent-bg {\n        background-color: @accentDefaultColor;\n        color: @accentDefaultContrast;\n        &.md-hue-1 {\n            background-color: @accentHue1Color;\n            color: @accentHue1Contrast;\n        }\n        &.md-hue-2 {\n            background-color: @accentHue2Color;\n            color: @accentHue2Contrast;\n        }\n        &.md-hue-3 {\n            background-color: @accentHue3Color;\n            color: @accentHue3Contrast;\n        }\n    }\n\n    .md-accent-fg {\n        color: @accentDefaultColor;\n        &.md-hue-1 {\n            color: @accentHue1Color;\n        }\n        &.md-hue-2 {\n            color: @accentHue2Color;\n        }\n        &.md-hue-3 {\n            color: @accentHue3Color;\n        }\n    }\n\n    /**\n      * Warn\n      */\n    .md-warn-bg {\n        background-color: @warnDefaultColor;\n        color: @warnDefaultContrast;\n        &.md-hue-1 {\n            background-color: @warnHue1Color;\n            color: @warnHue1Contrast;\n        }\n        &.md-hue-2 {\n            background-color: @warnHue2Color;\n            color: @warnHue2Contrast;\n        }\n        &.md-hue-3 {\n            background-color: @warnHue3Color;\n            color: @warnHue3Contrast;\n        }\n    }\n\n    .md-warn-fg {\n        color: @warnDefaultColor;\n        &.md-hue-1 {\n            color: @warnHue1Color;\n        }\n        &.md-hue-2 {\n            color: @warnHue2Color;\n        }\n        &.md-hue-3 {\n            color: @warnHue3Color;\n        }\n    }\n\n    /**\n    * Background\n    */\n    .md-background-bg {\n        background-color: @backgroundDefaultColor;\n        color: @backgroundDefaultContrast;\n        &.md-hue-1 {\n            background-color: @backgroundHue1Color;\n            color: @backgroundHue1Contrast;\n        }\n        &.md-hue-2 {\n            background-color: @backgroundHue2Color;\n            color: @backgroundHue2Contrast;\n        }\n        &.md-hue-3 {\n            background-color: @backgroundHue3Color;\n            color: @backgroundHue3Contrast;\n        }\n    }\n\n    .md-background-fg {\n        color: @backgroundDefaultColor;\n        &.md-hue-1 {\n            color: @backgroundHue1Color;\n        }\n        &.md-hue-2 {\n            color: @backgroundHue2Color;\n        }\n        &.md-hue-3 {\n            color: @backgroundHue3Color;\n        }\n    }\n}\n';
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
    }

})();