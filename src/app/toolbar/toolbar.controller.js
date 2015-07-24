(function () {
    'use strict';

    angular.module('fuse')
        .controller('toolbarController', toolbarController);

    /** @ngInject */
    function toolbarController($mdSidenav) {
        var vm = this;
        vm.notifySideNavToggle = notifySideNavToggle;

        function notifySideNavToggle() {
            $mdSidenav('quick-panel').toggle();
        }
    }

})();


