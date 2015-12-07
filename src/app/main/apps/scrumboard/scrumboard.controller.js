(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('ScrumboardController', ScrumboardController);

    /** @ngInject */
    function ScrumboardController(Board, BoardList, $mdSidenav, CardFilters)
    {
        var vm = this;

        // Data
        vm.currentView = 'board';
        vm.board = Board.data;
        vm.boardList = BoardList.data;
        vm.boardSelectorVisible = false;

        // Methods
        vm.toggleSidenav = toggleSidenav;
        vm.updateBoardUri = updateBoardUri;
        vm.clearFilters = CardFilters.clear;
        vm.filteringIsOn = CardFilters.isOn;

        ////////

        /**
         * Update Board Uri
         */
        function updateBoardUri()
        {
            vm.boardList.getById(vm.board.id).name = vm.board.name;
            vm.boardList.getById(vm.board.id).uri = vm.board.uri = encodeURIComponent(vm.board.name).replace(/%20/g, '-').toLowerCase();
        }

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }

        Array.prototype.getById = function (value)
        {
            return this.filter(function (x)
            {
                return x.id === value;
            })[0];
        }

    }
})();