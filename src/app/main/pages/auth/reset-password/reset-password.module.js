(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.reset-password', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        $stateProvider.state('app.pages_auth_reset-password', {
            url      : '/pages/auth/reset-password',
            views    : {
                'main@'                                : {
                    templateUrl: 'app/core/layouts/basic.html'
                },
                'content@app.pages_auth_reset-password': {
                    templateUrl: 'app/main/pages/auth/reset-password/reset-password.html',
                    controller : 'ResetPasswordController as vm'
                }
            },
            bodyClass: 'reset-password'
        });

        $translatePartialLoaderProvider.addPart('app/main/pages/auth/reset-password');
    }

})();