(function ()
{
    'use strict';

    angular.module('fuse')
        .controller('ColorsController', ColorsController);

    /** @ngInject */
    function ColorsController($rootScope)
    {
        var vm = this;
        vm.theme = $rootScope.selectedTheme;
    }
})();


