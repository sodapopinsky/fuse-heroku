(function ()
{
    'use strict';

    angular.module('app.invoice')
        .controller('InvoiceController', InvoiceController);

    /** @ngInject */
    function InvoiceController(api)
    {
        var vm = this;
        api.invoice.get({}, function (response)
        {
            vm.invoice = response.data;
        });
    }
})();
