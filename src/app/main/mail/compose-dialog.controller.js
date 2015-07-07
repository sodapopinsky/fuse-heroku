(function () {
    'use strict';

    angular.module('app.mail')
        .controller('composeDialogController', composeDialogController);

    /** @ngInject */
    function composeDialogController(api, $mdDialog) {
        var vm = this;
        vm.closeDialog = closeDialog;
        vm.form = {
            from: 'sercanyemen@creapond.com'
        };
        function closeDialog() {
            $mdDialog.hide();
        }
    }
})();
