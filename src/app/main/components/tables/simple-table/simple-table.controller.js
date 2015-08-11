(function ()
{
    'use strict';

    angular.module('app.components')
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


