(function ()
{
    'use strict';

    angular
        .module('app.components')
        .controller('ContentWidgetsController', ContentWidgetsController);

    /** @ngInject */
    function ContentWidgetsController(api)
    {
        var vm = this;

        // Data
        api.timeline.get({}, function (response)
        {
            vm.timeline = response.data;
        });

        // Methods

        //////////
    }
})();