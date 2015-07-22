(function () {
    'use strict';

    angular.module('app.invoice')
        .controller('invoiceController', invoiceController);

    /** @ngInject */
    function invoiceController(api) {
        var vm = this;
        api.invoice.get({}, function (response) {
            vm.invoice = response.data;
        });
    }
})();
