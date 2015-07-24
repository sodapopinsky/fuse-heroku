(function () {
    'use strict';

    angular.module('fuse')
        .controller('QuickPanelController', QuickPanelController);

    /** @ngInject */
    function QuickPanelController(api) {
        var vm = this;
        vm.date = new Date();
        vm.settings = {
            notify: true,
            cloud: false,
            retro: true
        };

        api.events.get({}, function (response) {
            vm.events = response.data;
        });

        api.notes.get({}, function (response) {
            vm.notes = response.data;
        });

        api.contacts.get({}, function (response) {
            vm.contacts = response.data;
        });

        api.activities.get({}, function (response) {
            vm.activities = response.data;
        });

    }

})();


