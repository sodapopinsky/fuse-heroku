(function ()
{
    'use strict';

    angular.module('app.todo')
        .controller('TodoController', TodoController)
        .filter('filterTags', filterTags);

    /** @ngInject */
    function TodoController($document, $mdDialog, $mdSidenav, Tasks, Tags)
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
        vm.tagFilter = [];

        // Methods
        vm.openTaskDialog = openTaskDialog;
        vm.toggleCheck = toggleCheck;
        vm.toggleSidenav = toggleSidenav;

        //////////

        vm.toggle = function (item, list)
        {
            var idx = list.indexOf(item);
            if ( idx > -1 )
            {
                list.splice(idx, 1);
            }
            else
            {
                list.push(item);
            }
        };
        vm.exists = function (item, list)
        {
            return list.indexOf(item) > -1;
        };

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

    /**
     * Tag Filter
     * @returns {Function}
     */
    function filterTags()
    {
        return function (items, tagFilter)
        {
            if ( tagFilter.length <= 0 )
            {
                return items;
            }
            var filtered = [];

            for ( var i = 0; i < items.length; i++ )
            {
                var item = items[i];

                for ( var j = 0; j < tagFilter.length; j++ )
                {
                    var filter = tagFilter[j];

                    for ( var k = 0; k < item.tags.length; k++ )
                    {
                        var tag = item.tags[k];

                        if ( tag.title === filter )
                        {
                            filtered.push(item);
                        }
                    }
                }
            }
            return filtered;
        };
    }
})();
