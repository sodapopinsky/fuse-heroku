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
        msNavigationFactoryProvider.saveItem('fuse', {
            title: 'FUSE',
            group: true
        });

        msNavigationFactoryProvider.saveItem('fuse.dashboard', {
            title : 'Dashboard',
            icon  : 'icon-tile-four',
            weight: 1
        });

        msNavigationFactoryProvider.saveItem('fuse.dashboard.project', {
            title    : 'Project',
            state    : 'app.dashboards_project'
        });

        msNavigationFactoryProvider.saveItem('fuse.dashboard.server', {
            title: 'Server',
            state: 'app.dashboards_server'
        });

        msNavigationFactoryProvider.saveItem('fuse.dashboard.analytics', {
            title: 'Analytics',
            state: 'app.dashboards_analytics'
        });
    }

})();