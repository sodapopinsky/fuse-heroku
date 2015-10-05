(function ()
{
    'use strict';

    angular.module('app.gantt-chart')
        .controller('GanttChartController', GanttChartController);

    /** @ngInject */
    function GanttChartController($mdDialog, $document, $animate, $scope, $timeout, $log, ganttUtils, GanttObjectModel, ganttMouseOffset, ganttDebounce, moment, Tasks, Timespans, $window, $mdSidenav, api)
    {
        var vm = this;
        var objectModel;
        var dataToRemove;
        vm.options = {
            mode                    : 'custom',
            scale                   : 'day',
            sortMode                : undefined,
            sideMode                : 'TreeTable',
            daily                   : true,
            maxHeight               : 300,
            width                   : true,
            zoom                    : 1,
            rowSortable             : true,
            columns                 : ['model.name', 'from', 'to'],
            treeTableColumns        : ['from', 'to'],
            columnsHeaders          : {
                'model.name': 'Name',
                'from'      : 'Start Time',
                'to'        : 'End Time'
            },
            columnsClasses          : {
                'model.name': 'gantt-column-name',
                'from'      : 'gantt-column-from',
                'to'        : 'gantt-column-to'
            },
            columnsFormatters       : {
                'from': function (from)
                {
                    return from !== undefined ? from.format('lll') : undefined;
                },
                'to'  : function (to)
                {
                    return to !== undefined ? to.format('lll') : undefined;
                }
            },
            treeHeaderContent       : '{{getHeader()}}',
            columnsHeaderContents   : {
                'model.name': '{{getHeader()}}',
                'from'      : '{{getHeader()}}',
                'to'        : '{{getHeader()}}'
            },
            autoExpand              : 'none',
            taskOutOfRange          : 'truncate',
            fromDate                : undefined,
            toDate                  : undefined,
            rowContentEnabled       :true,
            rowContent              : '<md-button class="md-icon-button" aria-label="minus" ng-click="scope.vm.handleRowIconClick(row.model)"\n           ng-click="vm.options.zoom  = vm.options.zoom - 0.1">\n    <md-icon md-font-icon="icon-pencil" class="s16"></md-icon>\n</md-button>\n{{row.model.name}}',
            taskContent             : '{{task.model.name}}',
            allowSideResizing       : true,
            labelsEnabled           : true,
            currentDate             : 'line',
            currentDateValue        : new Date(2013, 9, 23, 11, 20, 0),
            draw                    : true,
            readOnly                : false,
            groupDisplayMode        : 'group',
            filterTask              : '',
            filterRow               : '',
            timeFrames              : {
                'day'    : {
                    start  : moment('8:00', 'HH:mm'),
                    end    : moment('20:00', 'HH:mm'),
                    working: true,
                    default: true
                },
                'noon'   : {
                    start  : moment('12:00', 'HH:mm'),
                    end    : moment('13:30', 'HH:mm'),
                    working: false,
                    default: true
                },
                'weekend': {
                    working: false
                },
                'holiday': {
                    working: false,
                    color  : 'red',
                    classes: ['gantt-timeframe-holiday']
                }
            },
            dateFrames              : {
                'weekend'    : {
                    evaluator: function (date)
                    {
                        return date.isoWeekday() === 6 || date.isoWeekday() === 7;
                    },
                    targets  : ['weekend']
                },
                '11-november': {
                    evaluator: function (date)
                    {
                        return date.month() === 10 && date.date() === 11;
                    },
                    targets  : ['holiday']
                }
            },
            timeFramesNonWorkingMode: 'hidden',
            columnMagnet            : '15 minutes',
            timeFramesMagnet        : true,
            canDraw                 : function (event)
            {
                var isLeftMouseButton = event.button === 0 || event.button === 1;
                return vm.options.draw && !vm.options.readOnly && isLeftMouseButton;
            },
            drawTaskFactory         : function ()
            {
                return {
                    id   : ganttUtils.randomUuid(),  // Unique id of the task.
                    name : 'Drawn task', // Name shown on top of each task.
                    color: '#AA8833' // Color of the task in HEX format (Optional).
                };
            },
            api                     : function (ganttApi)
            {
                // API Object is used to control methods and events from angular-gantt.
                vm.api = ganttApi;

                vm.api.core.on.ready($scope, function ()
                {
                    // Log various events to console
                    vm.api.scroll.on.scroll($scope, logScrollEvent);
                    vm.api.core.on.ready($scope, logReadyEvent);

                    vm.api.data.on.remove($scope, addEventName('data.on.remove', logDataEvent));
                    vm.api.data.on.load($scope, addEventName('data.on.load', logDataEvent));
                    vm.api.data.on.clear($scope, addEventName('data.on.clear', logDataEvent));

                    vm.api.tasks.on.add($scope, addEventName('tasks.on.add', logTaskEvent));
                    vm.api.tasks.on.change($scope, addEventName('tasks.on.change', logTaskEvent));
                    vm.api.tasks.on.rowChange($scope, addEventName('tasks.on.rowChange', logTaskEvent));
                    vm.api.tasks.on.remove($scope, addEventName('tasks.on.remove', logTaskEvent));

                    if ( vm.api.tasks.on.moveBegin )
                    {
                        vm.api.tasks.on.moveBegin($scope, addEventName('tasks.on.moveBegin', logTaskEvent));
                        //vm.api.tasks.on.move($scope, addEventName('tasks.on.move', logTaskEvent));
                        vm.api.tasks.on.moveEnd($scope, addEventName('tasks.on.moveEnd', logTaskEvent));

                        vm.api.tasks.on.resizeBegin($scope, addEventName('tasks.on.resizeBegin', logTaskEvent));
                        //vm.api.tasks.on.resize($scope, addEventName('tasks.on.resize', logTaskEvent));
                        vm.api.tasks.on.resizeEnd($scope, addEventName('tasks.on.resizeEnd', logTaskEvent));
                    }

                    vm.api.rows.on.add($scope, addEventName('rows.on.add', logRowEvent));
                    vm.api.rows.on.change($scope, addEventName('rows.on.change', logRowEvent));
                    vm.api.rows.on.move($scope, addEventName('rows.on.move', logRowEvent));
                    vm.api.rows.on.remove($scope, addEventName('rows.on.remove', logRowEvent));

                    vm.api.side.on.resizeBegin($scope, addEventName('labels.on.resizeBegin', logLabelsEvent));
                    //vm.api.side.on.resize($scope, addEventName('labels.on.resize', logLabelsEvent));
                    vm.api.side.on.resizeEnd($scope, addEventName('labels.on.resizeEnd', logLabelsEvent));

                    vm.api.timespans.on.add($scope, addEventName('timespans.on.add', logTimespanEvent));
                    vm.api.columns.on.generate($scope, logColumnsGenerateEvent);

                    vm.api.rows.on.filter($scope, logRowsFilterEvent);
                    vm.api.tasks.on.filter($scope, logTasksFilterEvent);

                    vm.api.data.on.change($scope, function (newData)
                    {
                        /* if ( dataToRemove === undefined )
                         {
                         dataToRemove = [
                         {'id': newData.data[2].id}, // Remove Kickoff row
                         {
                         'id'   : newData.data[0].id,
                         'tasks': [
                         {'id': newData.data[0].tasks[0].id},
                         {'id': newData.data[0].tasks[3].id}
                         ]
                         }, // Remove some Milestones
                         {
                         'id'   : newData.data[6].id,
                         'tasks': [
                         {'id': newData.data[6].tasks[0].id}
                         ]
                         } // Remove order basket from Sprint 2
                         ];
                         }*/
                    });

                    // When gantt is ready, load data.
                    // `data` attribute could have been used too.
                    vm.load();
                    var count = 0;
                    // Add some DOM events
                    vm.api.directives.on.new($scope, function (directiveName, directiveScope, element)
                    {

                        if ( directiveName === 'ganttTask' )
                        {
                            element.on('click', function (event)
                            {
                                event.stopPropagation();
                                logTaskEvent('task-click', directiveScope.task);
                            });
                            element.on('mousedown touchstart', function (event)
                            {
                                event.stopPropagation();
                                vm.live.row = directiveScope.task.row.model;
                                if ( directiveScope.task.originalModel !== undefined )
                                {
                                    vm.live.task = directiveScope.task.originalModel;
                                }
                                else
                                {
                                    vm.live.task = directiveScope.task.model;
                                }
                                $scope.$digest();
                            });
                        }
                        else if ( directiveName === 'ganttRow' )
                        {
                            element.on('click', function (event)
                            {
                                event.stopPropagation();

                                logRowEvent('row-click', directiveScope.row);
                            });
                            element.on('mousedown touchstart', function (event)
                            {
                                event.stopPropagation();

                                vm.live.row = directiveScope.row.model;
                                $scope.$digest();
                            });
                        }
                        else if ( directiveName === 'ganttRowLabel' )
                        {
                            element.on('click', function ()
                            {
                                logRowEvent('row-label-click', directiveScope.row);
                            });
                            element.on('mousedown touchstart', function ()
                            {
                                vm.live.row = directiveScope.row.model;
                                $scope.$digest();
                            });
                        }
                    });

                    vm.api.tasks.on.rowChange($scope, function (task)
                    {
                        vm.live.row = task.row.model;
                    });

                    objectModel = new GanttObjectModel(vm.api);
                });
            }
        };
        vm.searchOption = 'list';
        vm.searchKeyword = '';

        // Methods
        vm.toggleSidenav = toggleSidenav;
        vm.search = search;
        vm.setSortMode = setSortMode;
        vm.addRow = addRow;
        //////////

        // Set Gantt Chart height for init
        calculateHeight();

        /**
         * Add New Row
         */
        function addRow(ev, row)
        {
            $mdDialog.show({
                controller         : 'RowDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/apps/gantt-chart/dialogs/row/row-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true,
                locals             : {
                    row : row,
                    data: vm.data
                }
            });

        }

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
         *
         * @param sidenavId
         */
        function search()
        {
            if ( vm.searchOption === 'list' )
            {
                vm.options.filterRow = vm.searchKeyword;
            }
            else if ( vm.searchOption === 'timeline' )
            {
                vm.options.filterTask = vm.searchKeyword;
            }
        }

        function setSortMode(mode)
        {
            vm.options.sortMode = mode;
            if ( mode === undefined )
            {
                vm.options.rowSortable = true;
            }
            else
            {
                vm.options.rowSortable = false;
            }
        }

        vm.handleTaskIconClick = function (taskModel)
        {
            alert('Icon from ' + taskModel.name + ' task has been clicked.');
        };

        vm.handleRowIconClick = function (rowModel)
        {
            console.log('Icon from ' + rowModel.name + ' row has been clicked.');
        };

        vm.expandAll = function ()
        {
            vm.api.tree.expandAll();
        };

        vm.collapseAll = function ()
        {
            vm.api.tree.collapseAll();
        };

        $scope.$watch('vm.options.sideMode', function (newValue, oldValue)
        {
            if ( newValue !== oldValue )
            {
                vm.api.side.setWidth(undefined);
                $timeout(function ()
                {
                    vm.api.columns.refresh();
                });
            }
        });

        vm.canAutoWidth = function (scale)
        {
            if ( scale.match(/.*?hour.*?/) || scale.match(/.*?minute.*?/) )
            {
                return false;
            }
            return true;
        };

        vm.getColumnWidth = function (widthEnabled, scale, zoom)
        {
            if ( !widthEnabled && vm.canAutoWidth(scale) )
            {
                return undefined;
            }

            if ( scale.match(/.*?week.*?/) )
            {
                return 150 * zoom;
            }

            if ( scale.match(/.*?month.*?/) )
            {
                return 300 * zoom;
            }

            if ( scale.match(/.*?quarter.*?/) )
            {
                return 500 * zoom;
            }

            if ( scale.match(/.*?year.*?/) )
            {
                return 800 * zoom;
            }

            return 40 * zoom;
        };

        // Reload data action
        vm.load = function ()
        {
            vm.data = Tasks.data;
            vm.timespans = Timespans.data;
            dataToRemove = undefined;

            // Fix for Angular-chart issue
            $animate.enabled(true);
            $animate.enabled($('#gantt'), false);

        };

        vm.reload = function ()
        {
            api.ganttChart.tasks.get({}, function (response)
            {
                vm.data = response.data;
            });

            api.ganttChart.timespans.get({}, function (response)
            {
                vm.timespans = response.data;
            });

            dataToRemove = undefined;
        };

        // Remove data action
        vm.remove = function ()
        {
            vm.api.data.remove(dataToRemove);
        };

        // Clear data action
        vm.clear = function ()
        {
            vm.data = [];
        };


        // Visual two way binding.
        vm.live = {};

        var ganttDebounceValue = 1000;

        var listenTaskJson = ganttDebounce(function (taskJson)
        {
            if ( taskJson !== undefined )
            {
                var task = angular.fromJson(taskJson);
                objectModel.cleanTask(task);
                var model = vm.live.task;
                angular.extend(model, task);
            }
        }, ganttDebounceValue);
        $scope.$watch('vm.live.taskJson', listenTaskJson);

        var listenRowJson = ganttDebounce(function (rowJson)
        {
            if ( rowJson !== undefined )
            {
                var row = angular.fromJson(rowJson);
                objectModel.cleanRow(row);
                var tasks = row.tasks;

                delete row.tasks;
                var rowModel = vm.live.row;

                angular.extend(rowModel, row);

                var newTasks = {};
                var i, l;

                if ( tasks !== undefined )
                {
                    for ( i = 0, l = tasks.length; i < l; i++ )
                    {
                        objectModel.cleanTask(tasks[i]);
                    }

                    for ( i = 0, l = tasks.length; i < l; i++ )
                    {
                        newTasks[tasks[i].id] = tasks[i];
                    }

                    if ( rowModel.tasks === undefined )
                    {
                        rowModel.tasks = [];
                    }
                    for ( i = rowModel.tasks.length - 1; i >= 0; i-- )
                    {
                        var existingTask = rowModel.tasks[i];
                        var newTask = newTasks[existingTask.id];
                        if ( newTask === undefined )
                        {
                            rowModel.tasks.splice(i, 1);
                        }
                        else
                        {
                            objectModel.cleanTask(newTask);
                            angular.extend(existingTask, newTask);
                            delete newTasks[existingTask.id];
                        }
                    }
                }
                else
                {
                    delete rowModel.tasks;
                }

                angular.forEach(newTasks, function (newTask)
                {
                    rowModel.tasks.push(newTask);
                });
            }
        }, ganttDebounceValue);
        $scope.$watch('vm.live.rowJson', listenRowJson);

        $scope.$watchCollection('vm.live.task', function (task)
        {
            vm.live.taskJson = angular.toJson(task, true);
            vm.live.rowJson = angular.toJson(vm.live.row, true);
        });

        $scope.$watchCollection('vm.live.row', function (row)
        {
            vm.live.rowJson = angular.toJson(row, true);
            if ( row !== undefined && row.tasks !== undefined && row.tasks.indexOf(vm.live.task) < 0 )
            {
                vm.live.task = row.tasks[0];
            }
        });

        $scope.$watchCollection('vm.live.row.tasks', function ()
        {
            vm.live.rowJson = angular.toJson(vm.live.row, true);
        });

        /**
         * EVENTS
         */

        // Event handler
        var logScrollEvent = function (left, date, direction)
        {
            if ( date !== undefined )
            {
                $log.info('[Event] vm.api.on.scroll: ' + left + ', ' + (date === undefined ? 'undefined' : date.format()) + ', ' + direction);
            }
        };

        // Event handler
        function logDataEvent(eventName)
        {
            $log.info('[Event] ' + eventName);
        }

        // Event handler
        function logTaskEvent(eventName, task)
        {
            $log.info('[Event] ' + eventName + ': ' + task.model.name);
        }

        // Event handler
        function logRowEvent(eventName, row)
        {
            $log.info('[Event] ' + eventName + ': ' + row.model.name);
        }

        // Event handler
        function logTimespanEvent(eventName, timespan)
        {
            $log.info('[Event] ' + eventName + ': ' + timespan.model.name);
        }

        // Event handler
        function logLabelsEvent(eventName, width)
        {
            $log.info('[Event] ' + eventName + ': ' + width);
        }

        // Event handler
        function logColumnsGenerateEvent(columns, headers)
        {
            $log.info('[Event] ' + 'columns.on.generate' + ': ' + columns.length + ' column(s), ' + headers.length + ' header(s)');
        }

        // Event handler
        function logRowsFilterEvent(rows, filteredRows)
        {
            $log.info('[Event] rows.on.filter: ' + filteredRows.length + '/' + rows.length + ' rows displayed.');
        }

        // Event handler
        function logTasksFilterEvent(tasks, filteredTasks)
        {
            $log.info('[Event] tasks.on.filter: ' + filteredTasks.length + '/' + tasks.length + ' tasks displayed.');
        }

        // Event handler
        function logReadyEvent()
        {
            $log.info('[Event] core.on.ready');
        }

        // Event utility function
        function addEventName(eventName, func)
        {
            return function (data)
            {
                return func(eventName, data);
            };
        }

        /**
         * Max Height Fix
         */
        function calculateHeight()
        {
            vm.options.maxHeight = $('#chart-container')[0].offsetHeight;
        }

        angular.element($window).bind('resize', function ()
        {
            $scope.$apply(function ()
            {
                calculateHeight();
            });
        });


    }

})();
