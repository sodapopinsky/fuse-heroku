(function ()
{
    'use strict';

    angular.module('app.dashboard-project')
        .controller('DashboardProjectController', DashboardProjectController);

    /** @ngInject */
    function DashboardProjectController($scope, $interval, $mdSidenav, TeamMembers)
    {
        var vm = this;

        // Data
        vm.projects = [
            {
                'name': 'ACME Corp. Backend App'
            },
            {
                'name': 'ACME Corp. Frontend App'
            },
            {
                'name': 'Creapond'
            },
            {
                'name': 'Withinpixels'
            }
        ];

        vm.widget1 = {
            ranges      : {
                'DY' : 'Yesterday',
                'DT' : 'Today',
                'DTM': 'Tomorrow'
            },
            currentRange: 'DT',
            data        : {
                label: 'DUE TASKS',
                count: {
                    'DY' : 21,
                    'DT' : 25,
                    'DTM': 19
                },
                extra: {
                    label: 'Completed',
                    count: {
                        'DY' : 6,
                        'DT' : 7,
                        'DTM': '-'
                    }
                }
            },
            detail      : 'You can show some detailed information about this widget in here.'
        };

        vm.widget2 = {
            title : 'Overdue',
            data  : {
                label: 'TASKS',
                count: 4,
                extra: {
                    label: 'Yesterday\'s overdue',
                    count: 2
                }
            },
            detail: 'You can show some detailed information about this widget in here.'
        };

        vm.widget3 = {
            title : 'Issues',
            data  : {
                label: 'OPEN',
                count: 32,
                extra: {
                    label: 'Closed today',
                    count: 0
                }
            },
            detail: 'You can show some detailed information about this widget in here.'
        };

        vm.widget4 = {
            title : 'Features',
            data  : {
                label: 'PROPOSALS',
                count: 42,
                extra: {
                    label: 'Implemented',
                    count: 8
                }
            },
            detail: 'You can show some detailed information about this widget in here.'
        };

        vm.widget5 = {
            title               : 'GitHub Issues',
            chart               : {
                data   : {
                    '2W': [
                        [9, 12, 9, 12, 7, 8, 16],
                        [37, 32, 39, 27, 18, 24, 20]
                    ],
                    'LW': [
                        [12, 8, 7, 13, 7, 6, 10],
                        [37, 24, 51, 31, 29, 17, 31]
                    ],
                    'TW': [
                        [11, 10, 8, 11, 8, 10, 17],
                        [42, 28, 43, 34, 20, 25, 22]
                    ]
                },
                series : ['Closed Issues', 'Issues'],
                labels : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                options: {
                    responsive: true
                },
                colors : [
                    {
                        fillColor      : '#03a9f4',
                        strokeColor    : 'rgba(0,0,0,0)',
                        highlightFill  : '#03a9f4',
                        highlightStroke: 'rgba(0,0,0,0)'
                    },
                    {
                        fillColor      : '#b3e5fc',
                        strokeColor    : 'rgba(0,0,0,0)',
                        highlightFill  : '#b3e5fc',
                        highlightStroke: 'rgba(0,0,0,0)'
                    }
                ]
            },
            extraData           : [
                {
                    label: 'CREATED',
                    count: {
                        '2W': 48,
                        'LW': 46,
                        'TW': 54
                    },
                    chart: {
                        data  : {
                            '2W': [
                                [5, 8, 5, 6, 7, 8, 7]
                            ],
                            'LW': [
                                [6, 3, 7, 5, 5, 4, 7]
                            ],
                            'TW': [
                                [3, 2, 1, 4, 8, 8, 4]
                            ]
                        },
                        series: ['Created Issues'],
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        color : ['#03a9f4']
                    }
                },
                {
                    label: 'CLOSED',
                    count: {
                        '2W': 27,
                        'LW': 31,
                        'TW': 26
                    },
                    chart: {
                        data  : {
                            '2W': [
                                [3, 2, 1, 4, 8, 8, 4]
                            ],
                            'LW': [
                                [6, 5, 4, 5, 7, 4, 7]
                            ],
                            'TW': [
                                [6, 3, 7, 5, 5, 4, 7]
                            ]
                        },
                        series: ['Created Issues'],
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        color : ['#03a9f4']
                    }
                },
                {
                    label: 'RE-OPENED',
                    count: {
                        '2W': 4,
                        'LW': 5,
                        'TW': 2
                    },
                    chart: {
                        data  : {
                            '2W': [
                                [6, 3, 7, 5, 5, 4, 7]
                            ],
                            'LW': [
                                [5, 7, 8, 8, 6, 4, 1]
                            ],
                            'TW': [
                                [3, 2, 1, 4, 8, 8, 4]
                            ]
                        },
                        series: ['Created Issues'],
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        color : ['#03a9f4']
                    }
                },
                {
                    label: 'WON\'T FIX',
                    count: {
                        '2W': 6,
                        'LW': 3,
                        'TW': 4
                    },
                    chart: {
                        data  : {
                            '2W': [
                                [5, 7, 4, 6, 5, 3, 2]
                            ],
                            'LW': [
                                [6, 3, 7, 5, 5, 4, 7]
                            ],
                            'TW': [
                                [6, 5, 4, 5, 7, 4, 7]
                            ]
                        },
                        series: ['Created Issues'],
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        color : ['#03a9f4']
                    }
                },
                {
                    label: 'NEEDS TEST',
                    count: {
                        '2W': 10,
                        'LW': 7,
                        'TW': 8
                    },
                    chart: {
                        data  : {
                            '2W': [
                                [6, 5, 4, 5, 7, 4, 7]
                            ],
                            'LW': [
                                [5, 7, 8, 8, 6, 4, 1]
                            ],
                            'TW': [
                                [6, 3, 7, 5, 5, 4, 7]
                            ]
                        },
                        series: ['Created Issues'],
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        color : ['#03a9f4']
                    }
                },
                {
                    label: 'FIXED',
                    count: {
                        '2W': 21,
                        'LW': 17,
                        'TW': 14
                    },
                    chart: {
                        data  : {
                            '2W': [
                                [5, 7, 8, 8, 6, 4, 1]
                            ],
                            'LW': [
                                [6, 5, 4, 5, 7, 4, 7]
                            ],
                            'TW': [
                                [5, 7, 4, 6, 5, 3, 2]
                            ]
                        },
                        series: ['Created Issues'],
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        color : ['#03a9f4']
                    }
                }
            ],
            ranges              : {
                '2W': '2 Weeks Ago',
                'LW': 'Last Week',
                'TW': 'This Week'
            },
            currentRange        : 'TW',
            miniLineChartOptions: {
                scaleOverride  : true,
                scaleSteps     : 9,
                scaleStepWidth : 1,
                scaleStartValue: 0,
                showScale      : false,
                pointDot       : false,
                showTooltips   : false
            }
        };

        vm.widget6 = {
            title       : 'Task Distribution',
            chart       : {
                data  : {
                    '2W': [18, 17, 40, 25],
                    'LW': [19, 16, 42, 23],
                    'TW': [15, 20, 38, 27]
                },
                series: ['Task Distribution'],
                labels: ['Frontend', 'Backend', 'API', 'Issues'],
                colors: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63']
            },
            ranges      : {
                '2W': '2 Weeks Ago',
                'LW': 'Last Week',
                'TW': 'This Week'
            },
            currentRange: 'TW',
            footerLeft  : {
                title: 'Tasks Added',
                count: {
                    '2W': 487,
                    'LW': 526,
                    'TW': 594
                }
            },
            footerRight : {
                title: 'Tasks Completed',
                count: {
                    '2W': 193,
                    'LW': 260,
                    'TW': 287
                }
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
                scaleOverride  : true,
                scaleSteps     : 9,
                scaleStepWidth : 1,
                scaleStartValue: 0,
                showScale      : false,
                pointDot       : false,
                showTooltips   : false
            }
        };

        vm.widget10 = {
            'title'  : 'Budget Details',
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
            teamMembers: TeamMembers.data,
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