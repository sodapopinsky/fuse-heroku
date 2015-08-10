(function ()
{
    'use strict';

    angular.module('app.file-manager')
        .controller('FileManagerController', FileManagerController);

    /** @ngInject */
    function FileManagerController(api, $mdSidenav, $mdMedia)
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
        vm.detailsSidenavVisibility = detailsSidenavVisibility;

        //////////

        /**
         * Select an item
         *
         * @param item
         */
        function select(item)
        {
            vm.selected = item;
        }

        /**
         * Toggle details
         *
         * @param item
         */
        function toggleDetails(item)
        {
            vm.selected = item;
            toggleSidenav('details-sidenav');
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

        function detailsSidenavVisibility()
        {
            return vm.showDetails && $mdMedia('gt-md');
        }
    }
})();