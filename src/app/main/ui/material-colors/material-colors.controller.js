(function ()
{
    'use strict';

    angular.module('app.ui.material-colors')
        .controller('MaterialColorsController', MaterialColorsController);

    /** @ngInject */
    function MaterialColorsController($mdDialog, $document, $mdColorPalette)
    {
        var vm = this;
        // Data
        vm.palettes = $mdColorPalette;
        console.log(vm.palettes);

        // Methods
        vm.createTheme = createTheme;
        //////////

        function createTheme(ev)
        {
            $mdDialog.show({
                controller         : 'CustomThemeDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/ui/colors/dialogs/custom-theme/custom-theme-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true
            });
        }

    }
})();


