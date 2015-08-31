(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.lock').config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart('app/main/pages/auth/lock');
    }

})();