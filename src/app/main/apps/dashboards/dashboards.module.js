(function ()
{
    'use strict';

    angular
        .module('app.dashboards', [
            'app.dashboards.project',
            'app.dashboards.server',
            'app.dashboards.analytics'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationFactoryProvider)
    {
        // Navigation
        msNavigationFactoryProvider.saveItem('apps', {
            title : 'APPS',
            group : true,
            weight: 1
        });

        msNavigationFactoryProvider.saveItem('apps.dashboards', {
            title : 'Dashboards',
            icon  : 'icon-tile-four',
            weight: 1
        });

        msNavigationFactoryProvider.saveItem('apps.dashboards.project', {
            title: 'Project',
            state: 'app.dashboards_project'
        });

        msNavigationFactoryProvider.saveItem('apps.dashboards.server', {
            title: 'Server',
            state: 'app.dashboards_server'
        });

        msNavigationFactoryProvider.saveItem('apps.dashboards.analytics', {
            title: 'Analytics',
            state: 'app.dashboards_analytics'
        });
    }

})();