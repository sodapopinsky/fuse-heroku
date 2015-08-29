(function ()
{
    'use strict';

    angular
        .module('app.file-manager').config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart("app/main/apps/file-manager");
    }

})();