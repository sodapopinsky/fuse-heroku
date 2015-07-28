(function ()
{
    'use strict';

    angular
        .module('fuse')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $timeout, msNavService)
    {
        $rootScope.$on('$stateChangeStart', function ()
        {
            $rootScope.loadingProgress = true;
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams)
        {
            // Update navigation toggle
            msNavService.updateToggleables();

            $timeout(function ()
            {
                $rootScope.loadingProgress = false;
            });
        });
    }
})();