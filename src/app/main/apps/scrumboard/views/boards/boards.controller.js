(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('BoardsController', BoardsController);

    /** @ngInject */
    function BoardsController(BoardList)
    {
        var vm = this;

        // Data
        vm.boardList = BoardList.data;

        // Methods

        //////////
    }
})();