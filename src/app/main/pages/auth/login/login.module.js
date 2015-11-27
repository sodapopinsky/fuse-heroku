(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationFactoryProvider)
    {
        // State
        $stateProvider.state('app.pages_auth_login', {
            url      : '/pages/auth/login',
            views    : {
                'main@'                       : {
                    templateUrl: 'app/core/layouts/basic.html'
                },
                'content@app.pages_auth_login': {
                    templateUrl: 'app/main/pages/auth/login/login.html',
                    controller : 'LoginController as vm'
                }
            },
            bodyClass: 'login'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/auth/login');

        // Navigation
        msNavigationFactoryProvider.saveItem('pages.auth', {
            title : 'Authentication',
            icon  : 'icon-lock',
            weight: 1
        });

        msNavigationFactoryProvider.saveItem('pages.auth.login', {
            title : 'Login',
            state : 'app.pages_auth_login',
            weight: 1
        });
    }

})();