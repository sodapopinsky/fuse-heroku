(function ()
{
    'use strict';

    angular
        .module('app.dashboard-server')
        .controller('DashboardServerController', DashboardServerController);

    /** @ngInject */
    function DashboardServerController($scope, $interval, fuseTheming, DashboardData)
    {
        var vm = this;

        // Data
        vm.dashboardData = DashboardData;

        // Widget 1
        vm.widget1 = {
            memoryChart: {
                title: vm.dashboardData.widget1.memoryChart.title,
                chart: {
                    config : {
                        refreshDataOnly: true,
                        deepWatchData  : true
                    },
                    options: {
                        chart: {
                            type                   : 'lineChart',
                            color                  : ['#4caf50', '#3f51b5', '#ff5722'],
                            height                 : 350,
                            margin                 : {
                                top   : 32,
                                right : 32,
                                bottom: 32,
                                left  : 48
                            },
                            useInteractiveGuideline: true,
                            clipVoronoi            : false,
                            x                      : function (d)
                            {
                                return d.x;
                            },
                            y                      : function (d)
                            {
                                return d.y;
                            },
                            xAxis                  : {
                                tickFormat: function (d)
                                {
                                    return d + ' min.';
                                },
                                showMaxMin: false
                            },
                            yAxis                  : {
                                tickFormat: function (d)
                                {
                                    return d + ' MB';
                                }
                            },
                            interactiveLayer       : {
                                tooltip: {
                                    gravity: 's',
                                    classes: 'gravity-s'
                                }
                            },
                            legend                 : {
                                margin    : {
                                    top   : 8,
                                    right : 0,
                                    bottom: 32,
                                    left  : 0
                                },
                                rightAlign: false
                            }
                        }
                    },
                    data   : vm.dashboardData.widget1.memoryChart.chart
                }
            },
            cpuChart   : {
                title: vm.dashboardData.widget1.cpuChart.title,
                chart: {
                    config : {
                        refreshDataOnly: true,
                        deepWatchData  : true
                    },
                    options: {
                        chart: {
                            type                   : 'lineChart',
                            color                  : ['#03A9F4'],
                            height                 : 120,
                            margin                 : {
                                top   : 8,
                                right : 32,
                                bottom: 16,
                                left  : 48
                            },
                            duration               : 1,
                            clipEdge               : true,
                            clipVoronoi            : false,
                            interpolate            : 'cardinal',
                            isArea                 : true,
                            useInteractiveGuideline: true,
                            showLegend             : false,
                            showControls           : false,
                            x                      : function (d)
                            {
                                return d.x;
                            },
                            y                      : function (d)
                            {
                                return d.y;
                            },
                            yDomain                : [0, 100],
                            xAxis                  : {
                                tickFormat: function (d)
                                {
                                    return d + ' sec.';
                                },
                                showMaxMin: false
                            },
                            yAxis                  : {
                                tickFormat: function (d)
                                {
                                    return d + '%';
                                }
                            },
                            interactiveLayer       : {
                                tooltip: {
                                    gravity: 's',
                                    classes: 'gravity-s'
                                }
                            }
                        }
                    },
                    data   : vm.dashboardData.widget1.cpuChart.chart
                }
            },
            init       : function ()
            {
                // Run this function once to initialize the widget

                // Grab the x value
                var lastIndex = vm.dashboardData.widget1.cpuChart.chart[0].values.length - 1,
                    x = vm.dashboardData.widget1.cpuChart.chart[0].values[lastIndex].x;

                /**
                 * Emulate constant data flow
                 *
                 * @param min
                 * @param max
                 */
                function cpuTicker(min, max)
                {
                    // Increase the x value
                    x = x + 5;

                    var newValue = {
                        x: x,
                        y: Math.floor(Math.random() * (max - min + 1)) + min
                    };

                    vm.widget1.cpuChart.chart.data[0].values.shift();
                    vm.widget1.cpuChart.chart.data[0].values.push(newValue);
                }

                // Set interval
                var cpuTickerInterval = $interval(function ()
                {
                    cpuTicker(0, 100);
                }, 5000);

                // Cleanup
                $scope.$on('$destroy', function ()
                {
                    $interval.cancel(cpuTickerInterval);
                });
            }
        };

        // Widget 2
        vm.widget2 = vm.dashboardData.widget2;

        // Widget 3
        vm.widget3 = vm.dashboardData.widget3;

        // Widget 4
        vm.widget4 = {
            title   : vm.dashboardData.widget4.title,
            value   : vm.dashboardData.widget4.value,
            footnote: vm.dashboardData.widget4.footnote,
            detail  : vm.dashboardData.widget4.detail,
            chart   : {
                config : {
                    refreshDataOnly: true,
                    deepWatchData  : true
                },
                options: {
                    chart: {
                        type        : 'stackedAreaChart',
                        color       : ['rgba(0, 0, 0, 0.27)'],
                        height      : 48,
                        margin      : {
                            top   : 8,
                            right : 0,
                            bottom: 0,
                            left  : 0
                        },
                        duration    : 1,
                        clipEdge    : true,
                        interpolate : 'cardinal',
                        interactive : false,
                        showLegend  : false,
                        showControls: false,
                        showXAxis   : false,
                        showYAxis   : false,
                        x           : function (d)
                        {
                            return d.x;
                        },
                        y           : function (d)
                        {
                            return d.y;
                        },
                        yDomain     : [0, 4]
                    }
                },
                data   : vm.dashboardData.widget4.chart
            },
            init    : function ()
            {
                // Run this function once to initialize the widget

                // Grab the x value
                var lastIndex = vm.dashboardData.widget4.chart[0].values.length - 1,
                    x = vm.dashboardData.widget4.chart[0].values[lastIndex].x;

                /**
                 * Emulate constant data flow
                 *
                 * @param min
                 * @param max
                 */
                function latencyTicker(min, max)
                {
                    // Increase the x value
                    x++;

                    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

                    var newValue = {
                        x: x,
                        y: randomNumber
                    };

                    vm.widget4.chart.data[0].values.shift();
                    vm.widget4.chart.data[0].values.push(newValue);

                    // Randomize the value
                    vm.widget4.value = 20 + randomNumber + 'ms';
                }

                // Set interval
                var latencyTickerInterval = $interval(function ()
                {
                    latencyTicker(1, 4);
                }, 1000);

                // Cleanup
                $scope.$on('$destroy', function ()
                {
                    $interval.cancel(latencyTickerInterval);
                });
            }
        };

        // Widget 5
        vm.widget5 = vm.dashboardData.widget5;

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

        // Init Widget 1
        vm.widget1.init();

        // Init Widget 4
        vm.widget4.init();
    }

})();