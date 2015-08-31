(function ()
{
    'use strict';

    angular
        .module('app.todo', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        $stateProvider.state('app.to-do', {
            url  : '/to-do',
            views: {
                'content@app': {
                    templateUrl: 'app/main/apps/todo/todo.html',
                    controller : 'TodoController as vm'
                }
            }
        });

        $translatePartialLoaderProvider.addPart('app/main/apps/todo');
    }

})();