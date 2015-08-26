(function ()
{
    'use strict';

    angular
        .module('app.components')
        .controller('StatisticWidgetsController', StatisticWidgetsController);

    /** @ngInject */
    function StatisticWidgetsController()
    {
        var vm = this;

        // Data
        vm.widget1 = {
            title: 'WEEKLY TRANSACTIONS'
        };

        vm.widget2 = {
            title: 'DAILY VISITORS'
        };

        vm.widget3 = {
            title: 'DAILY VISITORS 2'
        };

        vm.widget4 = {
            title: 'DAILY VISITORS 3'
        };

        vm.widget5 = {
            title: 'DAILY VISITORS 4'
        };

        vm.widget6 = {
            title: 'DAILY VISITORS 5'
        };

        // Methods

        //////////
    }

})();