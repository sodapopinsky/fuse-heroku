(function () {
    'use strict';

    angular.module('fuse')
        .controller('dashboardController', dashboardController);

    /** @ngInject */
    function dashboardController($rootScope) {
        var vm = this;
        vm.date = new Date();
        vm.dailyMiniChart = {
            dimensions: {
                'count': {
                    axis: 'y',
                    type: 'bar',
                    color: 'rgba(255,255,255,.3)'
                    //label: true
                }
            },
            data: [{
                'count': 694
            },

                {
                    'count': 712
                }, {
                    'count': 720
                }, {
                    'count': 732
                }, {
                    'count': 744
                },

                {
                    'count': 752
                }, {
                    'count': 750
                }, {
                    'count': 742
                }, {
                    'count': 744
                },

                {
                    'count': 752
                }, {
                    'count': 752
                }, {
                    'count': 750
                }, {
                    'count': 742
                }, {
                    'count': 750
                }, {
                    'count': 742
                },

            ],
            chart: {
                size: {
                    height: 100
                },
                padding: {
                    top: 0,
                    right: 0,
                    left: 8,
                    bottom: 0
                },
                point: {
                    r: 3
                },
                axis: {
                    x: {
                        show: false
                    },
                    y: {
                        min: 680,
                        show: false
                    }
                },
                tooltip: {
                    show: false
                },
                grid: {
                    x: {
                        show: false
                    },
                    y: {
                        show: false
                    }
                },
                zoom: {
                    enabled: false
                },
                legend: {
                    show: false,
                    position: 'bottom'
                }
            }
        };
        vm.nasdaqMiniChart = {
            dimensions: {
                'value': {
                    axis: 'y',
                    type: 'line',
                    color: '#ccc'
                    //label: true
                },
                day: {
                    axis: 'x'
                }
            },
            data: [{
                'value': 510,
                'day': 'Mon'
            }, {
                'value': 535,
                'day': 'Tue'
            }, {
                'value': 560,
                'day': 'Wed'
            }, {
                'value': 525,
                'day': 'Thu'
            }, {
                'value': 547,
                'day': 'Fri'
            }, {
                'value': 570,
                'day': 'Sat'
            }, {
                'value': 531.69,
                'day': 'Sun'
            }],
            chart: {
                size: {
                    height: 200,
                },
                axis: {
                    y: {}
                },
                grid: {
                    x: {
                        show: false
                    },
                    y: {
                        show: false
                    }
                },
                zoom: {
                    enabled: false
                },
                legend: {
                    show: false,
                    position: 'bottom'
                },
                point: {
                    r: 3
                },
                padding: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                }
            }
        };
        vm.stockMiniChart = {
            dimensions: {
                'count': {
                    axis: 'y',
                    type: 'line',
                    color: 'rgba(255,255,255,.3)'
                    //label: true
                }
            },
            data: [{
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
            chart: {
                size: {
                    height: 90
                },
                padding: {
                    top: 32,
                    right: 8,
                    left: 0,
                    bottom: 0
                },
                point: {
                    r: 3
                },
                axis: {
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
                grid: {
                    x: {
                        show: false
                    },
                    y: {
                        show: false
                    }
                },
                zoom: {
                    enabled: false
                },
                legend: {
                    show: false,
                    position: 'bottom'
                }
            }
        };

        /**
         * Line Chart
         * @type {{data: {Last Week: number, A Week Before: number, day: string}[], dimensions: {Last Week: {axis: string, type: string, color: (themes.palette.accent|*|LIGHT_DEFAULT_HUES.accent|Q.accent|A.accent)}, A Week Before: {axis: string, type: string, color: (themes.palette.primary|*|AST.primary|r.primary|rulesByType.primary|m.primary)}, day: {axis: string}}, chart: {axis: {y: {min: number}}, grid: {x: {show: boolean}, y: {show: boolean}}, zoom: {enabled: boolean}, legend: {position: string}, point: {r: number}, padding: {top: number, right: number, left: number, bottom: number}}}}
         */
        vm.lineChart = {
            dimensions: {
                'Last Week': {
                    axis: 'y',
                    type: 'line',
                    color: $rootScope.selectedTheme.accent.value,
                    label: true
                },
                'A Week Before': {
                    axis: 'y',
                    type: 'line',
                    color: $rootScope.selectedTheme.primary.value
                    //label: true

                },
                day: {
                    axis: 'x'

                }
            },
            data: [{
                'Last Week': 440,
                'A Week Before': 514,
                'day': 'Monday'
            }, {
                'Last Week': 470,
                'A Week Before': 483,
                'day': 'Tuesday'
            }, {
                'Last Week': 480,
                'A Week Before': 490,
                'day': 'Wednesday'
            }, {
                'Last Week': 510,
                'A Week Before': 455,
                'day': 'Thursday'
            }, {
                'Last Week': 503,
                'A Week Before': 420,
                'day': 'Friday'
            }, {
                'Last Week': 525,
                'A Week Before': 435,
                'day': 'Saturday'
            }, {
                'Last Week': 525,
                'A Week Before': 435,
                'day': 'Sunday'
            },

            ],
            chart: {
                size: {
                    height: 300
                },
                axis: {
                    y: {
                        min: 400
                    }
                },
                grid: {
                    x: {
                        show: false
                    },
                    y: {
                        show: true
                    }
                },
                zoom: {
                    enabled: true
                },
                legend: {
                    show: false,
                    position: 'bottom'
                },
                point: {
                    r: 0
                },
                padding: {
                    top: 8,
                    right: 8,
                    left: 32,
                    bottom: 16
                }
            }
        };


        /**
         * Pie Chart
         * @type {{data: *[], dimensions: {Direct: {type: string, color: *}, Search Engines: {type: string, color: *}, Social: {type: string, color: *}, others: {type: string, color: *}}}}
         */
        vm.pieChart = {
            dimensions: {
                'Direct': {
                    type: 'pie',
                    color: $rootScope.selectedTheme.accent.hues.hue3.value
                },
                'Search Engines': {
                    type: 'pie',
                    color: $rootScope.selectedTheme.accent.hues.hue2.value
                },
                'Social': {
                    type: 'pie',
                    color: $rootScope.selectedTheme.accent.value
                },
                'others': {
                    type: 'pie',
                    color: $rootScope.selectedTheme.accent.hues.hue1.value
                }
            },
            data: [{
                'Direct': 42
            }, {
                'Search Engines': 24
            }, {
                'Social': 22
            }, {
                'others': 12
            },],
            chart: {
                size: {
                    height: 400
                }
            }
        };


    }

})();
