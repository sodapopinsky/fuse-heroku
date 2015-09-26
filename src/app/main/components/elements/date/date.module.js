(function ()
{
    'use strict';

    angular
        .module('app.components.elements.date', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_elements_date', {
            url  : '/components/elements/date',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/elements/date/date.html',
                    controller : 'DateController as vm'
                }
            }
        });
    }

})();