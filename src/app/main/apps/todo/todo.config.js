(function ()
{
    'use strict';

    angular
        .module('app.todo').config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart("app/main/apps/todo");
    }

})();