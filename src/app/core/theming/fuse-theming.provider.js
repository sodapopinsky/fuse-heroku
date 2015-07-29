(function ()
{
    'use strict';

    angular
        .module('app.core')
        .provider('fuseTheming', fuseTheming);

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

})();
