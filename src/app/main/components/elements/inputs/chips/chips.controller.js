(function () {
    'use strict';

    angular.module('fuse')
        .controller('ChipsController', ChipsController);

    /** @ngInject */
    function ChipsController() {
        var vm = this;
        vm.tags = [];
    }
})();


