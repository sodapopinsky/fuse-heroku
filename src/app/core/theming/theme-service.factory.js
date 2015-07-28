(function () {
    'use strict';

    angular.module('app.core')
        .factory('themeService', themeService);

    /** @ngInject */
    function themeService($rootScope, fuseTheming) {
        var theme = {
            generateThemePaletteCss: generateThemePaletteCss
        };
        return theme;
        function generateThemePaletteCss(themePalette) {
            $rootScope.themePaletteCss = '';
            var colorTypes = {
                primary: {
                    type: 'primary',
                    hues: {
                        'default': {class: '', level: '500'},
                        'hue-1': {class: '.md-hue-1', level: '300'},
                        'hue-2': {class: '.md-hue-2', level: '800'},
                        'hue-3': {class: '.md-hue-3', level: 'A100'}
                    },
                    opacity: [
                        {class: '', level: '1'},
                        {class: '.o-33', level: '0.33'},
                        {class: '.o-66', level: '0.66'},
                    ]
                },
                accent: {
                    type: 'accent',
                    hues: {
                        'default': {class: '', level: 'A200'},
                        'hue-1': {class: '.md-hue-1', level: 'A100'},
                        'hue-2': {class: '.md-hue-2', level: 'A400'},
                        'hue-3': {class: '.md-hue-3', level: 'A700'}
                    },
                    opacity: [
                        {class: '', level: '1'},
                        {class: '.o-33', level: '0.33'},
                        {class: '.o-66', level: '0.66'},
                    ]
                },
                warn: {
                    type: 'warn',
                    hues: {
                        'default': {class: '', level: '500'},
                        'hue-1': {class: '.md-hue-1', level: '300'},
                        'hue-2': {class: '.md-hue-2', level: '800'},
                        'hue-3': {class: '.md-hue-3', level: 'A100'}
                    },
                    opacity: [
                        {class: '', level: '1'},
                        {class: '.o-33', level: '0.33'},
                        {class: '.o-66', level: '0.66'},
                    ]
                },
                background: {
                    type: 'background',
                    hues: {
                        'default': {class: '', level: 'A100'},
                        'hue-1': {class: '.md-hue-1', level: '300'},
                        'hue-2': {class: '.md-hue-2', level: '800'},
                        'hue-3': {class: '.md-hue-3', level: '900'}
                    },
                    opacity: [
                        {class: '', level: '1'},
                        {class: '.o-33', level: '0.33'},
                        {class: '.o-66', level: '0.66'},
                    ]
                }
            };

            var classes = [
                {
                    class: '-bg',
                    option: 'background-color'
                },
                {
                    class: '-color',
                    option: 'color'
                }
            ];
            $rootScope.selectedTheme = {};

            for (var type in themePalette) {
                var typeObj = themePalette[type];
                if (typeObj.options) {
                    for (var opt in typeObj.options) {
                        colorTypes[type].hues[opt].level = typeObj.options[opt];
                    }
                }
            }

            for (var i = 0; i < classes.length; i++) {
                var css = classes[i];
                for (var color in colorTypes) {
                    color = colorTypes[color];
                    for (var hue in color.hues) {
                        var hueObj = color.hues[hue];
                        for (var l = 0; l < color.opacity.length; l++) {
                            var op = color.opacity[l];

                            var value = getThemeColor(themePalette[color.type], hueObj.level, op.level);
                            var selector = '#app-wrapper .md-' + color.type + css.class + hueObj.class + op.class;

                            var contrastColorStyle = '';
                            if (css.option === 'background-color') {
                                var contrastColor = fuseTheming.palettes[themePalette[color.type].name][hueObj.level].contrast;
                                var colorFormat = contrastColor.length === 3 ? 'rgb' : 'rgba';
                                contrastColor = contrastColor.join(',');
                                contrastColor = colorFormat + '(' + contrastColor + ')';
                                contrastColorStyle = 'color' + ':' + contrastColor;
                            }

                            var style = '{' + css.option + ':' + value + ';' + contrastColorStyle + '} ';
                            $rootScope.themePaletteCss += selector + style;
                            $rootScope.themePaletteCss += '.md-' + $rootScope.appTheme + '-theme' + selector + style;

                            var selectedThemeVariable = color.type + hueObj.class + op.class;
                            selectedThemeVariable = selectedThemeVariable.split('-').join('').split('.').join('_');

                            var hueObjName = hue.replace(/[.-]/g, "");
                            var opObjName = op.class.replace(/[.-]/g, "");
                            var cssClass = 'md-' + color.type + css.class + ' ' + hueObj.class + ' ' + op.class;
                            cssClass = cssClass.replace(/[.]/g, "");
                            if (op.class === '') {
                                if (hueObj.class === '') {
                                    assign($rootScope.selectedTheme, [color.type, 'value'], value);
                                    assign($rootScope.selectedTheme, [color.type, 'classes', css.option], cssClass);
                                } else {
                                    assign($rootScope.selectedTheme, [color.type, 'hues', hueObjName, 'value'], value);
                                    assign($rootScope.selectedTheme, [color.type, 'hues', hueObjName, 'classes', css.option], cssClass);
                                }
                            } else {
                                if (hueObj.class === '') {
                                    assign($rootScope.selectedTheme, [color.type, 'opacity', opObjName, 'value'], value);
                                    assign($rootScope.selectedTheme, [color.type, 'opacity', opObjName, 'classes', css.option], cssClass);

                                } else {
                                    assign($rootScope.selectedTheme, [color.type, 'hues', hueObjName, 'opacity', opObjName, 'value'], value);
                                    assign($rootScope.selectedTheme, [color.type, 'hues', hueObjName, 'opacity', opObjName, 'classes', css.option], cssClass);
                                }
                            }
                        }
                    }
                }
            }
            //console.log($rootScope.themePaletteCss);
            //console.log($rootScope.selectedTheme);
        }

        function getThemeColor(paletteColor, level, op) {
            op = op || 1;
            var rgb = angular.copy(fuseTheming.palettes[paletteColor.name][level].value);
            rgb.push(op);
            return 'rgba(' + rgb.join() + ')';
        }

    }

    function assign(obj, keyPath, value) {
        var lastKeyIndex = keyPath.length - 1;
        for (var i = 0; i < lastKeyIndex; ++i) {
            var key = keyPath[i];
            if (!(key in obj)) {
                obj[key] = {};
            }
            obj = obj[key];
        }
        obj[keyPath[lastKeyIndex]] = value;
    }
})();
