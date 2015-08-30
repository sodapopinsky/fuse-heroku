(function ()
{
    'use strict';

    angular
        .module('app.calendar').config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart("app/main/apps/calendar");
    }

})();