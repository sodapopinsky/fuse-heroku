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

        vm.hiddenCC = true;
        vm.hiddenBCC = true;

        vm.tinymceOptions = {
            resize : true,
            menubar: false,
            statusbar: true,
            min_height: 200,
            content_css: '/app/core/global-scss/partials/plugins/tinymce-content.css',
            toolbar: 'fontselect | fontsizeselect | bold italic underline | blockquote | alignleft aligncenter alignright alignjustify | undo redo'
        };

        // If replying
        if ( angular.isDefined(selectedMail) )
        {
            vm.form.to = selectedMail.from.email;
            vm.form.subject = 'RE: ' + selectedMail.subject;
            vm.form.message = '<blockquote>' + selectedMail.message + '</blockquote>';
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
