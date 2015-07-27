(function () {
    'use strict';

    angular.module('fuse')
        .controller('InputController', InputController);

    /** @ngInject */
    function InputController() {
        var vm = this;
        vm.user = {
            title: 'Developer',
            email: 'ipsum@lorem.com',
            company: 'Google',
            biography: 'Loves kittens, snowboarding, and can type at 130 WPM.',
            rate: 20
        };
    }
})();


