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
                stateName : 'material_components_autocomplete'
            },
            {
                name      : 'Bottom Sheet',
                url       : 'bottom-sheet',
                navPath   : 'components.elements',
                moduleName: 'material.components.bottomSheet',
                stateName : 'material_components_bottomSheet'
            },
            {
                name      : 'Button',
                url       : 'button',
                navPath   : 'components.elements',
                moduleName: 'material.components.button',
                stateName : 'material_components_button'
            },
            {
                name      : 'Card',
                url       : 'card',
                navPath   : 'components.elements',
                moduleName: 'material.components.card',
                stateName : 'material_components_card'
            },
            {
                name      : 'Checkbox',
                url       : 'checkbox',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.checkbox',
                stateName : 'material_components_checkbox'
            },
            {
                name      : 'Chips',
                url       : 'chips',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.chips',
                stateName : 'material_components_chips'
            },
            {
                name      : 'Content',
                url       : 'content',
                navPath   : 'components.elements',
                moduleName: 'material.components.content',
                stateName : 'material_components_content'
            },
            {
                name      : 'Date Picker',
                url       : 'date-picker',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.datepicker',
                stateName : 'material_components_datepicker'
            },
            {
                name      : 'Dialog',
                url       : 'dialog',
                navPath   : 'components.elements',
                moduleName: 'material.components.dialog',
                stateName : 'material_components_dialog'
            },
            {
                name      : 'Divider',
                url       : 'divider',
                navPath   : 'components.elements',
                moduleName: 'material.components.divider',
                stateName : 'material_components_divider'
            },
            {
                name      : 'Fab Actions',
                url       : 'fab-actions',
                navPath   : 'components.elements',
                moduleName: 'material.components.fabActions',
                stateName : 'material_components_fabActions'
            },
            {
                name      : 'Fab Speed Dial',
                url       : 'fab-speed-dial',
                navPath   : 'components.elements',
                moduleName: 'material.components.fabSpeedDial',
                stateName : 'material_components_fabSpeedDial'
            },
            {
                name      : 'Fab Toolbar',
                url       : 'fab-toolbar',
                navPath   : 'components.elements',
                moduleName: 'material.components.fabToolbar',
                stateName : 'material_components_fabToolbar'
            },
            {
                name      : 'Grid List',
                url       : 'grid-list',
                navPath   : 'components.elements',
                moduleName: 'material.components.gridList',
                stateName : 'material_components_gridList'
            },
            {
                name      : 'Icon',
                url       : 'icon',
                navPath   : 'components.elements',
                moduleName: 'material.components.icon',
                stateName : 'material_components_icon',
                excludeDemo: true
            },
            {
                name      : 'Input',
                url       : 'input',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.input',
                stateName : 'material_components_input'
            },
            {
                name      : 'List',
                url       : 'list',
                navPath   : 'components.elements',
                moduleName: 'material.components.list',
                stateName : 'material_components_list'
            },
            {
                name      : 'Menu',
                url       : 'menu',
                navPath   : 'components.elements',
                moduleName: 'material.components.menu',
                stateName : 'material_components_menu'
            },
            {
                name      : 'Menu Bar',
                url       : 'menu-bar',
                navPath   : 'components.elements',
                moduleName: 'material.components.menuBar',
                stateName : 'material_components_menu-bar'
            },
            {
                name      : 'Progress Circular',
                url       : 'progress-circular',
                navPath   : 'components.elements',
                moduleName: 'material.components.progressCircular',
                stateName : 'material_components_progressCircular'
            },
            {
                name      : 'Progress Linear',
                url       : 'progress-linear',
                navPath   : 'components.elements',
                moduleName: 'material.components.progressLinear',
                stateName : 'material_components_progressLinear'
            },
            {
                name      : 'Radio Button',
                url       : 'radio-button',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.radioButton',
                stateName : 'material_components_radioButton'
            },
            {
                name      : 'Select',
                url       : 'select',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.select',
                stateName : 'material_components_select'
            },
            {
                name      : 'Sidenav',
                url       : 'sidenav',
                navPath   : 'components.elements',
                moduleName: 'material.components.sidenav',
                stateName : 'material_components_sidenav'
            },
            {
                name      : 'Slider',
                url       : 'slider',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.slider',
                stateName : 'material_components_slider'
            },
            {
                name      : 'Sticky',
                url       : 'sticky',
                navPath   : 'components.elements',
                moduleName: 'material.components.sticky',
                stateName : 'material_components_sticky'
            },
            {
                name      : 'Subheader',
                url       : 'subheader',
                navPath   : 'components.elements',
                moduleName: 'material.components.subheader',
                stateName : 'material_components_subheader'
            },
            {
                name      : 'Swipe',
                url       : 'swipe',
                navPath   : 'components.elements',
                moduleName: 'material.components.swipe',
                stateName : 'material_components_swipe'
            },
            {
                name      : 'Switch',
                url       : 'switch',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.switch',
                stateName : 'material_components_switch'
            },
            {
                name      : 'Tabs',
                url       : 'tabs',
                navPath   : 'components.elements',
                moduleName: 'material.components.tabs',
                stateName : 'material_components_tabs'
            },
            {
                name      : 'Toast',
                url       : 'toast',
                navPath   : 'components.elements',
                moduleName: 'material.components.toast',
                stateName : 'material_components_toast'
            },
            {
                name      : 'Toolbar',
                url       : 'toolbar',
                navPath   : 'components.elements',
                moduleName: 'material.components.toolbar',
                stateName : 'material_components_toolbar'
            },
            {
                name      : 'Tooltip',
                url       : 'tooltip',
                navPath   : 'components.elements',
                moduleName: 'material.components.tooltip',
                stateName : 'material_components_tooltip'
            },
            {
                name      : 'Virtual Repeat',
                url       : 'virtual-repeat',
                navPath   : 'components.elements',
                moduleName: 'material.components.virtualRepeat',
                stateName : 'material_components_virtualRepeat'
            },
            {
                name      : 'Ripple',
                url       : 'ripple',
                navPath   : 'components.elements',
                moduleName: 'material.core.ripple',
                stateName : 'material_core_ripple'
            },
            {
                name      : 'Util',
                url       : 'util',
                navPath   : 'components.elements',
                moduleName: 'material.core.util',
                stateName : 'material_core_util'
            },
            {
                "name"      : "Whiteframe",
                url         : 'whiteframe',
                navPath     : 'components.elements',
                "moduleName": "material.components.whiteframe",
                stateName   : 'material_components_whiteframe'
            }
        ]);
})();