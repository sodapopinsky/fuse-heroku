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
        //console.log(vm.palettes);

        // Methods

        //////////



    }
})();


