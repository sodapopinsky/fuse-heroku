(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('BoardController', BoardController);

    /** @ngInject */
    function BoardController($mdDialog, $document, BoardList, Board, CardFilters, msUtils)
    {
        var vm = this;

        // Data
        vm.currentView = 'board';
        vm.board = Board.data;
        vm.boardList = BoardList.data;
        vm.cardFilters = CardFilters;
        vm.card = {};
        vm.cardOptions = {};
        vm.newListName = '';
        vm.uiSortableListOptions = {
            tolerance  : "pointer",
            placeholder: "list-wrapper list-sortable-placeholder",
            items      : "> .list-wrapper",
            start      : function (event, ui)
            {
                var width = ui.item[0].children[0].clientWidth;
                var height = ui.item[0].children[0].clientHeight;
                ui.placeholder.css({
                    'min-width': width + 'px',
                    'width'    : width + 'px',
                    'height'   : height + 'px'
                });
            }
        };
        vm.uiSortableCardOptions = {
            helper              : 'clone',
            appendTo            : '#board',
            forceHelperSize     : true,
            tolerance           : "pointer",
            placeholder         : "list-card card-sortable-placeholder",
            forcePlaceholderSize: true,
            connectWith         : ".list-cards"
        };

        // Methods
        vm.openCardDialog = openCardDialog;
        vm.addNewList = addNewList;
        vm.removeList = removeList;
        vm.cardFilter = cardFilter;

        //////////

        /**
         * Open card dialog
         *
         * @param ev
         * @param cardId
         */
        function openCardDialog(ev, cardId)
        {
            $mdDialog.show({
                templateUrl        : 'app/main/apps/scrumboard/dialogs/card/card-dialog.html',
                controller         : "ScrumboardCardDialogController",
                controllerAs       : "vm",
                parent             : $document.find('#scrumboard'),
                targetEvent        : ev,
                clickOutsideToClose: true,
                escapeToClose      : true,
                locals             : {
                    cardId: cardId
                }
            });
        }

        /**
         * Add new list
         */
        function addNewList()
        {
            if ( vm.newListName === '' )
            {
                return;
            }

            vm.board.lists.push({
                "id"     : msUtils.guidGenerator(),
                "name"   : vm.newListName,
                "idCards": []
            });

            vm.newListName = '';
        }

        /**
         * Remove list
         *
         * @param ev
         * @param list
         */
        function removeList(ev, list)
        {
            var confirm = $mdDialog.confirm({
                title              : 'Remove List',
                parent             : $document.find('#scrumboard'),
                textContent        : 'Are you sure want to remove list?',
                ariaLabel          : 'remove list',
                targetEvent        : ev,
                clickOutsideToClose: true,
                escapeToClose      : true,
                ok                 : 'Remove',
                cancel             : 'Cancel'
            });
            $mdDialog.show(confirm).then(function ()
            {
                vm.board.lists.splice(vm.board.lists.indexOf(list), 1);
            }, function ()
            {
                // Canceled
            });

        }

        /**
         * Card filter
         *
         * @param cardId
         * @returns {*}
         */
        function cardFilter(cardId)
        {
            var card = vm.board.cards.getById(cardId);

            try
            {
                if ( angular.lowercase(card.name).indexOf(angular.lowercase(vm.cardFilters.name)) < 0 )
                {
                    throw false;
                }

                angular.forEach(vm.cardFilters.labels, function (label)
                {
                    if ( !msUtils.exists(label, card.idLabels) )
                    {
                        throw false;
                    }
                });

                angular.forEach(vm.cardFilters.members, function (member)
                {
                    if ( !msUtils.exists(member, card.idMembers) )
                    {
                        throw false;
                    }
                });


            } catch ( err )
            {
                return err;
            }

            return true;
        }

    }
})();