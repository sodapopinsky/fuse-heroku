(function ()
{
    'use strict';

    angular.module('app.dashboard')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController(fuseTheming)
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
            title           : 'IO RATE',
            subtitle        : 'Showing last 5 hours',
            chart           : {
                columns: [
                    {
                        id    : 'Input',
                        name  : 'Input',
                        color : fuseTheming.themes.active.theme.primary.color,
                        values: '30,75,290,400,150,250',
                        type  : 'spline'
                    },
                    {
                        id    : 'Output',
                        name  : 'Output',
                        color : fuseTheming.themes.active.theme.accent.color,
                        values: '500,300,120,600,50,80',
                        type  : 'spline'
                    }
                ]
            },
            activityTitle   : 'Activity Log',
            activitySubtitle: 'Showing last 100 entries',
            activities      : [
                {
                    title: 'Input',
                    value: '50KB'
                },
                {
                    title: 'Input',
                    value: '24.5Mb'
                },
                {
                    title: 'Output',
                    value: '887Kb'
                },
                {
                    title: 'Input',
                    value: '6.27Kb'
                },
                {
                    title: 'Output',
                    value: '13.8Kb'
                },
                {
                    title: 'Output',
                    value: '5.6Mb'
                },
                {
                    title: 'Output',
                    value: '44.6Kb'
                },
                {
                    title: 'Input',
                    value: '5Mb'
                },
                {
                    title: 'Input',
                    value: '5.3Kb'
                },
                {
                    title: 'Output',
                    value: '176Kb'
                },
                {
                    title: 'Input',
                    value: '4.3Mb'
                },
                {
                    title: 'Input',
                    value: '50KB'
                },
                {
                    title: 'Input',
                    value: '24.5Mb'
                },
                {
                    title: 'Output',
                    value: '887Kb'
                },
                {
                    title: 'Input',
                    value: '6.27Kb'
                },
                {
                    title: 'Output',
                    value: '13.8Kb'
                },
                {
                    title: 'Output',
                    value: '5.6Mb'
                },
                {
                    title: 'Output',
                    value: '44.6Kb'
                },
                {
                    title: 'Input',
                    value: '5Mb'
                },
                {
                    title: 'Input',
                    value: '5.3Kb'
                },
                {
                    title: 'Output',
                    value: '176Kb'
                },
                {
                    title: 'Input',
                    value: '4.3Mb'
                }
            ]
        };

        vm.widget6 = {};

        //////////

    }

})();
