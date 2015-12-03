(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('CalendarViewController', CalendarViewController);

    /** @ngInject */
    function CalendarViewController($scope, $mdSidenav, $mdDialog, $document, Board, BoardData)
    {
        var vm = this;
        vm.board = Board.data;
        vm.board.name = 'calendar';

    }
})();