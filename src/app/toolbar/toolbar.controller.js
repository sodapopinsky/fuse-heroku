(function ()
{
    'use strict';

    angular.module('app.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($mdSidenav, msNavFoldService)
    {
        var vm = this;

        // Data

        // Methods
        vm.toggleSidenav = toggleSidenav;
        vm.toggleNavigationSidenavMode = toggleNavigationSidenavMode;

        //////////

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
         * Toggle navigation sidenav mode
         */
        function toggleNavigationSidenavMode()
        {
            msNavFoldService.toggleFold();
        }
    }

})();


