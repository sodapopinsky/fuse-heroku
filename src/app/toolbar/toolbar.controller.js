(function ()
{
    'use strict';

    angular.module('app.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($mdSidenav)
    {
        var vm = this;

        // Data

        // Methods
        vm.notifySideNavToggle = notifySideNavToggle;

        //////////

        function notifySideNavToggle()
        {
            $mdSidenav('quick-panel').toggle();
        }
    }

})();


