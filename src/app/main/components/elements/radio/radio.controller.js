(function () {
    'use strict';

    angular.module('fuse')
        .controller('RadioController', RadioController);

    /** @ngInject */
    function RadioController() {
        var vm = this;
        vm.groupValue = 'Apple';
    }
})();


