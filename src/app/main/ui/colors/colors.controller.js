(function () {
    'use strict';

    angular.module('fuse')
        .controller('colorsController', colorsController);

    /** @ngInject */
    function colorsController($rootScope) {
        var vm = this;
        vm.theme = $rootScope.selectedTheme;
    }
})();


