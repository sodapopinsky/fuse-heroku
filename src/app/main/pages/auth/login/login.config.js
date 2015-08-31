(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login').config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart('app/main/pages/auth/login');
    }

})();