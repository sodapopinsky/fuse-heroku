(function ()
{
    'use strict';

    angular.module('app.mail')
        .controller('ComposeDialogController', ComposeDialogController);

    /** @ngInject */
    function ComposeDialogController($mdDialog, selectedMail)
    {
        var vm = this;

        // Data
        vm.form = {
            from: 'johndoe@creapond.com'
        };

        // If replying
        if ( angular.isDefined(selectedMail) )
        {
            vm.form.to = selectedMail.from.email;
            vm.form.subject = selectedMail.subject;
            vm.form.message = selectedMail.message;
        }

        // Methods
        vm.closeDialog = closeDialog;

        //////////

        function closeDialog()
        {
            $mdDialog.hide();
        }
    }
})();
