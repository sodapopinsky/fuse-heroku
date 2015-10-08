(function ()
{
    'use strict';

    angular.module('app.todo')
        .controller('TaskDialogController', TaskDialogController);

    /** @ngInject */
    function TaskDialogController($mdDialog, task, tasks, event)
    {
        var vm = this;

        // Data
        vm.title = 'Edit Task';
        vm.task = angular.copy(task);
        vm.newTask = false;

        if ( !vm.task )
        {
            vm.task = {
                'id'                : '',
                'title'             : '',
                'notes'             : '',
                'startDate'         : new Date(),
                'startDateTimeStamp': new Date().getTime(),
                'dueDate'           : '',
                'dueDateTimeStamp'  : '',
                'completed'         : false,
                'starred'           : false,
                'important'         : false,
                'deleted'           : false,
                'tags'              : []
            };
            vm.title = 'New Task';
            vm.newTask = true;
            vm.task.tags = [];
        }

        // Methods
        vm.closeDialog = closeDialog;
        vm.newTag = newTag;
        vm.deleteTask = deleteTask;
        vm.addNewTask = addNewTask;
        vm.saveTask = saveTask;
        //////////

        function addNewTask()
        {
            tasks.unshift(vm.task);
            closeDialog();
        }

        function saveTask()
        {
            getTaskKey(task, function (key)
            {
                tasks[key] = angular.copy(vm.task);
                closeDialog();
            });
        }

        function closeDialog()
        {
            $mdDialog.hide();
        }

        function newTag(chip)
        {
            var tagColors = ['#388E3C', '#F44336', '#FF9800', '#0091EA'];

            return {
                label: chip,
                color: tagColors[Math.floor(Math.random() * (tagColors.length))]
            };
        }

        function deleteTask()
        {

            var confirm = $mdDialog.confirm()
                .title('Are you sure?')
                .content('The Task will be deleted.')
                .ariaLabel('Delete Task')
                .ok('Delete')
                .cancel('Cancel')
                .targetEvent(event);
            $mdDialog.show(confirm).then(function ()
            {
                getTaskKey(task, function (key)
                {
                    delete tasks[key];
                });

            }, function ()
            {
                //Cancel Action
            });
        }

        function getTaskKey(task, callback)
        {
            angular.forEach(tasks, function (item, key)
            {
                if ( item === task )
                {
                    return callback(key);
                }
            });
        }

    }
})();