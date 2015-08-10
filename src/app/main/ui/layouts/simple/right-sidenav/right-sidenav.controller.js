(function ()
{
    'use strict';

    angular.module('app.ui')
        .controller('SimpleRightSidenavController', SimpleRightSidenavController);

    /** @ngInject */
    function SimpleRightSidenavController($mdSidenav)
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
