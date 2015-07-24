(function () {
    'use strict';

    angular.module('app.calendar')
        .controller('eventDetailDialogController', eventDetailDialogController);

    /** @ngInject */
    function eventDetailDialogController(api, $mdDialog, event, eventDialog) {
        var vm = this;
        vm.closeDialog = closeDialog;
        vm.event = event;
        vm.eventDialog = eventDialog;

        function closeDialog() {
            $mdDialog.hide();
        }
    }
})();
