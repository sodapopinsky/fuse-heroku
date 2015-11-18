(function ()
{
    'use strict';

    angular
        .module('app.navigation-classic', [])
        .config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart('app/sidenav/navigation-classic');
    }

})();