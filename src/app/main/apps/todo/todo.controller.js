(function ()
{
    'use strict';

    angular.module('app.todo')
        .controller('TodoController', TodoController);

    /** @ngInject */
    function TodoController(api, $mdDialog, $document)
    {
        var vm = this;

        // Data
        vm.checked = [];
        vm.colors = ['blue', 'blue-grey', 'orange', 'pink', 'purple'];
        vm.filters = {
            'filter': ['Start Date', 'Due Date', 'Manual', 'Tag', 'Title'],
            'order' : ['Ascending', 'Descending'],
            'next'  : ['Next 3 days', 'Next 7 days', 'Next 2 weeks', 'Next month']
        };
        vm.projects = {
            'creapond'    : 'Project Creapond',
            'withinpixels': 'Project Withinpixels'
        };
        vm.selectedFilter = {
            filter: 'Start Date',
            order : 'Ascending',
            next  : 'Next 3 days'
        };
        vm.selectedProject = 'creapond';

        api.todo.tasks.get({}, function (response)
        {
            vm.tasks = response.data;
        });

        api.todo.tags.get({}, function (response)
        {
            vm.tags = response.data;
        });

        // Methods
        vm.openTaskDialog = openTaskDialog;
        vm.starredToggle = starredToggle;
        vm.toggleCheck = toggleCheck;

        //////////

        function starredToggle(task, event)
        {
            event.stopPropagation();
            task.starred = !task.starred;
        }

        function openTaskDialog(ev, task)
        {
            var title = (task) ? 'Edit Task' : 'New Task';

            $mdDialog.show({
                controller         : 'TaskDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/apps/todo/task-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true,
                locals             : {
                    task : task,
                    title: title
                }
            });
        }

        function toggleCheck(event, task)
        {
            event.stopPropagation();
            task.checked = !task.checked;
        }
    }
})();
