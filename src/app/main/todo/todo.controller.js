(function () {
    'use strict';

    angular.module('fuse')
        .controller('todoController', todoController);

    /** @ngInject */
    function todoController(api, $mdDialog,$document) {
        var vm = this;
        vm.colors = ['blue', 'blue-grey', 'orange', 'pink', 'purple'];
        vm.checked = [];
        vm.toggleCheck = toggleCheck;
        vm.openTaskDialog = openTaskDialog;
        vm.starredToggle = starredToggle;
        vm.selectedProject = 'creapond';
        vm.projects = {
            'creapond': 'Project Creapond',
            'withinpixels': 'Project Withinpixels'
        };
        vm.filters = {
            'filter': ['Start Date', 'Due Date', 'Manual', 'Tag', 'Title'],
            'order': ['Ascending', 'Descending'],
            'next': ['Next 3 days', 'Next 7 days', 'Next 2 weeks', 'Next month']
        };
        vm.selectedFilter = {
            filter: 'Start Date',
            order: 'Ascending',
            next: 'Next 3 days'
        };

        api.todo.tasks.get({}, function (response) {
            vm.tasks = response.data;
        });

        api.todo.tags.get({}, function (response) {
            vm.tags = response.data;
        });
        function starredToggle(task, event) {
            event.stopPropagation();
            task.starred = !task.starred;
        }

        function openTaskDialog(ev,task) {
            var title = (task)?'Edit Task': 'New Task';
            $mdDialog.show({
                controller: 'taskDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/main/todo/task-dialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals:{
                    task: task,
                    title: title
                }
            });
        }
        function toggleCheck(event, task){
            event.stopPropagation();
            task.checked = !task.checked;
        }
    }
})();
