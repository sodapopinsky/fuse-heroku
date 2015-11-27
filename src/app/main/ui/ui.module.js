(function ()
{
    'use strict';

    angular
        .module('app.ui', [
            'app.ui.forms',
            'app.ui.icons',
            'app.ui.material-colors',
            'app.ui.page-layouts.blank',
            'app.ui.page-layouts.carded.fullwidth',
            'app.ui.page-layouts.carded.fullwidth-ii',
            'app.ui.page-layouts.carded.left-sidenav',
            'app.ui.page-layouts.carded.left-sidenav-ii',
            'app.ui.page-layouts.carded.right-sidenav',
            'app.ui.page-layouts.carded.right-sidenav-ii',
            'app.ui.page-layouts.simple.fullwidth',
            'app.ui.page-layouts.simple.left-sidenav',
            'app.ui.page-layouts.simple.left-sidenav-ii',
            'app.ui.page-layouts.simple.right-sidenav',
            'app.ui.page-layouts.simple.right-sidenav-ii',
            'app.ui.page-layouts.simple.tabbed',
            'app.ui.theme-colors',
            'app.ui.typography'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationFactoryProvider)
    {
        // Navigation
        msNavigationFactoryProvider.saveItem('ui', {
            title : 'USER INTERFACE',
            group : true,
            weight: 3
        });

        msNavigationFactoryProvider.saveItem('ui.forms', {
            title: 'Forms',
            icon : 'icon-window-restore',
            state: 'app.ui_forms'
        });

        msNavigationFactoryProvider.saveItem('ui.icons', {
            title: 'Icons',
            icon : 'icon-file-image-box',
            state: 'app.ui_icons'
        });

        msNavigationFactoryProvider.saveItem('ui.typography', {
            title: 'Typography',
            icon : 'icon-format-size',
            state: 'app.ui_typography'
        });

        msNavigationFactoryProvider.saveItem('ui.theme-colors', {
            title: 'Theme Colors',
            icon : 'icon-palette-advanced',
            state: 'app.ui_theme-colors'
        });

        msNavigationFactoryProvider.saveItem('ui.material-colors', {
            title: 'Material Colors',
            icon : 'icon-palette',
            state: 'app.ui_material-colors'
        });


        msNavigationFactoryProvider.saveItem('ui.page-layouts', {
            title: 'Page Layouts',
            icon : 'icon-view-quilt'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.carded', {
            title: 'Carded'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.carded.fullwidth', {
            title: 'Full Width (I)',
            state: 'app.ui_page-layouts_carded_fullwidth'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.carded.fullwidth-ii', {
            title: 'Full Width (II)',
            state: 'app.ui_page-layouts_carded_fullwidth-ii'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.carded.left-sidenav', {
            title: 'Left Sidenav (I)',
            state: 'app.ui_page-layouts_carded_left-sidenav'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.carded.left-sidenav-ii', {
            title: 'Left Sidenav (II)',
            state: 'app.ui_page-layouts_carded_left-sidenav-ii'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.carded.right-sidenav', {
            title: 'Right Sidenav (I)',
            state: 'app.ui_page-layouts_carded_right-sidenav'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.carded.right-sidenav-ii', {
            title: 'Right Sidenav (II)',
            state: 'app.ui_page-layouts_carded_right-sidenav-ii'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.simple', {
            title: 'Simple'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.simple.fullwidth', {
            title: 'Full Width (I)',
            state: 'app.ui_page-layouts_simple_fullwidth'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.simple.left-sidenav', {
            title: 'Left Sidenav (I)',
            state: 'app.ui_page-layouts_simple_left-sidenav'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.simple.left-sidenav-ii', {
            title: 'Left Sidenav (II)',
            state: 'app.ui_page-layouts_simple_left-sidenav-ii'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.simple.right-sidenav', {
            title: 'Right Sidenav (I)',
            state: 'app.ui_page-layouts_simple_right-sidenav'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.simple.right-sidenav-ii', {
            title: 'Right Sidenav (II)',
            state: 'app.ui_page-layouts_simple_right-sidenav-ii'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.simple.tabbed', {
            title: 'Tabbed',
            state: 'app.ui_page-layouts_simple_tabbed'
        });

        msNavigationFactoryProvider.saveItem('ui.page-layouts.blank', {
            title: 'Blank',
            state: 'app.ui_page-layouts_blank'
        });
    }
})();