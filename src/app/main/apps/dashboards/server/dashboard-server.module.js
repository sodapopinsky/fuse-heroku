(function ()
{
    'use strict';

    angular
        .module('app.dashboard-server', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.dashboard-server', {
            url  : '/dashboard-server',
            views: {
                'content@app': {
                    templateUrl: 'app/main/apps/dashboards/server/dashboard-server.html',
                    controller : 'DashboardServerController as vm'
                }
            }
        });
    }

})();