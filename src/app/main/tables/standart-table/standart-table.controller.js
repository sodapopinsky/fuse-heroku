(function () {
    'use strict';

    angular.module('fuse')
        .controller('standartTableController', standartTableController);

    /** @ngInject */
    function standartTableController(api) {
        var vm = this;

        api.tables.employees.get({}, function (response) {
            vm.employees= response.data;
        });
    }
})();


