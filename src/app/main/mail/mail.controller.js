(function () {
    'use strict';

    angular.module('fuse')
        .controller('mailController', mailController);

    /** @ngInject */
    function mailController(api, $mdDialog,$document) {
        var vm = this;
        vm.colors = ['blue', 'blue-grey', 'orange', 'pink', 'purple'];
        vm.checked = [];
        vm.composeDialog = composeDialog;
        vm.starredToggle = starredToggle;
        vm.checkToggle = checkToggle;
        vm.checkExists = checkExists;
        vm.checkAll = checkAll;
        vm.selectMail = selectMail;
        vm.selectedMail = {};
        vm.selectedAccount = 'creapond';
        vm.accounts = {
            'creapond': 'sercanyemen@creapond.com',
            'withinpixels': 'sercanyemen@withinpixels.com'
        };

        api.mail.inbox.get({}, function (response) {
            vm.inbox = response.data;
            vm.selectedMail = vm.inbox[0];
        });

        function selectMail(mail) {
            vm.selectedMail = mail;
            angular.forEach(vm.inbox, function (mail) {
                delete mail.selected;
            });
            mail.selected = true;
        }

        function starredToggle(mail, event) {
            event.stopPropagation();
            mail.starred = !mail.starred;
        }

        function checkToggle(item, list, event) {
            if (event) {
                event.stopPropagation();
            }
            var idx = list.indexOf(item);
            if (idx > -1) {
                list.splice(idx, 1);
            } else {
                list.push(item);
            }
        }

        function checkExists(item, list) {
            return list.indexOf(item) > -1;
        }

        function checkAll() {
            if (vm.checked.length > 0) {
                vm.checked = [];
                vm.allChecked = false;
            } else {
                vm.selected = angular.copy(vm.inbox);
                angular.forEach(vm.inbox, function (mail) {
                    checkToggle(mail, vm.checked);
                });
                vm.allChecked = true;
            }
        }

        function composeDialog(ev) {
            $mdDialog.show({
                controller: 'composeDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/main/mail/compose-dialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }
    }
})();
