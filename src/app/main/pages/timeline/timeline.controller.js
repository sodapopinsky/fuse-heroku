(function ()
{
    'use strict';

    angular.module('app.pages.timeline')
        .controller('TimelineController', TimelineController);

    /** @ngInject */
    function TimelineController(api)
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
