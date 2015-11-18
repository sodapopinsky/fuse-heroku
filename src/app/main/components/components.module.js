(function ()
{
    'use strict';

    angular
        .module('app.components', [
            'app.components.cards',
            'app.components.charts.c3',
            'app.components.charts.chartist',
            'app.components.charts.chart-js',
            'app.components.charts.nvd3',
            'app.components.elements.bottom-sheet',
            'app.components.elements.buttons',
            'app.components.elements.card',
            'app.components.elements.datepicker',
            'app.components.elements.dialog',
            'app.components.elements.fab-speed-dial',
            'app.components.elements.fab-toolbar',
            'app.components.elements.inputs.autocomplete',
            'app.components.elements.inputs.checkbox',
            'app.components.elements.inputs.chips',
            'app.components.elements.inputs.fields',
            'app.components.elements.inputs.radio',
            'app.components.elements.inputs.select',
            'app.components.elements.inputs.slider',
            'app.components.elements.inputs.switch',
            'app.components.elements.menu',
            'app.components.elements.menu-bar',
            'app.components.elements.progress-circular',
            'app.components.elements.progress-linear',
            'app.components.elements.sidenav',
            'app.components.elements.swipe',
            'app.components.elements.tabs',
            'app.components.elements.toast',
            'app.components.elements.whiteframe',
            'app.components.maps',
            'app.components.price-tables',
            'app.components.tables.simple-table',
            'app.components.tables.datatable',
            'app.components.widgets'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationFactoryProvider)
    {
        // COMPONENTS navigation definitions
        msNavigationFactoryProvider.saveItem('components', {
            title : 'COMPONENTS',
            group : true,
            weight: 3
        });

        msNavigationFactoryProvider.saveItem('components.cards', {
            title : 'Cards',
            icon  : 'icon-content-copy',
            state : 'app.components_cards'
        });

        msNavigationFactoryProvider.saveItem('components.charts', {
            title: 'Charts',
            icon : 'icon-poll'
        });

        msNavigationFactoryProvider.saveItem('components.charts.c3', {
            title: 'C3',
            state: 'app.components_charts_c3'
        });

        msNavigationFactoryProvider.saveItem('components.charts.chart-js', {
            title: 'Chart.js',
            state: 'app.components_charts_chart-js'
        });

        msNavigationFactoryProvider.saveItem('components.charts.chartist', {
            title: 'Chartist',
            state: 'app.components_charts_chartist'
        });

        msNavigationFactoryProvider.saveItem('components.charts.nvd3', {
            title: 'nvD3',
            state: 'app.components_charts_nvd3'
        });

        msNavigationFactoryProvider.saveItem('components.elements', {
            title: 'Elements',
            icon : 'icon-layers'
        });

        msNavigationFactoryProvider.saveItem('components.elements.inputs', {
            title : 'Inputs',
            weight: 0
        });

        msNavigationFactoryProvider.saveItem('components.elements.inputs.autocomplete', {
            title: 'Autocomplete',
            state: 'app.components_elements_inputs_autocomplete'
        });

        msNavigationFactoryProvider.saveItem('components.elements.inputs.checkbox', {
            title: 'Checkbox',
            state: 'app.components_elements_inputs_checkbox'
        });

        msNavigationFactoryProvider.saveItem('components.elements.inputs.chips', {
            title: 'Chips',
            state: 'app.components_elements_inputs_chips'
        });

        msNavigationFactoryProvider.saveItem('components.elements.inputs.fields', {
            title: 'Fields',
            state: 'app.components_elements_inputs_fields'
        });

        msNavigationFactoryProvider.saveItem('components.elements.inputs.radio', {
            title: 'Radio',
            state: 'app.components_elements_inputs_radio'
        });

        msNavigationFactoryProvider.saveItem('components.elements.inputs.select', {
            title: 'Select',
            state: 'app.components_elements_inputs_select'
        });

        msNavigationFactoryProvider.saveItem('components.elements.inputs.slider', {
            title: 'Slider',
            state: 'app.components_elements_inputs_slider'
        });

        msNavigationFactoryProvider.saveItem('components.elements.inputs.switch', {
            title: 'Switch',
            state: 'app.components_elements_inputs_switch'
        });

        msNavigationFactoryProvider.saveItem('components.elements.bottom-sheet', {
            title : 'Bottom Sheet',
            state : 'app.components_elements_bottom-sheet',
            weight: 1
        });

        msNavigationFactoryProvider.saveItem('components.elements.card', {
            title : 'Card',
            state : 'app.components_elements_card',
            weight: 2
        });

        msNavigationFactoryProvider.saveItem('components.elements.datepicker', {
            title : 'Datepicker',
            state : 'app.components_elements_datepicker',
            weight: 3
        });

        msNavigationFactoryProvider.saveItem('components.elements.dialog', {
            title : 'Dialog',
            state : 'app.components_elements_dialog',
            weight: 4
        });

        msNavigationFactoryProvider.saveItem('components.elements.fab-speed-dial', {
            title : 'Fab Speed Dial',
            state : 'app.components_elements_fab-speed-dial',
            weight: 5
        });

        msNavigationFactoryProvider.saveItem('components.elements.fab-toolbar', {
            title : 'Fab Toolbar',
            state : 'app.components_elements_fab-toolbar',
            weight: 6
        });

        msNavigationFactoryProvider.saveItem('components.elements.menu', {
            title : 'Menu',
            state : 'app.components_elements_menu',
            weight: 7
        });

        msNavigationFactoryProvider.saveItem('components.elements.menu-bar', {
            title : 'Menu Bar',
            state : 'app.components_elements_menu-bar',
            weight: 8
        });

        msNavigationFactoryProvider.saveItem('components.elements.progress-circular', {
            title : 'Progress Circular',
            state : 'app.components_elements_progress-circular',
            weight: 9
        });

        msNavigationFactoryProvider.saveItem('components.elements.progress-linear', {
            title : 'Progress Linear',
            state : 'app.components_elements_progress-linear',
            weight: 10
        });

        msNavigationFactoryProvider.saveItem('components.elements.sidenav', {
            title : 'Sidenav',
            state : 'app.components_elements_sidenav',
            weight: 11
        });

        msNavigationFactoryProvider.saveItem('components.elements.tabs', {
            title : 'Tabs',
            state : 'app.components_elements_tabs',
            weight: 12
        });

        msNavigationFactoryProvider.saveItem('components.elements.toast', {
            title : 'Toast',
            state : 'app.components_elements_toast',
            weight: 13
        });

        msNavigationFactoryProvider.saveItem('components.elements.whiteframe', {
            title : 'Whiteframe',
            state : 'app.components_elements_whiteframe',
            weight: 14
        });

        msNavigationFactoryProvider.saveItem('components.maps', {
            title: 'Maps',
            icon : 'icon-map-marker',
            state: 'app.components_maps'
        });

        msNavigationFactoryProvider.saveItem('components.price-tables', {
            title: 'Price Tables',
            icon : 'icon-view-carousel',
            state: 'app.components_price-tables'
        });

        msNavigationFactoryProvider.saveItem('components.tables', {
            title: 'Tables',
            icon : 'icon-table-large'
        });

        msNavigationFactoryProvider.saveItem('components.tables.simple-table', {
            title: 'Simple Table',
            state: 'app.components_tables_simple-table'
        });

        msNavigationFactoryProvider.saveItem('components.tables.datatable', {
            title: 'Datatable',
            state: 'app.components_tables_datatable'
        });

        msNavigationFactoryProvider.saveItem('components.widgets', {
            title: 'Widgets',
            icon : 'icon-apps',
            state: 'app.components_widgets'
        });
    }
})();