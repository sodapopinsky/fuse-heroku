(function ()
{
    'use strict';

    angular.module('fuse')
        .controller('StandardTableController', StandardTableController);

    /** @ngInject */
    function StandardTableController(api)
    {
        var vm = this;

        api.tables.employees.get({}, function (response)
        {
            vm.employees = response.data;
        });
    }
})();


