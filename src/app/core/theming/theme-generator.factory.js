(function () {
    'use strict';

    angular.module('app.core')
        .factory('themeGenerator', themeGenerator);

    /** @ngInject */
    function themeGenerator(fuseTheming) {
        var service = {
            generate: generate
        };

        return service;

        /**
         * Generate less variables
         */
        function generate() {
            console.log(fuseTheming.themes);
            console.log(fuseTheming.palettes);

            var palettes = fuseTheming.palettes;
            var themeList = {};

            // Iterate through themes
            angular.forEach(fuseTheming.themes, function (theme) {
                themeList[theme.name] = {};

                // Iterate through color types
                angular.forEach(theme.colors, function (colorType, colorTypeName) {
                    themeList[theme.name][colorTypeName] = {
                        'name': colorType.name,
                        'levels': {
                            'default': {
                                'color': rgba(palettes[colorType.name][colorType.hues.default].value),
                                'contrast': rgba(palettes[colorType.name][colorType.hues.default].contrast)
                            },
                            'hue1': {
                                'color': rgba(palettes[colorType.name][colorType.hues['hue-1']].value),
                                'contrast': rgba(palettes[colorType.name][colorType.hues['hue-1']].contrast)
                            },
                            'hue2': {
                                'color': rgba(palettes[colorType.name][colorType.hues['hue-2']].value),
                                'contrast': rgba(palettes[colorType.name][colorType.hues['hue-2']].contrast)
                            },
                            'hue3': {
                                'color': rgba(palettes[colorType.name][colorType.hues['hue-3']].value),
                                'contrast': rgba(palettes[colorType.name][colorType.hues['hue-3']].contrast)
                            }
                        }
                    };
                });
            });


            // Iterate through color list and create less variables
            var lessVars = [];

            angular.forEach(themeList, function (theme, themeName) {
                lessVars = [];
                lessVars.push('@themeName:' + themeName);

                angular.forEach(theme, function (colorTypes, colorTypeName) {

                    angular.forEach(colorTypes.levels, function (colors, colorLevelName) {
                        angular.forEach(colors, function (color, colorName) {
                            lessVars.push('@' + colorTypeName + ucfirst(colorLevelName) + ucfirst(colorName) + ':' + color);
                        });
                    });
                });

                // Join variables
                lessVars = lessVars.join(';\n') + ';';

                // Render less
                render(lessVars);
            });

            //console.log(lessVars);
            //console.log(themeList);
        }

        /**
         * Convert color array to rgb/rgba
         */
        function rgba(color) {
            if (color.length === 3) {
                return 'rgb(' + color.join(',') + ')';
            }
            else {
                return 'rgba(' + color.join(',') + ')';
            }
        }

        /**
         * Uppercase first
         */
        function ucfirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        /**
         * Render less files
         */
        function render(lessVars) {
            var lessColorStyles = '[md-theme=@{themeName}] {\n\n  /**\n   primary \n   **/\n\n  .md-primary-bg {\n    background: @primaryDefaultColor;\n    color: @primaryDefaultContrast;\n    &.md-hue-1 {\n      background: @primaryHue1Color;\n      color: @primaryHue1Contrast;\n    }\n    &.md-hue-2 {\n      background: @primaryHue2Color;\n      color: @primaryHue2Contrast;\n    }\n    &.md-hue-3 {\n      background: @primaryHue3Color;\n      color: @primaryHue3Contrast;\n    }\n  }\n\n  .md-primary-fg {\n    color: @primaryDefaultContrast;\n    &.md-hue-1 {\n      color: @primaryHue1Contrast;\n    }\n    &.md-hue-2 {\n      color: @primaryHue2Contrast;\n    }\n    &.md-hue-3 {\n      color: @primaryHue3Contrast;\n    }\n  }\n\n  /**\n   accent \n   **/\n\n  .md-accent-bg {\n    background: @accentDefaultColor;\n    color: @accentDefaultContrast;\n    &.md-hue-1 {\n      background: @accentHue1Color;\n      color: @accentHue1Contrast;\n    }\n    &.md-hue-2 {\n      background: @accentHue2Color;\n      color: @accentHue2Contrast;\n    }\n    &.md-hue-3 {\n      background: @accentHue3Color;\n      color: @accentHue3Contrast;\n    }\n  }\n\n  .md-accent-fg {\n    color: @accentDefaultContrast;\n    &.md-hue-1 {\n      color: @accentHue1Contrast;\n    }\n    &.md-hue-2 {\n      color: @accentHue2Contrast;\n    }\n    &.md-hue-3 {\n      color: @accentHue3Contrast;\n    }\n  }\n\n  /**\n   warn \n   **/\n\n  .md-warn-bg {\n    background: @warnDefaultColor;\n    color: @warnDefaultContrast;\n    &.md-hue-1 {\n      background: @warnHue1Color;\n      color: @warnHue1Contrast;\n    }\n    &.md-hue-2 {\n      background: @warnHue2Color;\n      color: @warnHue2Contrast;\n    }\n    &.md-hue-3 {\n      background: @warnHue3Color;\n      color: @warnHue3Contrast;\n    }\n  }\n\n  .md-warn-fg {\n    color: @warnDefaultContrast;\n    &.md-hue-1 {\n      color: @warnHue1Contrast;\n    }\n    &.md-hue-2 {\n      color: @warnHue2Contrast;\n    }\n    &.md-hue-3 {\n      color: @warnHue3Contrast;\n    }\n  }\n\n  /**\n   background \n   **/\n\n  .md-background-bg {\n    background: @backgroundDefaultColor;\n    color: @backgroundDefaultContrast;\n    &.md-hue-1 {\n      background: @backgroundHue1Color;\n      color: @backgroundHue1Contrast;\n    }\n    &.md-hue-2 {\n      background: @backgroundHue2Color;\n      color: @backgroundHue2Contrast;\n    }\n    &.md-hue-3 {\n      background: @backgroundHue3Color;\n      color: @backgroundHue3Contrast;\n    }\n  }\n\n  .md-background-fg {\n    color: @backgroundDefaultContrast;\n    &.md-hue-1 {\n      color: @backgroundHue1Contrast;\n    }\n    &.md-hue-2 {\n      color: @backgroundHue2Contrast;\n    }\n    &.md-hue-3 {\n      color: @backgroundHue3Contrast;\n    }\n  }\n}\n';
            var lessInput = lessVars + lessColorStyles;

            console.log(lessInput);

            less
                .render(lessInput, {})
                .then(function (output) {
                    var headEl = document.getElementsByTagName('head')[0];
                    var styleEl = document.createElement('style');
                    styleEl.setAttribute('type', 'text/css');
                    styleEl.appendChild(document.createTextNode(output.css));
                    headEl.appendChild(styleEl);
                },
                function (error) {
                    console.error(error);
                });
        }
    }

})
();