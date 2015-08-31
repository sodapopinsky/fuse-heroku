(function ()
{
    'use strict';

    angular
        .module('app.components.tables.simple-table')
        .controller('SimpleTableController', SimpleTableController);

    /** @ngInject */
    function SimpleTableController(api)
    {
        var vm = this;

        // Data
        api.tables.employees.get({}, function (response)
        {
            vm.employees = response.data;
        });

        // Methods

        //////////
    }

})();