(function ()
{
    'use strict';

    angular
        .module('app.navigation-classic')
        .controller('NavigationClassicController', NavigationClassicController);

    /** @ngInject */
    function NavigationClassicController(msNavFoldService)
    {
        var vm = this;

        // Data
        vm.msScrollOptions = {
            suppressScrollX: true
        };

        // Methods
        vm.toggleMsNavFold = toggleMsNavFold;

        //////////

        /**
         * Toggle ms-nav
         */
        function toggleMsNavFold()
        {
            msNavFoldService.toggleFold();
        }
    }

})();