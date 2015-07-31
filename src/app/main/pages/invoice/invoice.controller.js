(function ()
{
    'use strict';

    angular.module('app.pages.invoice')
        .controller('InvoiceController', InvoiceController);

    /** @ngInject */
    function InvoiceController(api)
    {
        var vm = this;

        // Data
        api.invoice.get({}, function (response)
        {
            vm.invoice = response.data;
        });

        // Methods

        //////////
    }
})();
