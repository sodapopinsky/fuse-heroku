(function ()
{
    'use strict';

    angular.module('app.dashboard')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController(fuseTheming)
    {
        var vm = this;

        console.log(fuseTheming);

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
            title   : 'BOUNCE RATE',
            value   : 80,
            detail  : 'This is the back side. You can show detailed information here.',
            footnote: '50% lower than yesterday'
        };

        vm.widget4 = {
            title        : 'STOCK COUNT',
            value        : 5583,
            lastWeekValue: 5583,
            lastWeekDiff : '- 0%',
            detail       : 'This is the back side. You can show detailed information here.',
            footnote     : 'New items shipping tomorrow'
        };

        vm.widget5 = {
            title   : 'IO RATE',
            subtitle: 'Showing last 5 hours',
            chart   : {
                labels : ['5', '4', '3', '2', '1'],
                series : ['Input', 'Output'],
                data   : [
                    [65, 59, 80, 81, 56],
                    [28, 48, 40, 19, 86]
                ]/*,
                colours: [
                    {
                        fillColor           : 'rgba(220,220,220,0.2)',
                        strokeColor         : 'rgba(220,220,220,1)',
                        pointColor          : 'rgba(220,220,220,1)',
                        pointStrokeColor    : '#fff',
                        pointHighlightFill  : '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)'
                    },
                    {
                        fillColor           : 'rgba(151,187,205,0.2)',
                        strokeColor         : 'rgba(151,187,205,1)',
                        pointColor          : 'rgba(151,187,205,1)',
                        pointStrokeColor    : '#fff',
                        pointHighlightFill  : '#fff',
                        pointHighlightStroke: 'rgba(151,187,205,1)'
                    }
                ]*/
            }
        };

        //////////

    }

})();
