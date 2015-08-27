(function ()
{
    'use strict';

    angular
        .module('app.components')
        .controller('StatWidgetsController', StatWidgetsController);

    /** @ngInject */
    function StatWidgetsController()
    {
        var vm = this;

        // Data
        vm.widget1 = {
            title: 'WEEKLY TRANSACTIONS',
            value: 30342,
            lastWeekValue: 30002,
            lastWeekDiff: '+ 1,12%',
            detail: 'This is the back side. You can show detailed information here.'
        };

        vm.widget2 = {
            title: 'SALES QUOTA',
            value: 40,
            lastWeekValue: 85,
            lastWeekDiff: '- 45%',
            detail: 'This is the back side. You can show detailed information here.'
        };

        vm.widget3 = {
            title: 'BOUNCE RATE',
            value: 80,
            detail: 'This is the back side. You can show detailed information here.'
        };

        vm.widget4 = {
            title: 'STOCK COUNT',
            value: 5583,
            lastWeekValue: 5583,
            lastWeekDiff: '- 0%',
            detail: 'This is the back side. You can show detailed information here.'
        };

        vm.widget5 = {
            title: 'USERS ONLINE',
            value: 658,
        };

        vm.widget6 = {
            title: 'WASTELANDERS',
            value: 358,
        };

        vm.widget7 = {
            title: 'VAULTS SEALED',
            value: 24,
        };

        vm.widget8 = {
            title: 'VAULTS OPEN',
            value: 62,
        };

        vm.widget9 = {
            title: 'SONGS',
            value: 210,
        };

        vm.widget10 = {
            title: 'VIDEOS',
            value: 54,
        };

        vm.widget11 = {
            title: 'DOCUMENTS',
            value: 1252,
        };

        vm.widget12 = {
            title: 'SHARES',
            value: 9963,
        };

        // Methods

        //////////
    }

})();