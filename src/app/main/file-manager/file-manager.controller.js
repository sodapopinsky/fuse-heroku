(function () {
    'use strict';

    angular.module('app.fileManager')
        .controller('fileManagerController', fileManagerController);

    /** @ngInject */
    function fileManagerController(api, $mdSidenav) {
        var vm = this;
        vm.sideNavToggle = sideNavToggle;
        vm.toggleView = toggleView;
        vm.selectedView = 'list';
        vm.viewTemplate = viewTemplate;
        vm.selectedAccount = 'creapond';
        vm.accounts = {
            'creapond': 'sercanyemen@creapond.com',
            'withinpixels': 'sercanyemen@withinpixels.com'
        };

        api.fileManager.documents.get({}, function (response) {
            vm.documents = response.data;
            vm.selected = vm.documents[0];
        });

        function sideNavToggle() {
            $mdSidenav('fileManager-main-sidenav').toggle();
        }

        function toggleView() {
            vm.selectedView = vm.selectedView === 'list' ? 'grid' : 'list';
        }

        function viewTemplate() {
            var template = vm.selectedView === 'list' ? 'app/main/file-manager/views/list-view.html' : 'app/main/file-manager/views/grid-view.html';
            return template;
        }

    }
})();
