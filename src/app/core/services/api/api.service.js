(function ()
{
    'use strict';

    angular.module('fuse')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource)
    {
        var api = {};
        api.dataUrl = 'app/core/services/api/data/';

        api.activities = $resource(api.dataUrl + 'notifications/activities.json', null, {
            'get': {method: 'get'}
        });

        api.cards = $resource(api.dataUrl + 'cards/cards.json', null, {
            'get': {method: 'get'}
        });

        api.contacts = $resource(api.dataUrl + 'notifications/contacts.json', null, {
            'get': {method: 'get'}
        });

        api.events = $resource(api.dataUrl + 'notifications/events.json', null, {
            'get': {method: 'get'}
        });

        api.fileManager = {
            documents: $resource(api.dataUrl + 'file-manager/documents.json', null, {
                'get': {method: 'get'}
            })
        };

        api.icons = $resource(api.dataUrl + 'icons/icons.json', null, {
            'get': {method: 'get'}
        });

        api.invoice = $resource(api.dataUrl + 'invoice/invoice.json', null, {
            'get': {method: 'get'}
        });

        api.mail = {
            inbox: $resource(api.dataUrl + 'mail/inbox.json', null, {
                'get': {method: 'get'}
            })
        };

        api.notes = $resource(api.dataUrl + 'notifications/notes.json', null, {
            'get': {method: 'get'}
        });

        api.profile = {
            timeline    : {
                posts     : $resource(api.dataUrl + 'profile/timeline/posts.json', null, {
                    'get': {method: 'get'}
                }),
                activities: $resource(api.dataUrl + 'profile/timeline/activities.json', null, {
                    'get': {method: 'get'}
                })
            },
            about       : $resource(api.dataUrl + 'profile/about/about.json', null, {
                'get': {method: 'get'}
            }),
            photosVideos: $resource(api.dataUrl + 'profile/photos-videos/photos-videos.json', null, {
                'get': {method: 'get'}
            })
        };

        api.search = {
            classic : $resource(api.dataUrl + 'search/classic.json', null, {
                'get': {method: 'get'}
            }),
            mails   : $resource(api.dataUrl + 'search/mails.json', null, {
                'get': {method: 'get'}
            }),
            users   : $resource(api.dataUrl + 'search/users.json', null, {
                'get': {method: 'get'}
            }),
            contacts: $resource(api.dataUrl + 'search/contacts.json', null, {
                'get': {method: 'get'}
            })
        };

        api.tables = {
            employees: $resource(api.dataUrl + 'tables/employees.json', null, {
                'get': {method: 'get'}
            })
        };

        api.timeline = $resource(api.dataUrl + 'timeline/timeline.json', null, {
            'get': {method: 'get'}
        });

        api.todo = {
            tasks: $resource(api.dataUrl + 'todo/tasks.json', null, {
                'get': {method: 'get'}
            }),
            tags : $resource(api.dataUrl + 'todo/tags.json', null, {
                'get': {method: 'get'}
            })
        };

        return api;
    }
})();