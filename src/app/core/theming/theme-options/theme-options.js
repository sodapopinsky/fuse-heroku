(function ()
{
    'use strict';

    angular
        .module('app.core')
        .controller('ThemeOptionsController', ThemeOptionsController);

    /** @ngInject */
    function ThemeOptionsController(fuseTheming)
    {
        var vm = this;

        // Data
        vm.panelOpen = false;
        vm.themes = fuseTheming.themes;
        vm.layoutMode = 'wide';
        vm.animateIcon = true;

        // Methods
        vm.toggleOptionsPanel = toggleOptionsPanel;
        vm.setActiveTheme = setActiveTheme;
        vm.updateLayoutMode = updateLayoutMode;

        //////////

        /**
         * Toggle options panel
         */
        function toggleOptionsPanel()
        {
            // Disable animation of the icon with the first user interaction
            if ( vm.animateIcon )
            {
                angular.element('#theme-options-panel-button > md-icon').removeClass('animate-rotate');
                vm.animateIcon = false;
            }

            vm.panelOpen = !vm.panelOpen;
        }

        /**
         * Set active theme
         *
         * @param themeName
         */
        function setActiveTheme(themeName)
        {
            // Set active theme
            fuseTheming.setActiveTheme(themeName);
        }

        /**
         * Update layout mode
         */
        function updateLayoutMode()
        {
            var bodyEl = angular.element('body');

            // Update class on body element
            bodyEl.toggleClass('boxed', (vm.layoutMode === 'boxed'));
        }
    }
})();