(function ()
{
    'use strict';

    angular
        .module('app.calendar', [
            'ui.calendar'
        ])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, $mdDateLocaleProvider)
    {
        $stateProvider.state('app.calendar', {
            url  : '/calendar',
            views: {
                'content@app': {
                    templateUrl: 'app/main/apps/calendar/calendar.html',
                    controller : 'CalendarController as vm'
                }
            }
        });

        $translatePartialLoaderProvider.addPart('app/main/apps/calendar');

        // Angular Material Date Picker Configuration for momentJs
        $mdDateLocaleProvider.parseDate = function(dateString) {
            var m = moment(dateString, 'L', true);
            return m.isValid() ? m.toDate() : new Date(NaN);
        };
        $mdDateLocaleProvider.formatDate = function(date) {
            return moment(date).format('L');
        };
    }

})();