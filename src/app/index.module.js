(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',
            //'app.navigation-classic', // Enable this one if you want to use classic (pre 1.2.0) navigation version

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',

            // Apps
            'app.dashboards',
            'app.calendar',
            'app.mail',
            'app.file-manager',
            'app.todo',

            // Pages
            'app.pages',

            // User Interface
            'app.ui',

            // Components
            'app.components'
        ]);
})();