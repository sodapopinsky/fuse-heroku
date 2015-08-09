(function ()
{
    'use strict';

    angular.module('app.ui')
        .controller('CardedRightpaneController', CardedRightpaneController);

    /** @ngInject */
    function CardedRightpaneController($mdSidenav)
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
