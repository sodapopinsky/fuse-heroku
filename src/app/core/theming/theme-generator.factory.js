(function ()
{
    'use strict';

    angular.module('app.core')
        .factory('themeGenerator', themeGenerator);

    /** @ngInject */
    function themeGenerator(fuseTheming)
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
            console.log(fuseTheming.themes);
            console.log(fuseTheming.palettes);

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
                        'name' : colorType.name,
                        'levels': {
                            'default': {
                                'color': rgba( palettes[colorType.name][colorType.hues.default]['value'] ),
                                'contrast': rgba( palettes[colorType.name][colorType.hues.default]['contrast'] )
                            },
                            'hue1': {
                              'color' : rgba( palettes[colorType.name][colorType.hues['hue-1']]['value'] ),
                              'contrast' : rgba( palettes[colorType.name][colorType.hues['hue-1']]['contrast'] )
                            },
                            'hue2': {
                                'color' : rgba( palettes[colorType.name][colorType.hues['hue-2']]['value'] ),
                                'contrast' : rgba( palettes[colorType.name][colorType.hues['hue-2']]['contrast'] )
                            },
                            'hue3': {
                                'color' : rgba( palettes[colorType.name][colorType.hues['hue-3']]['value'] ),
                                'contrast' : rgba( palettes[colorType.name][colorType.hues['hue-3']]['contrast'] )
                            }
                        }
                    };
                })
            });


            // Iterate through color list and create less variables
            var lessVars = [];

            angular.forEach(themeList, function(theme, themeName)
            {
                lessVars = [];
                lessVars.push('@themeName:' + themeName);

                angular.forEach(theme, function(colorTypes, colorTypeName)
                {

                    angular.forEach(colorTypes.levels, function(colors, colorLevelName)
                    {
                        angular.forEach(colors, function(color, colorName)
                        {
                            lessVars.push('@' + colorTypeName + ucfirst(colorLevelName) + ucfirst(colorName) + ':' + color);
                        });
                    });
                });

                // Join variables
                lessVars = lessVars.join(';') + ';';
                
                // Render less
                render(lessVars);
            });

            //console.log(lessVars);
            //console.log(themeList);
        }

        /**
        * Convert color array to rgb/rgba
        */
        function rgba(color)
        {
            if (color.length === 3)
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
        function ucfirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        /**
         * Render less files
         */
        function render(lessVars)
        {
            var lessInput = lessVars + ' .md-primary-bg { background: @primaryDefaultColor; }';

            console.log(lessInput);

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
                    console.error(error)
                });
        }
    }

})
();