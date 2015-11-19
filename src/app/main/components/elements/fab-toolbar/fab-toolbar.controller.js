(function ()
{
    'use strict';

    angular
        .module('app.components.elements.fab-toolbar')
        .controller('FabToolbarController', FabToolbarController);

    /** @ngInject */
    function FabToolbarController()
    {
        var vm = this;

        // Data
        vm.isOpen = false;
        vm.demo = {
            isOpen           : false,
            count            : 0,
            selectedAlignment: 'md-left'
        };

        // Methods

        //////////
    }

})();