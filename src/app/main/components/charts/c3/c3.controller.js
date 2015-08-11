(function ()
{
    'use strict';

    angular
        .module('app.components')
        .controller('C3Controller', C3Controller);

    function C3Controller(fuseTheming)
    {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;

        // Methods

        //////////

    }
})();