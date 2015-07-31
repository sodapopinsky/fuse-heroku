(function ()
{
    'use strict';

    angular.module('app.mail')
        .controller('ComposeDialogController', ComposeDialogController);

    /** @ngInject */
    function ComposeDialogController($mdDialog)
    {
        var vm = this;

        // Data
        vm.form = {
            from: 'johndoe@creapond.com'
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
