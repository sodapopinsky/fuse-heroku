(function ()
{
    'use strict';

    angular.module('app.todo')
        .controller('TodoController', TodoController);

    /** @ngInject */
    function TodoController($document, $filter, $mdDialog, $mdSidenav, Tasks, Tags)
    {
        var vm = this;

        // Data
        vm.checked = [];
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
        vm.tasks = Tasks.data;
        vm.tags = Tags.data;

        // Tasks will be filtered against these models
        vm.taskFilters = {
            search: undefined,
            tags  : []
        };

        // Methods
        vm.filterTask = filterTask;
        vm.openTaskDialog = openTaskDialog;
        vm.toggleCheck = toggleCheck;
        vm.toggleSidenav = toggleSidenav;
        vm.toggleTagFilter = toggleTagFilter;
        vm.isTagFilterExists = isTagFilterExists;

        //////////

        function filterTask(task)
        {
            var match = true,
                result = [];

            if ( vm.taskFilters.search )
            {
                result = $filter('filter')([task.title, task.notes, task.tags], vm.taskFilters.search);
                match = (match && result.length > 0);
            }

            if ( vm.taskFilters.tags.length > 0 )
            {
                result = $filter('filterSingleByTags')(task.tags, vm.taskFilters.tags);
                match = (match && result.length > 0);
            }

            return match;
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
         * Toggle checked status of the task
         *
         * @param task
         * @param event
         */
        function toggleCheck(task, event)
        {
            event.stopPropagation();
            task.checked = !task.checked;
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
    }

})();