(function () {
    'use strict';

    angular.module('fuse')
        .controller('notificationSidenavController', notificationSidenavController);

    /** @ngInject */
    function notificationSidenavController(api) {
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


