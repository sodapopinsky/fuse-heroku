(function ()
{
    'use strict';

    angular.module('fuse')
        .controller('SwitchController', SwitchController);

    /** @ngInject */
    function SwitchController()
    {
        var vm = this;
        vm.switch = true;
    }
})();


