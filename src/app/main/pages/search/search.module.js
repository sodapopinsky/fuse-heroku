(function ()
{
    'use strict';

    angular
        .module('app.pages.search', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
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
    }

})();