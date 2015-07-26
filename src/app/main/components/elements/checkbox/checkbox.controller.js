(function () {
    'use strict';

    angular.module('fuse')
        .controller('CheckboxController', CheckboxController);

    /** @ngInject */
    function CheckboxController() {
        var vm = this;
        vm.checkboxValue = true;
    }
})();


