(function ()
{
    'use strict';

    angular
        .module('app.pages.coming-soon', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationFactoryProvider)
    {
        // State
        $stateProvider.state('app.pages_coming-soon', {
            url      : '/pages/coming-soon',
            views    : {
                'main@'                        : {
                    templateUrl: 'app/core/layouts/basic.html'
                },
                'content@app.pages_coming-soon': {
                    templateUrl: 'app/main/pages/coming-soon/coming-soon.html',
                    controller : 'ComingSoonController as vm'
                }
            },
            bodyClass: 'coming-soon'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/coming-soon');

        // Navigation
        msNavigationFactoryProvider.saveItem('fuse.pages.coming-soon', {
            title : 'Coming Soon',
            state : 'app.pages_coming-soon',
            weight: 2
        });
    }

})();