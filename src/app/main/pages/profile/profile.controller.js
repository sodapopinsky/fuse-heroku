(function ()
{
    'use strict';

    angular.module('app.mail')
        .controller('ProfileController', ProfileController);

    /** @ngInject */
    function ProfileController(api)
    {
        var vm = this;

        api.profile.timeline.posts.get({}, function (response)
        {
            vm.posts = response.data;
        });

        api.profile.timeline.activities.get({}, function (response)
        {
            vm.activities = response.data;
        });

        api.profile.about.get({}, function (response)
        {
            vm.about = response.data;
        });

        api.profile.photosVideos.get({}, function (response)
        {
            vm.photosVideos = response.data;
        });
    }
})();
