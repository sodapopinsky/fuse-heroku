(function ()
{
    'use strict';

    angular.module('fuse')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($mdSidenav)
    {
        var vm = this;
        vm.notifySideNavToggle = notifySideNavToggle;

        function notifySideNavToggle()
        {
            $mdSidenav('quick-panel').toggle();
        }
    }

})();


