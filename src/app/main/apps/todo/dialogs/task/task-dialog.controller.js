(function ()
{
    'use strict';

    angular.module('app.todo')
        .controller('TaskDialogController', TaskDialogController);

    /** @ngInject */
    function TaskDialogController($mdDialog, task, title)
    {
        var vm = this;

        // Data
        vm.title = title;
        vm.task = task;
        vm.form = {
            from: 'sercanyemen@creapond.com'
        };

        // Methods
        vm.closeDialog = closeDialog;

        //////////

        function closeDialog()
        {
            $mdDialog.hide();
        }
    }
})();
