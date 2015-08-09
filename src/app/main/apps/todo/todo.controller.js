(function () {
    'use strict';

    angular.module('app.todo')
        .controller('TodoController', TodoController);

    /** @ngInject */
    function TodoController($document, $mdDialog, $mdSidenav, api) {
        var vm = this;

        // Data
        vm.checked = [];
        vm.colors = ['blue', 'blue-grey', 'orange', 'pink', 'purple'];
        vm.filters = {
            'filter': ['Start Date', 'Due Date', 'Manual', 'Tag', 'Title'],
            'order': ['Ascending', 'Descending'],
            'next': ['Next 3 days', 'Next 7 days', 'Next 2 weeks', 'Next month']
        };
        vm.projects = {
            'creapond': 'Project Creapond',
            'withinpixels': 'Project Withinpixels'
        };
        vm.selectedFilter = {
            filter: 'Start Date',
            order: 'Ascending',
            next: 'Next 3 days'
        };
        vm.selectedProject = 'creapond';

        api.todo.tasks.get({}, function (response) {
            vm.tasks = response.data;
        });

        api.todo.tags.get({}, function (response) {
            vm.tags = response.data;
        });

        // Methods
        vm.openTaskDialog = openTaskDialog;
        vm.toggleStarred = toggleStarred;
        vm.toggleCheck = toggleCheck;
        vm.toggleSidenav = toggleSidenav;

        //////////

        /**
         * Toggle starred
         *
         * @param task
         * @param event
         */
        function toggleStarred(task, event) {
            event.stopPropagation();
            task.starred = !task.starred;
        }

        /**
         * Open new task dialog
         *
         * @param ev
         * @param task
         */
        function openTaskDialog(ev, task) {
            var title = (task) ? 'Edit Task' : 'New Task';

            $mdDialog.show({
                controller: 'TaskDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/main/apps/todo/dialogs/task/task-dialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    task: task,
                    title: title
                }
            });
        }

        /**
         * Toggle checked status of the task
         *
         * @param task
         * @param event
         */
        function toggleCheck(task, event) {
            event.stopPropagation();
            task.checked = !task.checked;
        }

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId) {
            $mdSidenav(sidenavId).toggle();
        }
    }
})();
