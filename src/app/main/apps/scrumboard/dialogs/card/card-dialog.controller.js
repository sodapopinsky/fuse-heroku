(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('ScrumboardCardDialogController', ScrumboardCardDialogController);

    /** @ngInject */
    function ScrumboardCardDialogController($document, $mdDialog, Board, cardId, fuseTheming, fuseGenerator, utils)
    {
        var vm = this;

        // Data
        vm.board = Board.data;
        vm.card = vm.board.cards.getById(cardId);
        vm.newLabelColor = 'red';
        vm.members = vm.board.members;
        vm.labels = vm.board.labels;

        // Methods
        vm.palettes = fuseTheming.getRegisteredPalettes();
        vm.rgba = fuseGenerator.rgba;
        vm.toggleInArray = utils.toggleInArray;
        vm.exists = utils.exists;
        vm.closeDialog = closeDialog;
        vm.getCardList = getCardList;
        vm.removeCard = removeCard;
        /* Attachment */
        vm.toggleCoverImage = toggleCoverImage;
        vm.removeAttachment = removeAttachment;
        /* Labels */
        vm.labelQuerySearch = labelQuerySearch;
        vm.filterLabel = filterLabel;
        vm.addNewLabel = addNewLabel;
        vm.removeLabel = removeLabel;
        /* Members */
        vm.memberQuerySearch = memberQuerySearch;
        vm.filterMember = filterMember;
        /* Checklist */
        vm.updateCheckedCount = updateCheckedCount;
        vm.addCheckItem = addCheckItem;
        vm.removeChecklist = removeChecklist;
        vm.createCheckList = createCheckList;
        /* Comment */
        vm.addNewComment = addNewComment;

        //////////

        /**
         * Close Dialog
         */
        function closeDialog()
        {
            $mdDialog.hide();
        }

        /**
         * Get Card List
         */
        function getCardList()
        {
            var response;
            for ( var i = 0, len = vm.board.lists.length; i < len; i++ )
            {
                if ( vm.board.lists[i].idCards.indexOf(vm.card.id) > -1 )
                {
                    response = vm.board.lists[i];
                    break;
                }
            }
            return response;
        }

        /**
         * Remove Card
         * @param ev
         */
        function removeCard(ev)
        {
            var confirm = $mdDialog.confirm({
                title              : 'Remove Card',
                parent             : $document.find('#scrumboard'),
                textContent        : 'Are you sure want to remove card?',
                ariaLabel          : 'remove card',
                targetEvent        : ev,
                clickOutsideToClose: true,
                escapeToClose      : true,
                ok                 : 'Remove',
                cancel             : 'Cancel'
            });

            $mdDialog.show(confirm).then(function ()
            {
                var cardList = getCardList();

                cardList.idCards.splice(cardList.idCards.indexOf(vm.card.id), 1);

                vm.board.cards.splice(vm.board.cards.indexOf(vm.card), 1);

            }, function ()
            {
                // Canceled
            });
        }

        /**
         * Toggle Cover Image
         * @param attachmentId
         */
        function toggleCoverImage(attachmentId)
        {
            if ( attachmentId === vm.card.idAttachmentCover )
            {
                vm.card.idAttachmentCover = null;
            }
            else
            {
                vm.card.idAttachmentCover = attachmentId;
            }
        }

        /**
         * Remove Attachment
         * @param item
         */
        function removeAttachment(item)
        {
            if ( vm.card.idAttachmentCover === item.id )
            {
                vm.card.idAttachmentCover = '';
            }
            vm.card.attachments.splice(vm.card.attachments.indexOf(item), 1);
        }

        /**
         * Add Label Chips
         * @param query
         * @returns {filterFn}
         */
        function labelQuerySearch(query)
        {
            var results = query ? vm.labels.filter(createFilterFor(query)) : [];
            return results;
        }

        /**
         * Label Filter
         * @param label
         * @returns {boolean}
         */
        function filterLabel(label)
        {
            if ( !vm.labelSearchText || vm.labelSearchText === '' )
            {
                return true;
            }

            return angular.lowercase(label.name).indexOf(angular.lowercase(vm.labelSearchText)) >= 0;
        }

        /**
         * Add New Label
         */
        function addNewLabel()
        {
            vm.board.labels.push({
                "id"   : utils.guidGenerator(),
                "name" : vm.newLabelName,
                "color": vm.newLabelColor
            });
            vm.newLabelName = '';
        }

        /**
         * Remove Label
         */
        function removeLabel()
        {
            var arr = vm.board.labels;
            arr.splice(arr.indexOf(arr.getById(vm.editLabelId)), 1);

            angular.forEach(vm.board.cards, function (card)
            {
                if ( card.idLabels && card.idLabels.indexOf(vm.editLabelId) > -1 )
                {
                    card.idLabels.splice(card.idLabels.indexOf(vm.editLabelId), 1);
                }
            });

            vm.newLabelName = '';
        }

        /**
         * Member Filter
         * @param member
         * @returns {boolean}
         */
        function filterMember(member)
        {
            if ( !vm.memberSearchText || vm.memberSearchText === '' )
            {
                return true;
            }

            return angular.lowercase(member.name).indexOf(angular.lowercase(vm.memberSearchText)) >= 0;
        }

        /**
         * Add Member Chips
         * @param query
         * @returns {Array}
         */
        function memberQuerySearch(query)
        {
            var results = query ? vm.members.filter(createFilterFor(query)) : [];
            return results;
        }

        /**
         * Remove Checklist
         * @param item
         */
        function removeChecklist(item)
        {
            vm.card.checklists.splice(vm.card.checklists.indexOf(item), 1);

            angular.forEach(vm.card.checklists, function (list)
            {
                updateCheckedCount(list);
            });
        }

        /**
         * Update Check List Stats
         * @param list
         */
        function updateCheckedCount(list)
        {
            var checkItems = list.checkItems;
            var checkedItems = 0;
            var allCheckedItems = 0;
            var allCheckItems = 0;

            angular.forEach(checkItems, function (checkItem)
            {
                if ( checkItem.checked )
                {
                    checkedItems++;
                }
            });

            list.checkItemsChecked = checkedItems;

            angular.forEach(vm.card.checklists, function (item)
            {
                allCheckItems += item.checkItems.length;
                allCheckedItems += item.checkItemsChecked;
            });

            vm.card.checkItems = allCheckItems;
            vm.card.checkItemsChecked = allCheckedItems;
        }

        /**
         * Add Checklist Item
         * @param text
         * @param checkList
         */
        function addCheckItem(text, checkList)
        {
            if ( !text || text === '' )
            {
                return;
            }

            var newCheckItem = {
                'name'   : text,
                'checked': false
            }

            checkList.checkItems.push(newCheckItem);

            updateCheckedCount(checkList);
        }

        /**
         * Create Checklist
         */
        function createCheckList()
        {
            vm.card.checklists.push({
                "id"               : utils.guidGenerator(),
                "name"             : vm.newCheckListTitle,
                "checkItemsChecked": 0,
                "checkItems"       : []
            });
            vm.newCheckListTitle = '';
        }

        /**
         * Add New Comment
         * @param newCommentText
         */
        function addNewComment(newCommentText)
        {
            var newComment = {
                "idMember": "36027j1930450d8bf7b10158",
                "message" : newCommentText,
                "time"    : "now"
            }

            vm.card.comments.unshift(newComment);
        }

        /**
         * Filter for Chips
         * @param query
         * @returns {filterFn}
         */
        function createFilterFor(query)
        {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(item)
            {
                return angular.lowercase(item.name).indexOf(lowercaseQuery) >= 0;
            };
        }
    }
})();