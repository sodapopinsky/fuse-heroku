(function ()
{
    'use strict';

    angular.module('app.ui.colors')
        .controller('ColorsController', ColorsController);

    /** @ngInject */
    function ColorsController(fuseTheming)
    {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes

        // Methods

        //////////
    }
})();


