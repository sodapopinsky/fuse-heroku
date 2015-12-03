(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('FiltersSidenavController', FiltersSidenavController);

    /** @ngInject */
    function FiltersSidenavController(Board, CardFilters, utils)
    {
        var vm = this;

        // Data
        vm.board = Board.data;
        vm.cardFilters = CardFilters;
        vm.labels = vm.board.labels;
        vm.members = vm.board.members;
        vm.selectedMenu = 'Settings';

        // Methods
        vm.exists = utils.exists;
        vm.toggleInArray = utils.toggleInArray;
        vm.clearFilters = CardFilters.clear;
        vm.filteringIsOn = CardFilters.isOn;

        ////////

    }
})();