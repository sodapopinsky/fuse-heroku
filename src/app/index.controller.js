(function () {
    'use strict';

    angular.module('fuse')
        .controller('mainController', mainController);

    /** @ngInject */
    function mainController($rootScope, fuseThemes, themeService) {
        $rootScope.appTheme = 'default';
        //themeService.generateThemePaletteCss(fuseThemes.default);
    }

})();
