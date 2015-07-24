(function () {
    'use strict';

    angular.module('app.calendar')
        .controller('eventDialogController', eventDialogController);

    /** @ngInject */
    function eventDialogController(api, $mdDialog, title, start, event) {
        var vm = this;
        vm.closeDialog = closeDialog;
        vm.dialogTitle = title;
        vm.notifications = ['15 minutes before', '30 minutes before', 'one hour before'];

        // Edit Event
        if (event) {
            vm.event = event;
        }
        // Add New Event
        else {
            vm.event = {
                start: start ? start : '',
                notifications: ['']
            };
        }


        function closeDialog() {
            $mdDialog.hide();
        }
    }
})();
