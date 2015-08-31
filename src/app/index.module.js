(function ()
{
    'use strict';

    /**
     * @ngdoc overview
     * @name fuse
     * @description
     * # fuse
     *
     * Main module of the application.
     */
    angular
        .module('fuse', [
            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',

            // Apps
            'app.dashboard',
            'app.calendar',
            'app.mail',
            'app.file-manager',
            'app.todo',

            // Pages
            'app.pages.auth.login',
            'app.pages.auth.register',
            'app.pages.auth.forgot-password',
            'app.pages.auth.lock',
            'app.pages.coming-soon',
            'app.pages.error-404',
            'app.pages.error-500',
            'app.pages.invoice',
            'app.pages.maintenance',
            'app.pages.profile',
            'app.pages.search',
            'app.pages.timeline',

            // User Interface
            'app.ui.colors',
            'app.ui.icons',
            'app.ui.layouts.blank',
            'app.ui.layouts.carded.fullwidth',
            'app.ui.layouts.carded.fullwidth-ii',
            'app.ui.layouts.carded.left-sidenav',
            'app.ui.layouts.carded.left-sidenav-ii',
            'app.ui.layouts.carded.right-sidenav',
            'app.ui.layouts.carded.right-sidenav-ii',
            'app.ui.layouts.simple.fullwidth',
            'app.ui.layouts.simple.left-sidenav',
            'app.ui.layouts.simple.left-sidenav-ii',
            'app.ui.layouts.simple.right-sidenav',
            'app.ui.layouts.simple.right-sidenav-ii',
            'app.ui.layouts.simple.tabbed',
            'app.ui.typography',

            // Components
            'app.components'
        ]);
})();