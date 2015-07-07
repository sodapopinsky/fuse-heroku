(function () {
    'use strict';

    angular.module('fuse')
        .controller('navSidenavController', navSidenavController);

    /** @ngInject */
    function navSidenavController(navigation, nospaceFilter, $rootScope) {
        var vm = this;
        vm.navigation = navigation;
        $rootScope.$on('$locationChangeSuccess', navigation.onLocationChange);
    }

})();


