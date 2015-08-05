(function () {
    'use strict';

    angular.module('app.components')
        .controller('FabToolbarController', FabToolbarController);

    /** @ngInject */
    function FabToolbarController($mdDialog) {
        var vm = this;

        // Data
        vm.isOpen = false;
        vm.demo = {
            isOpen: false,
            count: 0,
            selectedAlignment: 'md-left'
        };
        // Methods

        //////////

    }
})();


