(function ()
{
    'use strict';

    angular
        .module('app.pages.timeline', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationFactoryProvider)
    {
        // State
        $stateProvider
            .state('app.pages_timeline', {
                url      : '/pages/timeline',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/timeline/timeline.html',
                        controller : 'TimelineController as vm'
                    }
                },
                resolve  : {
                    Timeline: function (apiResolver)
                    {
                        return apiResolver.resolve('timeline.page1@get');
                    }
                },
                bodyClass: 'timeline'
            })
            .state('app.pages_timeline_left', {
                url      : '/pages/timeline-left',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/timeline/timeline-left.html',
                        controller : 'TimelineController as vm'
                    }
                },
                resolve  : {
                    Timeline: function (apiResolver)
                    {
                        return apiResolver.resolve('timeline.page1@get');
                    }
                },
                bodyClass: 'timeline-left'
            })
            .state('app.pages_timeline_right', {
                url      : '/pages/timeline-right',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/timeline/timeline-right.html',
                        controller : 'TimelineController as vm'
                    }
                },
                resolve  : {
                    Timeline: function (apiResolver)
                    {
                        return apiResolver.resolve('timeline.page1@get');
                    }
                },
                bodyClass: 'timeline-right'
            });

        // Navigation
        msNavigationFactoryProvider.saveItem('fuse.pages.timeline', {
            title : 'Timeline',
            weight: 8
        });

        msNavigationFactoryProvider.saveItem('fuse.pages.timeline.default', {
            title: 'Default',
            state: 'app.pages_timeline'
        });

        msNavigationFactoryProvider.saveItem('fuse.pages.timeline.left-aligned', {
            title: 'Left Aligned',
            state: 'app.pages_timeline_left'
        });

        msNavigationFactoryProvider.saveItem('fuse.pages.timeline.right-aligned', {
            title: 'Right Aligned',
            state: 'app.pages_timeline_right'
        });
    }

})();