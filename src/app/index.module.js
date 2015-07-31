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
            //'app.ui.typography',
            'app.ui.colors',
            'app.ui.icons',
            //'app.ui.layouts',

            // Components
            'app.components.elements.inputs.autocomplete',
            'app.components.elements.inputs.checkbox',
            'app.components.elements.inputs.chips',
            'app.components.elements.inputs.fields',
            'app.components.elements.inputs.radio',
            'app.components.elements.inputs.select',
            'app.components.elements.inputs.slider',
            'app.components.elements.inputs.switch',
            'app.components.elements.bottom-sheet',
            'app.components.elements.buttons',
            'app.components.elements.card',
            'app.components.elements.dialog',
            'app.components.elements.progress-circular',
            'app.components.elements.progress-linear',
            'app.components.tables.standard',
            //'app.components.tables.datatables',
            'app.components.price-tables',
        ]);
})();
