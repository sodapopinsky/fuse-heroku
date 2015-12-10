(function ()
{
    'use strict';

    angular
        .module('app.components.material-docs')
        .constant('ELEMENTS_NAVIGATION', [
            {
                name      : 'Autocomplete',
                url       : 'autocomplete',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.autocomplete',
                stateName : 'material_components_autocomplete',
                weight    : 1
            },
            {
                name      : 'Checkbox',
                url       : 'checkbox',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.checkbox',
                stateName : 'material_components_checkbox',
                weight    : 2
            },
            {
                name      : 'Chips',
                url       : 'chips',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.chips',
                stateName : 'material_components_chips',
                weight    : 3
            },
            {
                name      : 'Date Picker',
                url       : 'date-picker',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.datepicker',
                stateName : 'material_components_datepicker',
                weight    : 4
            },
            {
                name      : 'Input',
                url       : 'input',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.input',
                stateName : 'material_components_input',
                weight    : 5
            },
            {
                name      : 'Radio Button',
                url       : 'radio-button',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.radioButton',
                stateName : 'material_components_radioButton',
                weight    : 6
            },
            {
                name      : 'Select',
                url       : 'select',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.select',
                stateName : 'material_components_select',
                weight    : 7
            },
            {
                name      : 'Switch',
                url       : 'switch',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.switch',
                stateName : 'material_components_switch',
                weight    : 8
            },
            {
                name      : 'Bottom Sheet',
                url       : 'bottom-sheet',
                navPath   : 'components.elements',
                moduleName: 'material.components.bottomSheet',
                stateName : 'material_components_bottomSheet',
                weight    : 1
            },
            {
                name      : 'Button',
                url       : 'button',
                navPath   : 'components.elements',
                moduleName: 'material.components.button',
                stateName : 'material_components_button',
                weight    : 2
            },
            {
                name      : 'Card',
                url       : 'card',
                navPath   : 'components.elements',
                moduleName: 'material.components.card',
                stateName : 'material_components_card',
                weight    : 3
            },
            {
                name      : 'Content',
                url       : 'content',
                navPath   : 'components.elements',
                moduleName: 'material.components.content',
                stateName : 'material_components_content',
                weight    : 4
            },
            {
                name      : 'Dialog',
                url       : 'dialog',
                navPath   : 'components.elements',
                moduleName: 'material.components.dialog',
                stateName : 'material_components_dialog',
                weight    : 5
            },
            {
                name      : 'Divider',
                url       : 'divider',
                navPath   : 'components.elements',
                moduleName: 'material.components.divider',
                stateName : 'material_components_divider',
                weight    : 6
            },
            {
                name      : 'Fab Actions',
                url       : 'fab-actions',
                navPath   : 'components.elements',
                moduleName: 'material.components.fabActions',
                stateName : 'material_components_fabActions',
                weight    : 7
            },
            {
                name      : 'Fab Speed Dial',
                url       : 'fab-speed-dial',
                navPath   : 'components.elements',
                moduleName: 'material.components.fabSpeedDial',
                stateName : 'material_components_fabSpeedDial',
                weight    : 8
            },
            {
                name      : 'Fab Toolbar',
                url       : 'fab-toolbar',
                navPath   : 'components.elements',
                moduleName: 'material.components.fabToolbar',
                stateName : 'material_components_fabToolbar',
                weight    : 9
            },
            {
                name      : 'Grid List',
                url       : 'grid-list',
                navPath   : 'components.elements',
                moduleName: 'material.components.gridList',
                stateName : 'material_components_gridList',
                weight    : 10
            },
            {
                name       : 'Icon',
                url        : 'icon',
                navPath    : 'components.elements',
                moduleName : 'material.components.icon',
                stateName  : 'material_components_icon',
                excludeDemo: true,
                weight     : 11
            },

            {
                name      : 'List',
                url       : 'list',
                navPath   : 'components.elements',
                moduleName: 'material.components.list',
                stateName : 'material_components_list',
                weight    : 12
            },
            {
                name      : 'Menu',
                url       : 'menu',
                navPath   : 'components.elements',
                moduleName: 'material.components.menu',
                stateName : 'material_components_menu',
                weight    : 13
            },
            {
                name      : 'Menu Bar',
                url       : 'menu-bar',
                navPath   : 'components.elements',
                moduleName: 'material.components.menuBar',
                stateName : 'material_components_menu-bar',
                weight    : 14
            },
            {
                name      : 'Progress Circular',
                url       : 'progress-circular',
                navPath   : 'components.elements',
                moduleName: 'material.components.progressCircular',
                stateName : 'material_components_progressCircular',
                weight    : 15
            },
            {
                name      : 'Progress Linear',
                url       : 'progress-linear',
                navPath   : 'components.elements',
                moduleName: 'material.components.progressLinear',
                stateName : 'material_components_progressLinear',
                weight    : 16
            },
            {
                name      : 'Sidenav',
                url       : 'sidenav',
                navPath   : 'components.elements',
                moduleName: 'material.components.sidenav',
                stateName : 'material_components_sidenav',
                weight    : 17
            },
            {
                name      : 'Slider',
                url       : 'slider',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.slider',
                stateName : 'material_components_slider',
                weight    : 18
            },
            {
                name      : 'Sticky',
                url       : 'sticky',
                navPath   : 'components.elements',
                moduleName: 'material.components.sticky',
                stateName : 'material_components_sticky',
                weight    : 19
            },
            {
                name      : 'Subheader',
                url       : 'subheader',
                navPath   : 'components.elements',
                moduleName: 'material.components.subheader',
                stateName : 'material_components_subheader',
                weight    : 20
            },
            {
                name      : 'Swipe',
                url       : 'swipe',
                navPath   : 'components.elements',
                moduleName: 'material.components.swipe',
                stateName : 'material_components_swipe',
                weight    : 21
            },
            {
                name      : 'Tabs',
                url       : 'tabs',
                navPath   : 'components.elements',
                moduleName: 'material.components.tabs',
                stateName : 'material_components_tabs',
                weight    : 22
            },
            {
                name      : 'Toast',
                url       : 'toast',
                navPath   : 'components.elements',
                moduleName: 'material.components.toast',
                stateName : 'material_components_toast',
                weight    : 23
            },
            {
                name      : 'Toolbar',
                url       : 'toolbar',
                navPath   : 'components.elements',
                moduleName: 'material.components.toolbar',
                stateName : 'material_components_toolbar',
                weight    : 24
            },
            {
                name      : 'Tooltip',
                url       : 'tooltip',
                navPath   : 'components.elements',
                moduleName: 'material.components.tooltip',
                stateName : 'material_components_tooltip',
                weight    : 25
            },
            {
                name      : 'Virtual Repeat',
                url       : 'virtual-repeat',
                navPath   : 'components.elements',
                moduleName: 'material.components.virtualRepeat',
                stateName : 'material_components_virtualRepeat',
                weight    : 26
            },
            {
                name      : 'Ripple',
                url       : 'ripple',
                navPath   : 'components.elements',
                moduleName: 'material.core.ripple',
                stateName : 'material_core_ripple',
                weight    : 27
            },
            {
                name      : 'Util',
                url       : 'util',
                navPath   : 'components.elements',
                moduleName: 'material.core.util',
                stateName : 'material_core_util',
                weight    : 28
            },
            {
                name      : "Whiteframe",
                url       : 'whiteframe',
                navPath   : 'components.elements',
                moduleName: "material.components.whiteframe",
                stateName : 'material_components_whiteframe',
                weight    : 29
            }
        ]);
})();