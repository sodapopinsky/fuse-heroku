(function ()
{
    'use strict';

    angular.module('app.dashboard-server')
        .controller('DashboardServerController', DashboardServerController);

    /** @ngInject */
    function DashboardServerController($scope, $interval, fuseTheming)
    {
        var vm = this;

        // Data
        vm.widget1 = {
            memoryChartTitle: 'Memory Usage',
            memoryChart     : {
                data   : [
                    [500, 700, 500, 700, 800, 500],
                    [100, 400, 300, 400, 200, 300],
                    [300, 100, 200, 200, 300, 400]
                ],
                series : ['Physical Memory', 'Virtual Memory', 'Swap'],
                labels : ['30s', '25s', '20s', '15s', '10s', '5s'],
                color  : ['#4caf50', '#3f51b5', '#ff5722'],
                options: {
                    datasetFill           : false,
                    maintainAspectRatio   : false,
                    scaleShowVerticalLines: false
                }
            },
            cpuChartTitle   : 'Average CPU Usage',
            cpuChart        : {
                data   : [
                    [72, 26, 51, 36, 66, 69, 50, 35, 49, 64, 37, 78, 54, 8, 52, 50, 56, 71, 31, 37, 15, 45, 35, 28, 7, 36, 7, 79, 12, 5]
                ],
                series : ['Average CPU Usage'],
                labels : ['150s', '145s', '140s', '135s', '130s', '125s', '120s', '115s', '110s', '105s', '100s', '95s', '90s', '85s', '80s', '75s', '70s', '65s', '60s', '55s', '50s', '45s', '40s', '35s', '30s', '25s', '30s', '15s', '10s', '5s'],
                color  : [
                    {
                        fillColor           : '#009688',
                        strokeColor         : '#009688',
                        pointColor          : '#009688',
                        pointStrokeColor    : '#009688',
                        pointHighlightFill  : '#009688',
                        pointHighlightStroke: '#009688'
                    }
                ],
                options: {
                    animation: false,
                    maintainAspectRatio   : false,
                    scaleShowVerticalLines: false,
                    scaleOverride      : true,
                    scaleSteps         : 4,
                    scaleStepWidth     : 30,
                    scaleStartValue    : 0,
                    pointDot              : false
                }
            }
        };

        vm.widget2 = {
            title : 'Storage',
            value : {
                used      : '74.2Gb',
                total     : '110Gb',
                percentage: 67.45,
                lastWeek  : {
                    used: '73.9Gb',
                    diff: '+ 0.3Gb',
                }
            },
            detail: 'This is the back side. You can show detailed information here.'
        };

        vm.widget3 = {
            title : 'Bandwidth',
            value : {
                used      : '221Gb',
                total     : '3.5Tb',
                percentage: 6.31,
                lastWeek  : {
                    used: 38,
                    diff: '+ 2%',
                }
            },
            detail: 'This is the back side. You can show detailed information here.'
        };

        vm.widget4 = {
            title   : 'Latency',
            value   : '21ms',
            chart   : {
                data   : [
                    [1, 4, 1, 2, 3, 4, 3, 2, 3, 1, 1, 4, 1, 2, 3, 4, 3, 2, 3, 1, 1, 4, 1, 2, 3]
                ],
                series : ['Latency'],
                labels : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                color  : [
                    {
                        fillColor           : 'rgba(0, 0, 0, 0.27)',
                        strokeColor         : 'rgba(255, 255, 255, 0)',
                        pointColor          : 'rgba(255, 255, 255, 0)',
                        pointStrokeColor    : 'rgba(255, 255, 255, 0)',
                        pointHighlightFill  : 'rgba(255, 255, 255, 0)',
                        pointHighlightStroke: 'rgba(255, 255, 255, 0)'
                    }
                ],
                options: {
                    animation          : false,
                    maintainAspectRatio: false,
                    scaleOverride      : true,
                    scaleSteps         : 4,
                    scaleStepWidth     : 1,
                    scaleStartValue    : 0,
                    showScale          : false,
                    showTooltips       : false,
                    pointDot           : false
                }
            },
            footnote: 'Higher than average',
            detail  : 'This is the back side. You can show detailed information here.'
        };

        vm.widget5 = {
            title   : 'Cluster Load',
            value   : '75%',
            detail  : 'This is the back side. You can show detailed information here.',
            footnote: 'Lower than average'
        };

        vm.widget55 = {
            title           : 'IO RATE',
            subtitle        : 'Showing last 5 hours',
            chart           : {
                columns: [
                    {
                        id    : 'Sales',
                        name  : 'Sales',
                        color : 'lightgrey',
                        values: '30,75,290,400,150,250,75,210,125,92,30,75,290,400',
                        type  : 'bar'
                    },
                    {
                        id    : 'SalesTop',
                        name  : 'Sales Top',
                        color : 'green',
                        values: '30,75,290,400,150,250,75,210,125,92,30,75,290,400',
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

        vm.widget6 = {
            title   : 'Google Inc.',
            subtitle: 'NASDAQ: GOOG',
            value   : '531.69',
            diff    : '2.29%',
            chart   : {
                columns: [
                    {
                        id    : 'GOOG',
                        name  : 'GOOG',
                        color : 'orange',
                        values: '30,75,290,400,150,250,75,210,125,92,30,75,290,400',
                        type  : 'bar'
                    }
                ]
            }
        };

        vm.widget7 = {
            title: 'Visitor Demographics',
            tabs : [
                {
                    label  : '30 days',
                    genders: [
                        {
                            title: 'Male',
                            value: 40
                        },
                        {
                            title: 'Female',
                            value: 41
                        },
                        {
                            title: 'Not Specified',
                            value: 19
                        }
                    ],
                    ages   : [
                        {
                            title: '25 - 34',
                            value: 32
                        },
                        {
                            title: '35 - 44',
                            value: 85
                        },
                        {
                            title: '45+',
                            value: 48
                        }
                    ]
                },
                {
                    label  : '10 days',
                    genders: [
                        {
                            title: 'Male',
                            value: 32
                        },
                        {
                            title: 'Female',
                            value: 49
                        },
                        {
                            title: 'Not Specified',
                            value: 19
                        }
                    ],
                    ages   : [
                        {
                            title: '25 - 34',
                            value: 85
                        },
                        {
                            title: '35 - 44',
                            value: 60
                        },
                        {
                            title: '45+',
                            value: 36
                        }
                    ]
                },
                {
                    label  : '1 day',
                    genders: [
                        {
                            title: 'Male',
                            value: 28
                        },
                        {
                            title: 'Female',
                            value: 62
                        },
                        {
                            title: 'Not Specified',
                            value: 10
                        }
                    ],
                    ages   : [
                        {
                            title: '25 - 34',
                            value: 17
                        },
                        {
                            title: '35 - 44',
                            value: 64
                        },
                        {
                            title: '45+',
                            value: 72
                        }
                    ]
                },

            ]
        };

        vm.widget8 = {
            title   : 'SALES',
            subtitle: 'Last 30 days',
            chart   : {
                columns: [
                    {
                        id    : 'Input',
                        name  : 'Input',
                        color : fuseTheming.themes.active.theme.primary.color,
                        values: '30,75,290,400,150,250',
                        type  : 'area-spline'
                    },
                    {
                        id    : 'Output',
                        name  : 'Output',
                        color : fuseTheming.themes.active.theme.accent.color,
                        values: '500,300,120,600,50,80',
                        type  : 'area-spline'
                    }
                ]
            }
        };

        vm.widget9 = {
            title: 'ONLINE MEMBERS',
            value: 658,
            icon : 'icon-account'
        };

        vm.widget10 = {
            title: 'MEMBERS FOR PAST 30 DAYS',
            value: 55,
            icon : 'icon-account-plus'
        };

        vm.widget11 = {
            title: 'TOTAL MEMBERS',
            value: 59962,
            icon : 'icon-account-multiple'
        };

        // Methods

        //////////

        function widget1Ticker(min, max)
        {
            var newVal = Math.floor(Math.random() * (max - min + 1)) + min;

            vm.widget1.cpuChart.data[0].shift();
            vm.widget1.cpuChart.data[0].push(newVal);
        }

        function widget4Ticker(min, max)
        {
            var newVal = Math.floor(Math.random() * (max - min + 1)) + min;

            vm.widget4.value = parseInt(newVal + 20) + 'ms';
            vm.widget4.chart.data[0].shift();
            vm.widget4.chart.data[0].push(newVal);
        }

        var w1ticker = $interval(function ()
        {
            widget1Ticker(0, 100);
        }, 5000);

        var w4ticker = $interval(function ()
        {
            widget4Ticker(1, 4);
        }, 1000);

        // Cleanup
        $scope.$on('$destroy', function ()
        {
            $interval.cancel(w1ticker);
            $interval.cancel(w4ticker);
        });
    }

})();