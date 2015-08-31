(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.register').config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart('app/main/pages/auth/register');
    }

})();