(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('ColorMenuController', ColorMenuController);

    /** @ngInject */
    function ColorMenuController(Board, $mdColorPalette)
    {
        var vm = this;

        // Data
        vm.board = Board.data;
        vm.palettes = $mdColorPalette;

        // Methods

        ////////

    }
})();