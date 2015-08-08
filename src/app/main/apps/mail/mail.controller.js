(function ()
{
    'use strict';

    angular.module('app.mail')
        .controller('MailController', MailController);

    /** @ngInject */
    function MailController($document, $mdDialog, $mdSidenav, api)
    {
        var vm = this;

        // Data
        vm.accounts = {
            'creapond'    : 'johndoe@creapond.com',
            'withinpixels': 'johndoe@withinpixels.com'
        };
        vm.checked = [];
        vm.colors = ['md-blue-bg', 'md-blue-grey-bg', 'md-orange-bg', 'md-pink-bg', 'md-purple-bg'];
        vm.selectedAccount = 'creapond';
        vm.selectedMail = {};
        vm.toggleSidenav = toggleSidenav;

        api.mail.inbox.get({}, function (response)
        {
            vm.inbox = response.data;
            vm.selectedMail = vm.inbox[0];
        });

        // Methods
        vm.checkAll = checkAll;
        vm.checkExists = checkExists;
        vm.checkToggle = checkToggle;
        vm.composeDialog = composeDialog;
        vm.selectMail = selectMail;
        vm.starredToggle = starredToggle;

        //////////

        function selectMail(mail)
        {
            vm.selectedMail = mail;

            angular.forEach(vm.inbox, function (mail)
            {
                delete mail.selected;
            });

            mail.selected = true;
        }

        function starredToggle(mail, event)
        {
            event.stopPropagation();
            mail.starred = !mail.starred;
        }

        function checkToggle(item, list, event)
        {
            if ( event )
            {
                event.stopPropagation();
            }

            var idx = list.indexOf(item);

            if ( idx > -1 )
            {
                list.splice(idx, 1);
            }
            else
            {
                list.push(item);
            }
        }

        function checkExists(item, list)
        {
            return list.indexOf(item) > -1;
        }

        function checkAll()
        {
            if ( vm.checked.length > 0 )
            {
                vm.checked = [];
                vm.allChecked = false;
            }
            else
            {
                vm.selected = angular.copy(vm.inbox);
                angular.forEach(vm.inbox, function (mail)
                {
                    checkToggle(mail, vm.checked);
                });
                vm.allChecked = true;
            }
        }

        function composeDialog(ev)
        {
            $mdDialog.show({
                controller         : 'ComposeDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/apps/mail/compose-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true
            });
        }

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }
    }
})();
