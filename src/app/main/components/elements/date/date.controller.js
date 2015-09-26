(function ()
{
    'use strict';

    angular
        .module('app.components.elements.date')
        .controller('DateController', DateController);

    /** @ngInject */
    function DateController()
    {
        var vm = this;

        // Data
        vm.myDate = new Date();

        vm.minDate = new Date(
            vm.myDate.getFullYear(),
            vm.myDate.getMonth() - 2,
            vm.myDate.getDate());

        vm.maxDate = new Date(
            vm.myDate.getFullYear(),
            vm.myDate.getMonth() + 2,
            vm.myDate.getDate());

        // Methods

        //////////

    }

})();