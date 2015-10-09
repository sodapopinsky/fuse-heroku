(function ()
{
    'use strict';

    angular.module('app.dashboard-project')
        .controller('DashboardProjectController', DashboardProjectController);

    /** @ngInject */
    function DashboardProjectController($scope, $interval, $mdSidenav, DashboardData, api)
    {
        var vm = this;

        // Data
        vm.dashboardData = DashboardData;
        vm.projects = vm.dashboardData.projects;

        // Widget 1
        vm.widget1 = vm.dashboardData.widget1;

        // Widget 2
        vm.widget2 = vm.dashboardData.widget2;

        // Widget 3
        vm.widget3 = vm.dashboardData.widget3;

        // Widget 4
        vm.widget4 = vm.dashboardData.widget4;

        // Widget 5
        vm.widget5 = {
            title       : vm.dashboardData.widget5.title,
            mainChart   : {
                config : {
                    refreshDataOnly: true,
                    deepWatchData  : true
                },
                options: {
                    chart: {
                        type        : 'multiBarChart',
                        color       : ['#03a9f4', '#b3e5fc'],
                        height      : 424,
                        margin      : {
                            top   : 8,
                            right : 16,
                            bottom: 32,
                            left  : 32
                        },
                        clipEdge    : true,
                        groupSpacing: 0.3,
                        reduceXTicks: false,
                        stacked     : true,
                        duration    : 500,
                        x           : function (d)
                        {
                            return d.x;
                        },
                        y           : function (d)
                        {
                            return d.y;
                        },
                        yAxis       : {
                            tickFormat: function (d)
                            {
                                return d;
                            }
                        },
                        legend      : {
                            margin: {
                                top   : 8,
                                bottom: 32
                            }
                        },
                        controls    : {
                            margin: {
                                top   : 8,
                                bottom: 32
                            }
                        },
                        tooltip     : {
                            gravity: 's',
                            classes: 'gravity-s'
                        }
                    }
                },
                data   : []
            },
            supporting  : {
                widgets: {
                    created  : {
                        data : vm.dashboardData.widget5.supporting.created,
                        chart: {
                            data: [
                                {
                                    key   : '',
                                    values: []
                                }
                            ]
                        }
                    },
                    closed   : {
                        data : vm.dashboardData.widget5.supporting.closed,
                        chart: {
                            data: [
                                {
                                    key   : '',
                                    values: []
                                }
                            ]
                        }
                    },
                    reOpened : {
                        data : vm.dashboardData.widget5.supporting.reOpened,
                        chart: {
                            data: [
                                {
                                    key   : '',
                                    values: []
                                }
                            ]
                        }
                    },
                    wontFix  : {
                        data : vm.dashboardData.widget5.supporting.wontFix,
                        chart: {
                            data: [
                                {
                                    key   : '',
                                    values: []
                                }
                            ]
                        }
                    },
                    needsTest: {
                        data : vm.dashboardData.widget5.supporting.needsTest,
                        chart: {
                            data: [
                                {
                                    key   : '',
                                    values: []
                                }
                            ]
                        }
                    },
                    fixed    : {
                        data : vm.dashboardData.widget5.supporting.fixed,
                        chart: {
                            data: [
                                {
                                    key   : '',
                                    values: []
                                }
                            ]
                        }
                    }
                },
                chart  : {
                    config : {
                        refreshDataOnly: true,
                        deepWatchData  : true
                    },
                    options: {
                        chart: {
                            type                   : 'lineChart',
                            color                  : ['#03a9f4'],
                            height                 : 48,
                            margin                 : {
                                top   : 8,
                                right : 0,
                                bottom: 0,
                                left  : 0
                            },
                            isArea                 : true,
                            interpolate            : 'cardinal',
                            clipEdge               : true,
                            duration               : 500,
                            showXAxis              : false,
                            showYAxis              : false,
                            showLegend             : false,
                            useInteractiveGuideline: true,
                            x                      : function (d)
                            {
                                return d.x;
                            },
                            y                      : function (d)
                            {
                                return d.y;
                            },
                            yDomain                : [0, 9],
                            xAxis                  : {
                                tickFormat: function (d)
                                {
                                    return vm.widget5.days[d];
                                }
                            },
                            interactiveLayer       : {
                                tooltip: {
                                    gravity: 'e',
                                    classes: 'gravity-e'
                                }
                            }
                        }
                    },
                    data   : []
                }
            },
            days        : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            ranges      : vm.dashboardData.widget5.ranges,
            currentRange: '',
            changeRange : function (range)
            {
                vm.widget5.currentRange = range;

                /**
                 * Update main chart data by iterating through the
                 * chart dataset and separately adding every single
                 * dataset by hand.
                 *
                 * You MUST NOT swap the entire data object by doing
                 * something similar to this:
                 * vm.widget.mainChart.data = chartData
                 *
                 * It would be easier but it won't work with the
                 * live updating / animated charts due to how d3
                 * works.
                 *
                 * If you don't need animated / live updating charts,
                 * you can simplify these greatly.
                 */
                angular.forEach(vm.dashboardData.widget5.mainChart, function (chartData, index)
                {
                    vm.widget5.mainChart.data[index] = {
                        key   : chartData.key,
                        values: chartData.values[range]
                    };
                });

                /**
                 * Do the same thing for the supporting widgets but they
                 * only have 1 dataset so we can do [0] without needing to
                 * iterate through in their data arrays
                 */
                angular.forEach(vm.dashboardData.widget5.supporting, function (widget, name)
                {
                    vm.widget5.supporting.widgets[name].chart.data[0] = {
                        key   : widget.chart.key,
                        values: widget.chart.values[range]
                    };
                });
            },
            init        : function ()
            {
                // Run this function once to initialize widget

                /**
                 * Update the range for the first time
                 */
                vm.widget5.changeRange('TW');
            }
        };

        // Widget 6
        vm.widget6 = {
            title       : vm.dashboardData.widget6.title,
            mainChart   : {
                config : {
                    refreshDataOnly: true,
                    deepWatchData  : true
                },
                options: {
                    chart: {
                        type        : 'pieChart',
                        color       : ['#f44336', '#9c27b0', '#03a9f4', '#e91e63'],
                        height      : 400,
                        margin      : {
                            top   : 0,
                            right : 0,
                            bottom: 0,
                            left  : 0
                        },
                        donut       : true,
                        clipEdge    : true,
                        cornerRadius: 0,
                        labelType   : 'percent',
                        padAngle    : 0.02,
                        x           : function (d)
                        {
                            return d.key;
                        },
                        y           : function (d)
                        {
                            return d.value;
                        },
                        tooltip     : {
                            gravity: 's',
                            classes: 'gravity-s'
                        }
                    }
                },
                data   : []
            },
            footerLeft  : vm.dashboardData.widget6.footerLeft,
            footerRight : vm.dashboardData.widget6.footerRight,
            ranges      : vm.dashboardData.widget6.ranges,
            currentRange: '',
            changeRange : function (key)
            {
                vm.widget6.currentRange = key;

                /**
                 * Update main chart data by iterating through the
                 * chart dataset and separately adding every single
                 * dataset by hand.
                 *
                 * You MUST NOT swap the entire data object by doing
                 * something similar to this:
                 * vm.widget.mainChart.data = chartData
                 *
                 * It would be easier but it won't work with the
                 * live updating / animated charts due to how d3
                 * works.
                 *
                 * If you don't need animated / live updating charts,
                 * you can simplify these greatly.
                 */
                angular.forEach(vm.dashboardData.widget6.mainChart, function (data, index)
                {
                    vm.widget6.mainChart.data[index] = {
                        key  : data.key,
                        value: data.values[key]
                    };
                });
            },
            init        : function ()
            {
                // Run this function once to initialize widget

                /**
                 * Update the range for the first time
                 */
                vm.widget6.changeRange('TW');
            }
        };

        vm.widget7 = {
            title       : 'Schedule',
            schedule    : {
                'T' : [
                    {
                        title   : 'Group Meeting',
                        time    : 'In 32 minutes',
                        location: 'Room 1B'
                    },
                    {
                        title: 'Public Beta Release',
                        time : '11:00 AM'
                    },
                    {
                        title: 'Public Beta Release',
                        time : '11:00 AM'
                    },
                    {
                        title: 'Dinner with David',
                        time : '17:30 PM'
                    },
                    {
                        title: 'Jane\'s Birthday Party',
                        time : '19:30 PM'
                    },
                    {
                        title: 'Overseer\'s Retirement Party',
                        time : '21:30 PM'
                    }
                ],
                'TM': [
                    {
                        title: 'Marketing Meeting',
                        time : '09:00 AM'
                    },
                    {
                        title: 'Public Announcement',
                        time : '11:00 AM'
                    },
                    {
                        title: 'Meeting with Beta Testers',
                        time : '15:00 AM'
                    },
                    {
                        title: 'Live Stream',
                        time : '17:30 PM'
                    },
                    {
                        title: 'Release Party',
                        time : '19:30 PM'
                    }
                ]
            },
            ranges      : {
                'T' : 'Today',
                'TM': 'Tomorrow'
            },
            currentRange: 'T'
        };

        vm.widget8 = {
            title: 'Budget Distribution',
            chart: {
                data  : [12, 17, 28, 28, 15],
                series: ['Budget Distribution'],
                labels: ['Wireframing', 'Design', 'Coding', 'Marketing', 'Extra'],
                colors: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffeb3b']
            }
        };

        vm.widget9 = {
            title               : 'Spent',
            totalSpent          : {
                title: 'TOTAL SPENT',
                count: {
                    '2W': '$29,682.85',
                    'LW': '$31,128.19',
                    'TW': '$34,758.34'
                },
                chart: {
                    data  : {
                        '2W': [
                            [3, 2, 2, 4, 7, 7, 4]
                        ],
                        'LW': [
                            [5, 7, 8, 8, 6, 4, 1]
                        ],
                        'TW': [
                            [6, 3, 7, 5, 5, 4, 7]
                        ]
                    },
                    series: ['Total Spent'],
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    color : ['#03a9f4']
                }
            },
            remaining           : {
                title: 'REMAINING',
                count: {
                    '2W': '$94.317,15',
                    'LW': '$92.871,81',
                    'TW': '$89.241,66'
                },
                chart: {
                    data  : {
                        '2W': [
                            [6, 3, 7, 5, 5, 4, 7]
                        ],
                        'LW': [
                            [3, 2, 1, 4, 8, 8, 4]
                        ],
                        'TW': [
                            [5, 7, 8, 8, 6, 4, 1]
                        ]
                    },
                    series: ['Total Spent'],
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    color : ['#03a9f4']
                }
            },
            totalBudget         : {
                title: 'TOTAL BUDGET',
                count: '$124.000,00'
            },
            ranges              : {
                '2W': '2 Weeks Ago',
                'LW': 'Last Week',
                'TW': 'This Week'
            },
            currentRange        : 'TW',
            miniLineChartOptions: {
                maintainAspectRatio: false,
                scaleOverride      : true,
                scaleSteps         : 9,
                scaleStepWidth     : 1,
                scaleStartValue    : 0,
                showScale          : false,
                pointDot           : false,
                showTooltips       : false
            }
        };

        vm.widget10 = {
            title    : 'Budget Details',
            tableData: [
                {
                    budgetType         : 'Wireframing',
                    totalBudget        : '$14,880.00',
                    spentAmount        : '$14,000.00',
                    spentPercentage    : '%94.08',
                    remainingAmount    : '$880.00',
                    remainingPercentage: '%5.92'
                },
                {
                    budgetType         : 'Design',
                    totalBudget        : '$21,080.00',
                    spentAmount        : '$17,240.34',
                    spentPercentage    : '%81.78',
                    remainingAmount    : '$3,839.66',
                    remainingPercentage: '%18.22'
                },
                {
                    budgetType         : 'Coding',
                    totalBudget        : '$34,720.00',
                    spentAmount        : '$3,518.00',
                    spentPercentage    : '%10.13',
                    remainingAmount    : '$31,202.00',
                    remainingPercentage: '%89.87'
                },
                {
                    budgetType         : 'Marketing',
                    totalBudget        : '$34,720.00',
                    spentAmount        : '$0.00',
                    spentPercentage    : '%0.00',
                    remainingAmount    : '$34,720.00',
                    remainingPercentage: '%100.00'
                },
                {
                    budgetType         : 'Extra',
                    totalBudget        : '$18,600.00',
                    spentAmount        : '$0.00',
                    spentPercentage    : '%0.00',
                    remainingAmount    : '$0.00',
                    remainingPercentage: '%100.00'
                }
            ]
        };

        vm.widget11 = {
            title      : 'Team Members',
            teamMembers: vm.dashboardData.teamMembers,
            dtOptions  : {
                dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
                pagingType: 'simple'
            }
        };

        vm.nowWidget = {
            now   : {
                second: '',
                minute: '',
                hour  : '',
                day   : '',
                month : '',
                year  : ''
            },
            ticker: function ()
            {
                var now = moment();
                vm.nowWidget.now = {
                    second : now.format('ss'),
                    minute : now.format('mm'),
                    hour   : now.format('HH'),
                    day    : now.format('D'),
                    weekDay: now.format('dddd'),
                    month  : now.format('MMMM'),
                    year   : now.format('YYYY'),
                };
            }
        };

        vm.weatherWidget = {
            locations      : {
                'NewYork': {
                    name           : 'New York',
                    icon           : 'icon-weather-pouring',
                    temp           : {
                        C: '22',
                        F: '72'
                    },
                    windSpeed      : {
                        KMH: 12,
                        MPH: 7.5
                    },
                    windDirection  : 'NW',
                    rainProbability: '98%',
                    next3Days      : [
                        {
                            name: 'Sunday',
                            icon: 'icon-weather-pouring',
                            temp: {
                                C: '21',
                                F: '70'
                            }
                        },
                        {
                            name: 'Sunday',
                            icon: 'icon-weather-pouring',
                            temp: {
                                C: '19',
                                F: '66'
                            }
                        },
                        {
                            name: 'Tuesday',
                            icon: 'icon-weather-partlycloudy',
                            temp: {
                                C: '24',
                                F: '75'
                            }
                        }
                    ]
                }
            },
            currentLocation: 'NewYork',
            tempUnit       : 'C',
            speedUnit      : 'KMH'
        };

        // Methods
        vm.toggleSidenav = toggleSidenav;
        vm.selectProject = selectProject;

        //////////
        vm.selectedProject = vm.projects[0];

        // Now widget ticker
        vm.nowWidget.ticker();

        var nowWidgetTicker = $interval(vm.nowWidget.ticker, 1000);

        $scope.$on('$destroy', function ()
        {
            $interval.cancel(nowWidgetTicker);
        });

        // Initialize widget5
        vm.widget5.init();

        // Initialize widget6
        vm.widget6.init();

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }

        /**
         * Select project
         */
        function selectProject(project)
        {
            vm.selectedProject = project;
        }
    }

})();