(function ()
{
    'use strict';

    angular.module('app.gantt-chart')
        .controller('RowDialogController', RowDialogController);

    /** @ngInject */
    function RowDialogController($mdDialog, row, data)
    {
        var vm = this;

        // Data
        vm.title = 'Edit Row Item';
        vm.row = row;

        if ( !vm.row )
        {
            vm.row = {};
            vm.title = 'Add New Row';
            vm.row.tags = [];
        }

        // Methods
        vm.closeDialog = closeDialog;
        vm.newTag = newTag;
        vm.save = save;
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

        function save()
        {
            var newRow =
            {
                'name' : 'Status meetings',
                'tasks': []
            };
            data.unshift(newRow);
            closeDialog();
        }
    }
})();