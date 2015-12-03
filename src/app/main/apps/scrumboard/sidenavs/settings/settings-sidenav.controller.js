(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('SettingsSidenavController', SettingsSidenavController);

    /** @ngInject */
    function SettingsSidenavController(Board, $mdColorPalette)
    {
        var vm = this;

        // Data
        vm.board = Board.data;
        vm.palettes = $mdColorPalette;
        vm.selectedMenu = 'Settings';

        // Methods

        ////////

    }
})();