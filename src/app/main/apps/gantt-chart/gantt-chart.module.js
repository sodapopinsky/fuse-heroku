(function ()
{
    'use strict';

    angular
        .module('app.gantt-chart', [
            'gantt',
            'gantt.sortable',
            'gantt.movable',
            'gantt.drawtask',
            'gantt.tooltips',
            'gantt.bounds',
            'gantt.progress',
            'gantt.table',
            'gantt.tree',
            'gantt.groups',
            'gantt.overlap',
            'gantt.resizeSensor',
        ])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, $mdDateLocaleProvider)
    {
        $stateProvider.state('app.gantt-chart', {
            url    : '/gantt-chart',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/apps/gantt-chart/gantt-chart.html',
                    controller : 'GanttChartController as vm'
                }
            },
            resolve: {
                Tasks    : function (apiResolver)
                {
                    return apiResolver.resolve('ganttChart.tasks@get');
                },
                Timespans: function (apiResolver)
                {
                    return apiResolver.resolve('ganttChart.timespans@get');
                }
            }
        });

        $translatePartialLoaderProvider.addPart('app/main/apps/gantt-chart');
    }

})();