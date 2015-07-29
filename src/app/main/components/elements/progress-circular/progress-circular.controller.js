(function () {
    'use strict';

    angular.module('fuse')
        .controller('ProgressCircularController', ProgressCircularController);

    /** @ngInject */
    function ProgressCircularController($interval) {
        var vm = this;
        vm.determinateValue = 33;
        $interval(function () {
            vm.determinateValue += 1;
            if (vm.determinateValue > 100) {
                vm.determinateValue = 33;
            }
        }, 100, 0, true);
    }
})();


