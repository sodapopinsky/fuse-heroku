(function ()
{
    'use strict';

    angular
        .module('app.pages.error-500', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationFactoryProvider)
    {
        // State
        $stateProvider.state('app.pages_errors_error-500', {
            url      : '/pages/errors/error-500',
            views    : {
                'main@'                             : {
                    templateUrl: 'app/core/layouts/basic.html'
                },
                'content@app.pages_errors_error-500': {
                    templateUrl: 'app/main/pages/errors/500/error-500.html',
                    controller : 'Error500Controller as vm'
                }
            },
            bodyClass: 'error-500'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/errors/500');

        // Navigation
        msNavigationFactoryProvider.saveItem('fuse.pages.errors.error-500', {
            title : '500',
            state : 'app.pages_errors_error-500',
            weight: 2
        });
    }

})();