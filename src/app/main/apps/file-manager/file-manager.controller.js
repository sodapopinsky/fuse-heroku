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
        vm.currentView = 'list';
        vm.showDetails = true;

        api.fileManager.documents.get({}, function (response)
        {
            vm.folders = response.data.folders;
            vm.files = response.data.files;
            vm.selected = vm.files[0];
        });

        // Methods
        vm.select = select;
        vm.toggleDetails = toggleDetails;
        vm.toggleSidenav = toggleSidenav;
        vm.toggleView = toggleView;

        //////////

        /**
         * Select file
         *
         * @param file
         */
        function select(file)
        {
            vm.selected = file;
        }

        /**
         * Toggle details
         */
        function toggleDetails()
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

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }

        /**
         * Toggle view
         */
        function toggleView()
        {
            vm.currentView = vm.currentView === 'list' ? 'grid' : 'list';
        }
    }
})();