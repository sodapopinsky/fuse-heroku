(function ()
{
    'use strict';

    angular
        .module('app.dashboard', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.dashboard', {
            url  : '/dashboard',
            views: {
                'content@app': {
                    templateUrl: 'app/main/apps/dashboard/dashboard.html',
                    controller : 'DashboardController as vm'
                }
            }
        });
    }

})();