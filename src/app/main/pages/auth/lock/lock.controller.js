(function ()
{
    'use strict';

    angular.module('app.pages.auth.lock')
        .controller('LockController', LockController);

    /** @ngInject */
    function LockController()
    {
        var vm = this;

        // Data
        vm.form = {
            userName : 'John Doe'
        };

        // Methods

        //////////
    }
})();