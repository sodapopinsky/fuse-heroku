(function () {
    'use strict';

    var wipThemes = {
        'default': {
            primary: {
                name: 'wip-pale-blue',
                options: {
                    'default': '500',
                    'hue-1': '400',
                    'hue-2': '700',
                    'hue-3': 'A100'
                }
            },
            accent: {
                name: 'wip-blue',
                options: {
                    'default': '500',
                    'hue-1': '400',
                    'hue-2': '600',
                    'hue-3': 'A700'
                }
            },
            warn: {name: 'red'},
            background: {name: 'grey'}
        },
        'indigo': {
            primary: {name: 'indigo'},
            accent: {name: 'pink'},
            warn: {name: 'red'},
            background: {name: 'grey'}
        },
        'blue-grey': {
            primary: {name: 'blue-grey'},
            accent: {name: 'blue'},
            warn: {name: 'red'},
            background: {name: 'grey'}
        }
    };

    angular
        .module('app.core')
        .constant('wipThemes', wipThemes);
})();