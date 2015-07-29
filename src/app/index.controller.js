(function ()
{
    'use strict';

    angular.module('fuse')
        .controller('AppController', AppController);

    /** @ngInject */
    function AppController($rootScope)
    {
        $rootScope.appTheme = 'default';
    }
})();
