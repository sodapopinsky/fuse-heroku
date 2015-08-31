(function ()
{
    'use strict';

    angular
        .module('app.pages.invoice', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.pages_invoice', {
            url  : '/pages/invoice',
            views: {
                'content@app': {
                    templateUrl: 'app/main/pages/invoice/invoice.html',
                    controller : 'InvoiceController as vm'
                }
            }
        });
    }

})();