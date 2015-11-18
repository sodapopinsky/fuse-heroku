(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.forgot-password', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationFactoryProvider)
    {
        // State
        $stateProvider.state('app.pages_auth_forgot-password', {
            url      : '/pages/auth/forgot-password',
            views    : {
                'main@'                                 : {
                    templateUrl: 'app/core/layouts/basic.html'
                },
                'content@app.pages_auth_forgot-password': {
                    templateUrl: 'app/main/pages/auth/forgot-password/forgot-password.html',
                    controller : 'ForgotPasswordController as vm'
                }
            },
            bodyClass: 'forgot-password'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/auth/forgot-password');

        // Navigation
        msNavigationFactoryProvider.saveItem('fuse.pages.auth.forgot-password', {
            title : 'Forgot Password',
            state : 'app.pages_auth_forgot-password',
            weight: 5
        });
    }

})();