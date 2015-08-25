(function ()
{
    'use strict';

    angular.module('app.dashboard')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($scope, $state, fuseTheming)
    {
        var vm = this;

        // Data
        vm.date = new Date();
        vm.themes = fuseTheming.themes;

        vm.widget1 = {
            title: 'WEEKLY TRANSACTIONS'
        };

        vm.widget2 = {
            title: 'DAILY VISITORS'
        };

        vm.widget3 = {
            title: 'DAILY VISITORS 2'
        };

        vm.widget4 = {
            title: 'DAILY VISITORS 3'
        };

        vm.widget5 = {
            title: 'DAILY VISITORS 4'
        };

        vm.widget6 = {
            title: 'DAILY VISITORS 5'
        };

        vm.dailyMiniChart = {
            dimensions: {
                'count': {
                    axis : 'y',
                    type : 'bar',
                    color: 'rgba(255,255,255,.3)'
                }
            },
            data      : [
                {
                    'count': 50
                },
                {
                    'count': 100
                },
                {
                    'count': 110
                },
                {
                    'count': 98
                },
                {
                    'count': 74
                },
                {
                    'count': 65
                },
                {
                    'count': 78
                },
                {
                    'count': 95
                },
                /*{
                 'count': 742
                 },
                 {
                 'count': 744
                 },
                 {
                 'count': 752
                 },
                 {
                 'count': 752
                 },
                 {
                 'count': 750
                 },
                 {
                 'count': 742
                 },
                 {
                 'count': 750
                 },
                 {
                 'count': 742
                 }*/
            ],
            chart     : {
                size   : {
                    height: 100
                },
                padding: {
                    top   : 0,
                    right : 0,
                    left  : 8,
                    bottom: 0
                },
                point  : {
                    r: 3
                },
                axis   : {
                    x: {
                        show: false
                    },
                    y: {
                        show: false
                    }
                },
                tooltip: {
                    show: false
                },
                grid   : {
                    x: {
                        show: false
                    },
                    y: {
                        show: false
                    }
                },
                zoom   : {
                    enabled: false
                },
                legend : {
                    show    : false,
                    position: 'bottom'
                }
            }
        };

        vm.nasdaqMiniChart = {
            dimensions: {
                'value': {
                    axis : 'y',
                    type : 'line',
                    color: '#ccc'
                },
                day    : {
                    axis: 'x'
                }
            },
            data      : [
                {
                    'value': 510,
                    'day'  : 'Mon'
                }, {
                    'value': 535,
                    'day'  : 'Tue'
                }, {
                    'value': 560,
                    'day'  : 'Wed'
                }, {
                    'value': 525,
                    'day'  : 'Thu'
                }, {
                    'value': 547,
                    'day'  : 'Fri'
                }, {
                    'value': 570,
                    'day'  : 'Sat'
                }, {
                    'value': 531.69,
                    'day'  : 'Sun'
                }
            ],
            chart     : {
                size   : {
                    height: 200,
                },
                axis   : {
                    y: {}
                },
                grid   : {
                    x: {
                        show: false
                    },
                    y: {
                        show: false
                    }
                },
                zoom   : {
                    enabled: false
                },
                legend : {
                    show    : false,
                    position: 'bottom'
                },
                point  : {
                    r: 3
                },
                padding: {
                    top   : 0,
                    right : 0,
                    left  : 0,
                    bottom: 0
                }
            }
        };

        vm.stockMiniChart = {
            dimensions: {
                'count': {
                    axis : 'y',
                    type : 'line',
                    color: 'rgba(255,255,255,.3)'
                    //label: true
                }
            },
            data      : [
                {
                    'count': 5320
                },

                {
                    'count': 5500
                }, {
                    'count': 5750
                }, {
                    'count': 5583
                },

            ],
            chart     : {
                size   : {
                    height: 90
                },
                padding: {
                    top   : 32,
                    right : 8,
                    left  : 0,
                    bottom: 0
                },
                point  : {
                    r: 3
                },
                axis   : {
                    x: {
                        show: false
                    },
                    y: {
                        show: false
                    }
                },
                tooltip: {
                    show: false
                },
                grid   : {
                    x: {
                        show: false
                    },
                    y: {
                        show: false
                    }
                },
                zoom   : {
                    enabled: false
                },
                legend : {
                    show    : false,
                    position: 'bottom'
                }
            }
        };

        /**
         * Line Chart
         * @type {{data: {Last Week: number, A Week Before: number, day: string}[], dimensions: {Last Week: {axis:
         *     string, type: string, color:
         *     (themes.palette.accent|*|LIGHT_DEFAULT_HUES.accent|Q.accent|A.accent)}, A Week Before: {axis: string,
         *     type: string, color:
         *     (themes.palette.primary|*|AST.primary|r.primary|rulesByType.primary|m.primary)}, day: {axis: string}},
         *     chart: {axis: {y: {min: number}}, grid: {x: {show: boolean}, y: {show: boolean}}, zoom: {enabled:
         *     boolean}, legend: {position: string}, point: {r: number}, padding: {top: number, right: number, left:
         *     number, bottom: number}}}}
         */
        vm.lineChart = {
            dimensions: {
                'Last Week'    : {
                    axis : 'y',
                    type : 'line',
                    color: vm.themes.active.theme.accent.color,
                    label: true
                },
                'A Week Before': {
                    axis : 'y',
                    type : 'line',
                    color: vm.themes.active.theme.primary.color,
                },
                day            : {
                    axis: 'x'

                }
            },
            data      : [
                {
                    'Last Week'    : 440,
                    'A Week Before': 514,
                    'day'          : 'Monday'
                }, {
                    'Last Week'    : 470,
                    'A Week Before': 483,
                    'day'          : 'Tuesday'
                }, {
                    'Last Week'    : 480,
                    'A Week Before': 490,
                    'day'          : 'Wednesday'
                }, {
                    'Last Week'    : 510,
                    'A Week Before': 455,
                    'day'          : 'Thursday'
                }, {
                    'Last Week'    : 503,
                    'A Week Before': 420,
                    'day'          : 'Friday'
                }, {
                    'Last Week'    : 525,
                    'A Week Before': 435,
                    'day'          : 'Saturday'
                }, {
                    'Last Week'    : 525,
                    'A Week Before': 435,
                    'day'          : 'Sunday'
                },

            ],
            chart     : {
                size   : {
                    height: 300
                },
                axis   : {
                    y: {
                        min: 400
                    }
                },
                grid   : {
                    x: {
                        show: false
                    },
                    y: {
                        show: true
                    }
                },
                zoom   : {
                    enabled: true
                },
                legend : {
                    show    : false,
                    position: 'bottom'
                },
                point  : {
                    r: 0
                },
                padding: {
                    top   : 8,
                    right : 8,
                    left  : 32,
                    bottom: 16
                }
            }
        };


        /**
         * Pie Chart
         * @type {{data: *[], dimensions: {Direct: {type: string, color: *}, Search Engines: {type: string, color: *},
         *     Social: {type: string, color: *}, others: {type: string, color: *}}}}
         */
        vm.pieChart = {
            dimensions: {
                'Direct'        : {
                    type : 'pie',
                    color: vm.themes.active.theme.accent.hue3.color
                },
                'Search Engines': {
                    type : 'pie',
                    color: vm.themes.active.theme.accent.hue2.color
                },
                'Social'        : {
                    type : 'pie',
                    color: vm.themes.active.theme.accent.color
                },
                'others'        : {
                    type : 'pie',
                    color: vm.themes.active.theme.accent.hue1.color
                }
            },
            data      : [
                {
                    'Direct': 42
                }, {
                    'Search Engines': 24
                }, {
                    'Social': 22
                }, {
                    'others': 12
                },
            ],
            chart     : {
                size: {
                    height: 400
                }
            }
        };

        //////////
    }

})();
