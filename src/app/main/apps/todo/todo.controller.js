(function ()
{
    'use strict';

    angular.module('app.todo')
        .controller('TodoController', TodoController);

    /** @ngInject */
    function TodoController($document, $mdDialog, $mdSidenav, Tasks, Tags)
    {
        var vm = this;

        // Data
        vm.tasks = Tasks.data;
        vm.tags = Tags.data;

        vm.completed = [];
        vm.colors = ['blue', 'blue-grey', 'orange', 'pink', 'purple'];
        vm.projects = {
            'creapond'    : 'Project Creapond',
            'withinpixels': 'Project Withinpixels'
        };
        vm.selectedFilter = {
            filter: 'Start Date',
            next  : 'Next 3 days'
        };
        vm.selectedProject = 'creapond';

        // Tasks will be filtered against these models
        vm.taskFilters = {
            search   : undefined,
            tags     : [],
            completed: undefined,
            deleted  : false,
            important: undefined,
            starred  : undefined,
            startDate: undefined,
            dueDate  : undefined
        };
        vm.taskFiltersDefaults = angular.copy(vm.taskFilters);
        vm.showAllTasks = true;

        vm.sortableOptions = {
            'ghostClass' : 'todo-item-placeholder',
            'handle'     : '.handle',
            //'scroll' : false,
            forceFallback: true,
            fallbackClass: 'todo-item-ghost',
            //fallbackOnBody: false
        };

        // Methods
        vm.openTaskDialog = openTaskDialog;
        vm.toggleCompleted = toggleCompleted;
        vm.toggleSidenav = toggleSidenav;
        vm.toggleFilter = toggleFilter;
        vm.toggleTagFilter = toggleTagFilter;
        vm.isTagFilterExists = isTagFilterExists;
        vm.preventDefault = preventDefault;
        vm.resetFilters = resetFilters;
        vm.taskFilterStartDate = taskFilterStartDate;
        vm.taskFilterDueDate = taskFilterDueDate;

        //////////

        /**
         * Prevent default
         *
         * @param e
         */
        function preventDefault(e)
        {
            e.preventDefault();
            e.stopPropagation();
        }

        /**
         * Toggles tag filter
         *
         * @param tag
         */
        function toggleTagFilter(tag)
        {
            var i = vm.taskFilters.tags.indexOf(tag);

            if ( i > -1 )
            {
                vm.taskFilters.tags.splice(i, 1);
            }
            else
            {
                vm.taskFilters.tags.push(tag);
            }

            checkAllTasks();

        }

        /**
         * Returns if tag exists in the tagsFilter
         *
         * @param tag
         * @returns {boolean}
         */
        function isTagFilterExists(tag)
        {
            return vm.taskFilters.tags.indexOf(tag) > -1;
        }

        /**
         * Open new task dialog
         *
         * @param ev
         * @param task
         */
        function openTaskDialog(ev, task)
        {
            $mdDialog.show({
                controller         : 'TaskDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/apps/todo/dialogs/task/task-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true,
                locals             : {
                    task: task
                }
            });
        }

        /**
         * Toggle completed status of the task
         *
         * @param task
         * @param event
         */
        function toggleCompleted(task, event)
        {
            event.stopPropagation();
            task.completed = !task.completed;
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
         * Toggle Filter
         *
         * @param filter
         * @param toggleWith
         */
        function toggleFilter(filter, toggleWith)
        {
            toggleWith = toggleWith === 'undefined' ? undefined : !vm.taskFilters[filter];

            vm.taskFilters[filter] = vm.taskFilters[filter] === toggleWith ? true : toggleWith;

            checkAllTasks();
        }

        /**
         * Reset All Filters
         */
        function resetFilters()
        {
            vm.showAllTasks = true;
            vm.taskFilters = angular.copy(vm.taskFiltersDefaults);
        }

        /**
         * Check Tasks Filtered
         */
        function checkAllTasks()
        {
            if ( angular.equals(vm.taskFiltersDefaults, vm.taskFilters) )
            {
                vm.showAllTasks = true;
            }
            else
            {
                vm.showAllTasks = false;
            }
        }

        /**
         * Filter Due Date
         *
         * @param item
         * @returns {boolean}
         */
        function taskFilterDueDate(item)
        {
            if ( vm.taskFilters.dueDate === undefined )
            {
                return true;

            }
            else if ( vm.taskFilters.dueDate === true )
            {
                return !(item.dueDate === null || item.dueDate.length === 0);
            }
        }

        /**
         * Filter Start Date
         *
         * @param item
         * @returns {boolean}
         */
        function taskFilterStartDate(item)
        {
            if ( vm.taskFilters.startDate === undefined )
            {
                return true;
            }
            else if ( vm.taskFilters.startDate === true )
            {
                return item.startDate === new Date();
            }
        }

    }
})();