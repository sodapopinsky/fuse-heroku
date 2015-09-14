(function ()
{
    'use strict';

    angular.module('app.mail')
        .controller('MailController', MailController);

    /** @ngInject */
    function MailController($document, $mdDialog, $mdSidenav, Inbox)
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

        vm.inbox = Inbox.data;
        selectMail(vm.inbox[0]);

        vm.responsiveReadPane = false;

        // Methods
        vm.selectMail = selectMail;
        vm.toggleStarred = toggleStarred;
        vm.toggleCheck = toggleCheck;
        vm.isChecked = isChecked;
        vm.checkAll = checkAll;
        vm.composeDialog = composeDialog;

        //////////

        /**
         * Select mail
         *
         * @param mail
         */
        function selectMail(mail)
        {
            vm.selectedMail = mail;
            vm.responsiveReadPane = true;
        }

        /**
         * Toggle starred
         *
         * @param mail
         * @param event
         */
        function toggleStarred(mail, event)
        {
            event.stopPropagation();
            mail.starred = !mail.starred;
        }

        /**
         * Toggle checked status of the mail
         *
         * @param mail
         * @param event
         */
        function toggleCheck(mail, event)
        {
            if ( event )
            {
                event.stopPropagation();
            }

            var idx = vm.checked.indexOf(mail);

            if ( idx > -1 )
            {
                vm.checked.splice(idx, 1);
            }
            else
            {
                vm.checked.push(mail);
            }
        }

        /**
         * Return checked status of the mail
         *
         * @param mail
         * @returns {boolean}
         */
        function isChecked(mail)
        {
            return vm.checked.indexOf(mail) > -1;
        }

        /**
         * Check all
         */
        function checkAll()
        {
            if ( vm.allChecked )
            {
                vm.checked = [];
                vm.allChecked = false;
            }
            else
            {
                angular.forEach(vm.inbox, function (mail)
                {
                    if ( !isChecked(mail) )
                    {
                        toggleCheck(mail);
                    }
                });

                vm.allChecked = true;
            }
        }

        /**
         * Open compose dialog
         *
         * @param ev
         */
        function composeDialog(ev)
        {
            $mdDialog.show({
                controller         : 'ComposeDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/apps/mail/dialogs/compose/compose-dialog.html',
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