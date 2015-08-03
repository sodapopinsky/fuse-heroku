(function ()
{
    'use strict';

    angular.module('app.dashboard').controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($scope, fuseTheming)
    {
        var vm = this;

        // Data
        vm.date = new Date();
        vm.themes = fuseTheming.themes;

        vm.gridItems = [
            {
                sizeX: 2,
                sizeY: 1,
                row  : 0,
                col  : 0
            }, {
                sizeX: 2,
                sizeY: 2,
                row  : 0,
                col  : 2
            }, {
                sizeX: 1,
                sizeY: 1,
                row  : 0,
                col  : 4
            }, {
                sizeX: 1,
                sizeY: 1,
                row  : 0,
                col  : 5
            }, {
                sizeX: 2,
                sizeY: 1,
                row  : 1,
                col  : 0
            }, {
                sizeX: 1,
                sizeY: 1,
                row  : 1,
                col  : 4
            }, {
                sizeX: 1,
                sizeY: 2,
                row  : 1,
                col  : 5
            }, {
                sizeX: 1,
                sizeY: 1,
                row  : 2,
                col  : 0
            }, {
                sizeX: 2,
                sizeY: 1,
                row  : 2,
                col  : 1
            }, {
                sizeX: 1,
                sizeY: 1,
                row  : 2,
                col  : 3
            }, {
                sizeX: 1,
                sizeY: 1,
                row  : 2,
                col  : 4
            }
        ];
        vm.gridsterOptions = {
            columns          : 6, // the width of the grid, in columns
            pushing          : true, // whether to push other items out of the way on move or resize
            floating         : true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
            swapping         : false, // whether or not to have items of the same size switch places instead of pushing down if they are the same size
            width            : 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
            colWidth         : 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
            rowHeight        : 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
            margins          : [16, 16], // the pixel distance between each widget
            outerMargin      : false, // whether margins apply to outer edges of the grid
            isMobile         : true, // stacks the grid items if true
            mobileBreakPoint : 784, // if the screen is not wider that this, remove the grid layout and stack the items
            mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
            minColumns       : 1, // the minimum columns the grid must have
            minRows          : 2, // the minimum height of the grid, in rows
            maxRows          : 100,
            defaultSizeX     : 3, // the default width of a gridster item, if not specifed
            defaultSizeY     : 3, // the default height of a gridster item, if not specified
            minSizeX         : 1, // minimum column width of an item
            maxSizeX         : null, // maximum column width of an item
            minSizeY         : 1, // minumum row height of an item
            maxSizeY         : null, // maximum row height of an item
            resizable        : {
                enabled: false,
                handles: ['s', 'e', 'n', 'w'],
                start  : function (event, $element, widget)
                {
                    // optional callback fired when resize is started,
                    console.log('resize started');
                },
                resize : function (event, $element, widget)
                {
                    //console.log(event);
                    //console.log($element);
                    //console.log(widget);
                    //console.log('resizing...');
                    // optional callback fired when item is resized,
                },
                stop   : function (event, $element, widget)
                {
                    console.log('resize stopped');
                    // optional callback fired when item is finished resizing
                }
            },
            draggable        : {
                enabled: true, // whether dragging items is supported
                handle : '.my-class', // optional selector for resize handle
                start  : function (event, $element, widget)
                {
                    // optional callback fired when drag is started,
                },
                drag   : function (event, $element, widget)
                {
                    // optional callback fired when item is moved,
                },
                stop   : function (event, $element, widget)
                {
                    // optional callback fired when item is finished dragging
                }
            }
        };

        /*$scope.$on('gridster-resized', function (gridster, sizes)
         {
         console.log(sizes);

         if ( sizes[0] > 1200 )
         {
         vm.gridsterOptions.columns = 8;
         }
         else
         {
         vm.gridsterOptions.columns = 6;
         }
         });*/

        vm.widgetSizes = {
            small: {
                x: 1,
                y: 1
            },
            wide : {
                x: 2,
                y: 1
            },
            large: {
                x: 2,
                y: 2
            }
        };

        vm.widget1 = {
            defaultSize   : 'small',
            availableSizes: [
                'small',
                'wide',
                'large'
            ],
            size          : {
                x   : 2,
                y   : 1,
                minX: 1,
                minY: 1
            },
            position      : [0, 0],
            data          : {
                title: 'WEEKLY TRANSACTIONS'
            }
        };

        vm.widget2 = {
            size    : {
                x   : 2,
                y   : 1,
                minX: 1,
                minY: 1
            },
            position: [1, 0],
            data    : {
                title: 'DAILY VISITORS'
            }
        };

        vm.widget3 = {
            size    : {
                x   : 2,
                y   : 1,
                minX: 1,
                minY: 1
            },
            position: [3, 0],
            data    : {
                title: 'DAILY VISITORS'
            }
        };

        vm.widget4 = {
            size    : {
                x   : 1,
                y   : 1,
                minX: 1,
                minY: 1
            },
            position: [5, 0],
            data    : {
                title: 'DAILY VISITORS'
            }
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
         * @type {{data: {Last Week: number, A Week Before: number, day: string}[], dimensions: {Last Week: {axis: string, type: string, color:
         *     (themes.palette.accent|*|LIGHT_DEFAULT_HUES.accent|Q.accent|A.accent)}, A Week Before: {axis: string, type: string, color:
         *     (themes.palette.primary|*|AST.primary|r.primary|rulesByType.primary|m.primary)}, day: {axis: string}}, chart: {axis: {y: {min: number}}, grid: {x: {show: boolean},
         *     y: {show: boolean}}, zoom: {enabled: boolean}, legend: {position: string}, point: {r: number}, padding: {top: number, right: number, left: number, bottom:
         *     number}}}}
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
         * @type {{data: *[], dimensions: {Direct: {type: string, color: *}, Search Engines: {type: string, color: *}, Social: {type: string, color: *}, others: {type: string,
         *     color: *}}}}
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
