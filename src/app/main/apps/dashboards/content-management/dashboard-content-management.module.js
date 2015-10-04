(function ()
{
    'use strict';

    angular
        .module('app.dashboard-content-management', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.dashboard-content-management', {
            url  : '/dashboard-content-management',
            views: {
                'content@app': {
                    templateUrl: 'app/main/apps/dashboards/content-management/dashboard-content-management.html',
                    controller : 'DashboardContentManagementController as vm'
                }
            }
        });
    }

})();