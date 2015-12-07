(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .factory('Board', BoardService);

    /** @ngInject */
    function BoardService($q, api)
    {
        var service = {
            data   : {},
            setData: setData
        };

        function setData(boardId)
        {
            var deferred = $q.defer();

            api.scrumboard.board.get({id: boardId}, {}, function (response)
            {
                service.data = response.data;
                deferred.resolve();
            });

            return deferred.promise;
        }

        return service;
    }
})();