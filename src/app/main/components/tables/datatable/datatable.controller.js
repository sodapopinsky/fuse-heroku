(function ()
{
    'use strict';

    angular
        .module('app.components.tables.datatable')
        .controller('DatatableController', DatatableController);

    /** @ngInject */
    function DatatableController(api)
    {
        var vm = this;

        // Data
        api.tables.employees100.get({}, function (response)
        {
            vm.employees = response.data;
        });

        vm.dtOptions = {
            dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            pagingType: 'simple'
        };

        // Methods

        //////////
    }

})();