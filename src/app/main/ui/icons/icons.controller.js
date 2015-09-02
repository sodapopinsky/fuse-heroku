(function ()
{
    'use strict';

    angular.module('app.ui.icons')
        .controller('IconsController', IconsController);

    /** @ngInject */
    function IconsController(api)
    {
        var vm = this;

        // Data
        api.icons.get({}, function (response)
        {
            vm.icons = response.icons;
        });

        // Methods

        //////////
    }

})();