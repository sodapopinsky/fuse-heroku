(function ()
{
    'use strict';

    angular.module('app.core')
        .controller('ThemeOptionsController', ThemeOptionsController);

    /** @ngInject */
    function ThemeOptionsController($route, fuseTheming, $rootScope)
    {
        var vm = this;

        // Data
        vm.isOpen = false;
        vm.themes = fuseTheming.themes;
        vm.layoutWide = !$rootScope.layoutBoxed;

        // Methods
        vm.setActiveTheme = setActiveTheme;

        //////////

        /**
         * Set active theme
         *
         * @param themeName
         */
        function setActiveTheme(themeName)
        {
            // Set active theme
            fuseTheming.setActiveTheme(themeName);

            // Reload route to make sure changes are going to apply
            $route.reload();
        }
    }
})();