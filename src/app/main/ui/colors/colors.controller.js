(function ()
{
    'use strict';

    angular.module('fuse')
        .controller('ColorsController', ColorsController);

    /** @ngInject */
    function ColorsController(fuseTheming)
    {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes
    }
})();


