(function ()
{
    'use strict';

    angular
        .module('app.pages.profile', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.pages_profile', {
            url  : '/pages/profile',
            views: {
                'content@app': {
                    templateUrl: 'app/main/pages/profile/profile.html',
                    controller : 'ProfileController as vm'
                }
            }
        });
    }

})();