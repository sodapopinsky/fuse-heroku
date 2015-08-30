(function ()
{
    'use strict';

    angular.module('app.ui')
        .controller('IconsController', IconsController);

    /** @ngInject */
    function IconsController(api, $mdDialog)
    {
        var vm = this;

        // Data
        vm.iconSize = 24;
        vm.iconSizes = [16, 24, 32];

        api.icons.get({}, function (response)
        {
            vm.icons = response.icons;
        });

        // Methods
        vm.iconDetail = iconDetail;

        //////////

        function iconDetail(ev, icon)
        {
            var iconDetailTemplate = '<md-dialog class="icon-preview-dialog">\n    <md-dialog-content layout="column" layout-align="center center">\n        <md-icon md-font-icon="{{iconClass}}" class="s48"></md-icon>\n        <md-input-container>\n            <label>Icon Class</label>\n            <input ng-model="iconClass">\n        </md-input-container>\n    </md-dialog-content>\n</md-dialog>';

            $mdDialog.show({
                    template           : iconDetailTemplate,
                    clickOutsideToClose: true,
                    targetEvent        : ev,
                    locals             : {item: icon},
                    controller         : function DialogController($scope, $mdDialog, item)
                    {
                        console.log(item);
                        $scope.icon = item;
                        $scope.iconClass = 'icon-' + item.name;
                    }
                }
            );
        }
    }
})();


