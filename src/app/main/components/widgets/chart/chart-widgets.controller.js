(function ()
{
    'use strict';

    angular
        .module('app.components')
        .controller('ChartWidgetsController', ChartWidgetsController);

    /** @ngInject */
    function ChartWidgetsController()
    {
        var vm = this;

        // Data
        vm.widget1 = {
            title: 'CPU USAGE',
            value: 200
        };

        vm.widget2 = {
            title   : 'IO RATE',
            subtitle: 'Showing last 5 hours'
        };

        // Methods

        //////////
    }
})();