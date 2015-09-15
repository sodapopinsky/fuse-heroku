(function ()
{
    'use strict';

    angular.module('app.todo')
        .controller('TaskDialogController', TaskDialogController);

    /** @ngInject */
    function TaskDialogController($mdDialog, task)
    {
        var vm = this;

        // Data
        vm.title = 'Edit Task';
        vm.task = task;

        if ( !vm.task )
        {
            vm.task = {};
            vm.title = 'New Task';
            vm.task.tags = [];
        }

        vm.tinymceOptions = {
            resize : true,
            menubar: false,
            statusbar: true,
            min_height: 200,
            content_css: '/app/core/global-scss/partials/plugins/tinymce-content.css',
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste',
                'textcolor colorpicker'
            ],
            toolbar: 'fontselect | fontsizeselect | bold italic underline | blockquote | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | undo redo '
        };

        // Methods
        vm.closeDialog = closeDialog;
        vm.newTag = newTag;
        //////////

        function closeDialog()
        {
            $mdDialog.hide();
        }

        function newTag(chip)
        {
            var tagColors = ['#388E3C', '#F44336', '#FF9800', '#0091EA'];

            return {
                title: chip,
                color: tagColors[Math.floor(Math.random() * (tagColors.length))]
            };
        }
    }
})();