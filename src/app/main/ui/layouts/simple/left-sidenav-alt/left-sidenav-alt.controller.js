(function ()
{
    'use strict';

    angular.module('app.ui')
        .controller('SimpleLeftSidenavAltController', SimpleLeftSidenavAltController);

    /** @ngInject */
    function SimpleLeftSidenavAltController($mdSidenav)
    {
        var vm = this;

        // Data

        // Methods
        vm.toggleSidenav = toggleSidenav;

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
    }
})();
