(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .factory('Board', BoardService);

    /** @ngInject */
    function BoardService($q, api)
    {
        var self = {
            data   : {},
            setData: function (boardId)
            {
                var deferred = $q.defer();

                api.scrumboard.board.get({id: boardId}, {}, function (response)
                {
                    self.data = response.data;
                    deferred.resolve();
                });

                return deferred.promise;
            }
        }

        return self;
    }
})();