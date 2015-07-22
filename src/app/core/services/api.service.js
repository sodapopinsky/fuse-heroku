(function () {
    'use strict';

    angular.module('fuse')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource) {
        var api = {};
        api.url = 'app/core/services/api/';

        api.contacts = $resource(api.url + 'notifications/contacts.json', null,
            {
                'get': {method: 'get'}
            });

        api.events = $resource(api.url + 'notifications/events.json', null,
            {
                'get': {method: 'get'}
            });

        api.notes = $resource(api.url + 'notifications/notes.json', null,
            {
                'get': {method: 'get'}
            });

        api.activities = $resource(api.url + 'notifications/activities.json', null,
            {
                'get': {method: 'get'}
            });

        api.icons = $resource('assets/icons/selection.json', null,
            {
                'get': {method: 'get'}
            });

        api.mail = {
            inbox: $resource(api.url + 'mail/inbox.json', null,
                {
                    'get': {method: 'get'}
                })
        };

        api.todo = {
            tasks: $resource(api.url + 'todo/tasks.json', null,
                {
                    'get': {method: 'get'}
                }),
            tags: $resource(api.url + 'todo/tags.json', null,
                {
                    'get': {method: 'get'}
                })
        };

        api.profile = {
            timeline: {
                posts: $resource(api.url + 'profile/timeline/posts.json', null,
                    {
                        'get': {method: 'get'}
                    }),

                activities: $resource(api.url + 'profile/timeline/activities.json', null,
                    {
                        'get': {method: 'get'}
                    })
            },
            about: $resource(api.url + 'profile/about/about.json', null,
                {
                    'get': {method: 'get'}
                }),
            photosVideos: $resource(api.url + 'profile/photos-videos/photos-videos.json', null,
                {
                    'get': {method: 'get'}
                })
        };


        api.fileManager = {
            documents: $resource(api.url + 'file-manager/documents.json', null,
                {
                    'get': {method: 'get'}
                })
        };

        api.invoice = $resource(api.url + 'invoice/invoice.json', null,
            {
                'get': {method: 'get'}
            });

        api.tables = {
            employees: $resource(api.url + 'tables/employees.json', null,
                {
                    'get': {method: 'get'}
                })
        };

        return api;
    }
})();