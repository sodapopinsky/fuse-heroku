(function ()
{
    'use strict';

    angular.module('fuse')
        .controller('DevController', DevController);

    /** @ngInject */
    function DevController(api)
    {
        var vm = this;

        api.timeline.get({}, function (response)
        {
            vm.timeline = response.data;
        });
    }

})();