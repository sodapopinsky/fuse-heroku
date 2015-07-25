(function () {
    'use strict';

    angular.module('app.mail')
        .controller('TimelineController', TimelineController);

    /** @ngInject */
    function TimelineController(api) {
        var vm = this;

        api.timeline.get({}, function (response) {
            vm.timeline = response.data;
        });

    }
})();
