(function ()
{
    'use strict';

    angular
        .module('app.mail', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        $stateProvider.state('app.mail', {
            url  : '/mail',
            views: {
                'content@app': {
                    templateUrl: 'app/main/apps/mail/mail.html',
                    controller : 'MailController as vm'
                }
            }
        });

        $translatePartialLoaderProvider.addPart('app/main/apps/mail');
    }

})();