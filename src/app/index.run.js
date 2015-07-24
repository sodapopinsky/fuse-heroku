(function ()
{
    'use strict';

    angular
        .module('fuse')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, msNavService)
    {

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams)
        {
            // Update navigation toggle
            msNavService.updateToggleables();
        });
    }

})();
