(function () {
    'use strict';

    angular.module('app.todo')
        .controller('taskDialogController', taskDialogController);

    /** @ngInject */
    function taskDialogController(api, $mdDialog, task, title) {
        var vm = this;
        vm.title = title;
        vm.task = task;
        vm.closeDialog = closeDialog;
        vm.form = {
            from: 'sercanyemen@creapond.com'
        };
        function closeDialog() {
            $mdDialog.hide();
        }
    }
})();
