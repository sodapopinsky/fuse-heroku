(function () {
    'use strict';

    angular.module('fuse')
        .controller('SliderController', SliderController);

    /** @ngInject */
    function SliderController() {
        var vm = this;
        vm.sliderValue = 125;
    }
})();


