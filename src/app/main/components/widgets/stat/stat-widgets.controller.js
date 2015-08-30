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
            title        : 'WEEKLY TRANSACTIONS',
            value        : 30342,
            lastWeekValue: 30002,
            lastWeekDiff : '+ 1,12%',
            detail       : 'This is the back side. You can show detailed information here.'
        };

        vm.widget2 = {
            title        : 'SALES QUOTA',
            value        : 40,
            lastWeekValue: 85,
            lastWeekDiff : '- 45%',
            detail       : 'This is the back side. You can show detailed information here.'
        };

        vm.widget3 = {
            title : 'BOUNCE RATE',
            value : 80,
            detail: 'This is the back side. You can show detailed information here.'
        };

        vm.widget4 = {
            title        : 'STOCK COUNT',
            value        : 5583,
            lastWeekValue: 5583,
            lastWeekDiff : '- 0%',
            detail       : 'This is the back side. You can show detailed information here.'
        };

        vm.widget5 = {
            title: 'USERS ONLINE',
            value: 658
        };

        vm.widget6 = {
            title: 'WASTELANDERS',
            value: 358
        };

        vm.widget7 = {
            title: 'VAULTS SEALED',
            value: 24
        };

        vm.widget8 = {
            title: 'VAULTS OPEN',
            value: 62
        };

        vm.widget9 = {
            title: 'SONGS',
            value: 210
        };

        vm.widget10 = {
            title: 'VIDEOS',
            value: 54
        };

        vm.widget11 = {
            title: 'DOCUMENTS',
            value: 1252
        };

        vm.widget12 = {
            date       : 'June 27, Saturday',
            temperature: 28,
            event      : 'Sunny',
            icon       : 'icon-weather-cloudy',
            location   : 'New York, NY',
            detail     : [
                {
                    day        : 'Sun',
                    icon       : 'icon-weather-rainy',
                    temperature: 24,
                    event      : 'Rainy'
                },
                {
                    day        : 'Mon',
                    icon       : 'icon-weather-pouring',
                    temperature: 23,
                    event      : 'Rainy'
                },
                {
                    day        : 'Tue',
                    icon       : 'icon-weather-cloudy',
                    temperature: 29,
                    event      : 'Overcast'
                },
                {
                    day        : 'Wed',
                    icon       : 'icon-weather-partlycloudy',
                    temperature: 28,
                    event      : 'Sunny'
                },
                {
                    day        : 'Thu',
                    icon       : 'icon-weather-partlycloudy',
                    temperature: 31,
                    event      : 'Sunny'
                }
            ]
        };

        vm.widget13 = {
            title        : 'AVAILABLE SPACE',
            value        : 83,
            detail       : 'This is the back side. You can show detailed information here.'
        };

        // Methods

        //////////
    }

})();