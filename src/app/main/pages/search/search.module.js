(function ()
{
    'use strict';

    angular
        .module('app.pages.search', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        $stateProvider.state('app.pages_search', {
            url  : '/pages/search',
            views: {
                'content@app': {
                    templateUrl: 'app/main/pages/search/search.html',
                    controller : 'SearchController as vm'
                }
            }
        });

        $translatePartialLoaderProvider.addPart('app/main/pages/search');

    }

})();