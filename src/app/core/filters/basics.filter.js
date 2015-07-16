(function () {
    'use strict';

    angular.module('fuse')
        .filter('toTrusted', toTrusted)
        .filter('htmlToPlaintext', htmlToPlaintext)
        .filter('nospace', nospace)
        .filter('humanizeDoc', humanizeDoc);

    /** @ngInject */
    function toTrusted($sce) {
        return function (value) {
            return $sce.trustAsHtml(value);
        };
    }

    /** @ngInject */
    function htmlToPlaintext() {
        return function (text) {
            return String(text).replace(/<[^>]+>/gm, '');
        };
    }

    /** @ngInject */
    function nospace() {
        return function (value) {
            return (!value) ? '' : value.replace(/ /g, '');
        };
    }

    /** @ngInject */
    function humanizeDoc() {
        return function (doc) {
            if (!doc) {
                return;
            }
            if (doc.type === 'directive') {
                return doc.name.replace(/([A-Z])/g, function ($1) {
                    return '-' + $1.toLowerCase();
                });
            }
            return doc.label || doc.name;
        };
    }


})();
