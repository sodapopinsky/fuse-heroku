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
            //'app.commerce',
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
            'app.pages.profile',
            //'app.pages.search',
            'app.pages.timeline',

            // User Interface
            'app.ui',

            // Components
            'app.components'
        ]);
})();
