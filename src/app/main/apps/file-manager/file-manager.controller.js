(function ()
{
    'use strict';

    angular.module('app.file-manager')
        .controller('FileManagerController', FileManagerController);

    /** @ngInject */
    function FileManagerController(api, $mdSidenav)
    {
        var vm = this;

        // Data
        vm.accounts = {
            'creapond'    : 'johndoe@creapond.com',
            'withinpixels': 'johndoe@withinpixels.com'
        };
        vm.selectedAccount = 'creapond';
        vm.selectedView = 'list';
        vm.showDetails = true;

        api.fileManager.documents.get({}, function (response)
        {
            vm.documents = response.data;
            vm.selected = vm.documents[0];
        });

        // Methods
        vm.detailsToggle = detailsToggle;
        vm.select = select;
        vm.sideNavToggle = sideNavToggle;
        vm.toggleView = toggleView;
        vm.viewTemplate = viewTemplate;

        //////////

        function select(file)
        {
            vm.selected = file;

            if ( vm.showDetails )
            {
                $mdSidenav('fileManager-details-sidenav').open();
            }
            else
            {
                $mdSidenav('fileManager-details-sidenav').close();
            }
        }

        function sideNavToggle()
        {
            $mdSidenav('fileManager-main-sidenav').toggle();
        }

        function detailsToggle()
        {
            vm.showDetails = !vm.showDetails;

            if ( vm.showDetails )
            {
                $mdSidenav('fileManager-details-sidenav').open();
            }
            else
            {
                $mdSidenav('fileManager-details-sidenav').close();
            }
        }

        function toggleView()
        {
            vm.selectedView = vm.selectedView === 'list' ? 'grid' : 'list';
        }

        function viewTemplate()
        {
            return vm.selectedView === 'list' ? 'app/main/apps/file-manager/views/list-view.html' : 'app/main/apps/file-manager/views/grid-view.html';
        }
    }
})();
