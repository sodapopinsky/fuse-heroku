(function () {
    'use strict';

    angular
        .module('app.components')
        .controller('C3Controller', C3Controller);

    function C3Controller(fuseTheming) {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;
        vm.lineChart = {
            dimensions: {
                'Last Week': {
                    axis: 'y',
                    type: 'line',
                    color: vm.themes.active.theme.accent.color,
                    label: true
                },
                'A Week Before': {
                    axis: 'y',
                    type: 'line',
                    color: vm.themes.active.theme.primary.color
                },
                'day': {
                    axis: 'x'

                }
            },
            data: [
                {
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
                    show: true,
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
        vm.lineAreaChart = angular.copy(vm.lineChart);
        vm.lineAreaChart.dimensions['Last Week'].type = 'area';
        vm.lineAreaChart.dimensions['A Week Before'].type = 'area';

        vm.splineChart = angular.copy(vm.lineChart);
        vm.splineChart.dimensions['Last Week'].type = 'spline';
        vm.splineChart.dimensions['A Week Before'].type = 'spline';

        vm.splineAreaChart = angular.copy(vm.lineChart);
        vm.splineAreaChart.dimensions['Last Week'].type = 'area-spline';
        vm.splineAreaChart.dimensions['A Week Before'].type = 'area-spline';

        vm.stepChart = angular.copy(vm.lineChart);
        vm.stepChart.dimensions['Last Week'].type = 'step';
        vm.stepChart.dimensions['A Week Before'].type = 'step';

        vm.stepAreaChart = angular.copy(vm.lineChart);
        vm.stepAreaChart.dimensions['Last Week'].type = 'area-step';
        vm.stepAreaChart.dimensions['A Week Before'].type = 'area-step';

        vm.barChart = {
            dimensions: {
                'count': {
                    axis: 'y',
                    type: 'bar',
                    color: vm.themes.active.theme.accent.color
                }
            },
            data: [
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
                }
            ],
            chart: {
                size: {
                    height: 200
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
                        show: false
                    }
                },
                tooltip: {
                    show: true
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


        vm.scatterChart = {
            dimensions: {
                'Icecream Sales': {
                    axis: 'y',
                    type: 'scatter',
                    color: vm.themes.active.theme.accent.color,
                    label: true
                },
                'Hotdog Sales': {
                    axis: 'y',
                    type: 'scatter',
                    color: vm.themes.active.theme.primary.color,
                    label: true
                },
                'temparature': {
                    axis: 'x',
                    label: true
                }
            },
            data: [
                {'temparature': 13, 'Icecream Sales': 185, 'Hotdog Sales': 540},
                {'temparature': 14, 'Icecream Sales': 215, 'Hotdog Sales': 520},
                {'temparature': 15, 'Icecream Sales': 325, 'Hotdog Sales': 450},
                {'temparature': 16, 'Icecream Sales': 332, 'Hotdog Sales': 400},
                {'temparature': 17, 'Icecream Sales': 408, 'Hotdog Sales': 425},
                {'temparature': 18, 'Icecream Sales': 421, 'Hotdog Sales': 383},
                {'temparature': 19, 'Icecream Sales': 406, 'Hotdog Sales': 392},
                {'temparature': 20, 'Icecream Sales': 412, 'Hotdog Sales': 325},
                {'temparature': 21, 'Icecream Sales': 522, 'Hotdog Sales': 280},
                {'temparature': 22, 'Icecream Sales': 445, 'Hotdog Sales': 224},
                {'temparature': 23, 'Icecream Sales': 544, 'Hotdog Sales': 200},
                {'temparature': 24, 'Icecream Sales': 614, 'Hotdog Sales': 212},
            ],
            chart: {
                size: {
                    height: 300
                },
                padding: {
                    top: 8,
                    right: 8,
                    left: 32,
                    bottom: 16
                },
                point: {
                    r: 5
                },
                axis: {
                    x: {
                        show: true,
                        label: 'Temparature °C'
                    },
                    y: {
                        show: true,
                        label: 'Sale Count'
                    }
                },
                tooltip: {
                    show: true
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
                    enabled: false
                },
                legend: {
                    show: true,
                    position: 'bottom'
                }
            }
        };


        vm.pieChart = {
            dimensions: {
                'Direct': {
                    type: 'pie',
                    color: vm.themes.active.theme.accent.hue3.color
                },
                'Search Engines': {
                    type: 'pie',
                    color: vm.themes.active.theme.accent.hue2.color
                },
                'Social': {
                    type: 'pie',
                    color: vm.themes.active.theme.accent.color
                },
                'others': {
                    type: 'pie',
                    color: vm.themes.active.theme.accent.hue1.color
                }
            },
            data: [
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
            chart: {
                size: {
                    height: 400
                }
            }
        };

        // Methods

        //////////

    }
})();