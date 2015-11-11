(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login-v2', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        $stateProvider.state('app.pages_auth_login-v2', {
            url      : '/pages/auth/login-v2',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/basic.html'
                },
                'content@app.pages_auth_login-v2': {
                    templateUrl: 'app/main/pages/auth/login-v2/login-v2.html',
                    controller : 'LoginV2Controller as vm'
                }
            },
            bodyClass: 'login-v2'
        });

        $translatePartialLoaderProvider.addPart('app/main/pages/auth/login-v2');
    }

})();