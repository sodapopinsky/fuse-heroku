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
            lastWeekDiff : "1,12%",
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

        // Methods

        //////////
    }
})();