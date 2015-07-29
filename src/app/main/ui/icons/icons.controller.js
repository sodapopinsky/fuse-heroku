(function ()
{
    'use strict';

    angular.module('fuse')
        .controller('IconsController', IconsController);

    /** @ngInject */
    function IconsController(api, $mdDialog)
    {
        var vm = this;
        vm.iconSize = 24;
        vm.iconSizes = [16, 18, 20, 24, 32];
        vm.iconDetail = iconDetail;

        api.icons.get({}, function (response)
        {
            vm.icons = response.icons;
        });

        vm.tag = function (data)
        {
            if ( vm.tagFilter )
            {
                return vm.tagFilter.replace(/\s*,\s*/g, ',').split(',').every(function (tag)
                {
                    return data.icon.tags.some(function (objTag)
                    {
                        return objTag.indexOf(tag) !== -1;
                    });
                });
            }
            else
            {
                return true;
            }
        };

        var iconDetailTemplate = '<md-dialog>\n    <md-dialog-content layout="column" layout-align="center center" layout-padding>\n        <md-icon md-font-icon="{{iconClass}}" class="md-padding s48"></md-icon>\n        <md-input-container>\n            <label>Icon Class</label>\n            <input ng-model="iconClass">\n        </md-input-container>\n    </md-dialog-content>\n</md-dialog>';

        function iconDetail(ev, icon)
        {
            $mdDialog.show({
                    template           : iconDetailTemplate,
                    clickOutsideToClose: true,
                    targetEvent        : ev,
                    locals             : {item: icon},
                    controller         : function DialogController($scope, $mdDialog, item)
                    {
                        $scope.icon = item;
                        $scope.iconClass = 'icon-' + item.properties.name;
                    }
                }
            );
        }
    }
})();


