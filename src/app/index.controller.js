(function () {
    'use strict';

    angular.module('fuse')
        .controller('mainController', mainController);

    /** @ngInject */
    function mainController($rootScope, wipThemes, themeService) {
        $rootScope.appTheme = 'default';
        themeService.generateThemePaletteCss(wipThemes.default);
    }

})();
