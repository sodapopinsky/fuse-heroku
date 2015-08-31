(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.forgot-password').config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart('app/main/pages/auth/forgot-password');
    }

})();