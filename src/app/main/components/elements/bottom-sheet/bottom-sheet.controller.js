(function ()
{
    'use strict';

    angular.module('app.components')
        .controller('BottomSheetController', BottomSheetController);

    /** @ngInject */
    function BottomSheetController($mdBottomSheet)
    {
        var vm = this;

        // Data
        vm.alert = '';
        vm.alert2 = '';

        // Methods
        vm.showGridBottomSheet = showGridBottomSheet;
        vm.showListBottomSheet = showListBottomSheet;
        //////////

        function showListBottomSheet($event)
        {
            vm.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'bottom-sheet-list-template.html',
                controller : ListBottomSheetCtrl,
                targetEvent: $event,
                parent     : angular.element('#app-wrapper > main > .main-content')
            }).then(function (clickedItem)
            {
                vm.alert = clickedItem.name + ' clicked!';
            });
        }

        function showGridBottomSheet($event)
        {
            vm.alert2 = '';
            $mdBottomSheet.show({
                templateUrl: 'bottom-sheet-grid-template.html',
                controller : GridBottomSheetCtrl,
                targetEvent: $event,
                parent     : angular.element('#app-wrapper > main > .main-content')
            }).then(function (clickedItem)
            {
                vm.alert2 = clickedItem.name + ' clicked!';
            });
        }

        function ListBottomSheetCtrl($scope, $mdBottomSheet)
        {
            $scope.items = [
                {
                    name: 'Share',
                    icon: 'icon-share'
                },
                {
                    name: 'Upload',
                    icon: 'icon-cloud_upload'
                },
                {
                    name: 'Copy',
                    icon: 'icon-content_copy'
                },
                {
                    name: 'Print this page',
                    icon: 'icon-print'
                },
            ];
            $scope.listItemClick = function ($index)
            {
                var clickedItem = $scope.items[$index];
                $mdBottomSheet.hide(clickedItem);
            };
        }

        function GridBottomSheetCtrl($scope, $mdBottomSheet)
        {
            $scope.items = [
                {
                    name: 'Share',
                    icon: 'icon-share'
                },
                {
                    name: 'Upload',
                    icon: 'icon-cloud_upload'
                },
                {
                    name: 'Copy',
                    icon: 'icon-content_copy'
                },
                {
                    name: 'Print this page',
                    icon: 'icon-print'
                }
            ];
            $scope.listItemClick = function ($index)
            {
                var clickedItem = $scope.items[$index];
                $mdBottomSheet.hide(clickedItem);
            };
        }
    }
})();


