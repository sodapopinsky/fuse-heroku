(function ()
{
    'use strict';

    angular
        .module('app.mail').config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart("app/main/apps/mail");
    }

})();