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
            value: 200,
            chart: {
                columns: [
                    {
                        id    : 'CPU',
                        name  : 'CPU',
                        color : 'white',
                        values: '30,200,100,400,150,250',
                        type  : 'spline'
                    }
                ]
            }
        };

        vm.widget2 = {
            title   : 'IO RATE',
            subtitle: 'Showing last 5 hours',
            chart   : {
                columns: [
                    {
                        id    : 'Input',
                        name  : 'Input',
                        color : 'green',
                        values: '30,75,290,400,150,250',
                        type  : 'spline'
                    },
                    {
                        id    : 'Output',
                        name  : 'Output',
                        color : 'blue',
                        values: '500,300,120,600,50,80',
                        type  : 'spline'
                    }
                ]
            }
        };

        vm.widget3 = {
            title        : 'WEEKLY VISITORS',
            value        : 30342,
            lastWeekValue: 30002,
            lastWeekDiff : "1.12%",
            chart        : {
                columns: [
                    {
                        id    : 'Visitors',
                        name  : 'Visitors',
                        color : 'steelblue',
                        values: '30,75,290,400,150,250,75,210,125,92,30,75,290,400',
                        type  : 'bar'
                    }
                ]
            }
        };

        vm.widget4 = {
            title   : 'Google Inc.',
            subtitle: 'NASDAQ: GOOG',
            value   : '531.69',
            diff    : "2.29%",
            chart   : {
                columns: [
                    {
                        id    : 'GOOG',
                        name  : 'GOOG',
                        color : 'white',
                        values: '30,75,290,400,150,250,75,210,125,92,30,75,290,400',
                        type  : 'bar'
                    }
                ]
            }
        };

        vm.widget5 = {
            title        : 'STOCK COUNT',
            value        : 5583,
            lastWeekValue: 5583,
            lastWeekDiff : '- 0%',
            chart: {
                columns: [
                    {
                        id    : 'STOCK',
                        name  : 'STOCK',
                        color : 'white',
                        values: '30,200,100,400,150,250',
                        type  : 'spline'
                    }
                ]
            }
        };

        // Methods

        //////////
    }
})();