(function ()
{
    'use strict';

    angular.module('fuse')
        .directive('msCard', msCard);

    /** @ngInject */
    function msCard()
    {
        return {
            restrict   : 'AE',
            scope      : {
                template: '@',
                card    : '=cardData'
            },
            templateUrl: function (tElement, tAttrs)
            {
                var baseDir = 'app/core/directives/ms-card/templates/';
                return baseDir + tAttrs.template + '/' + tAttrs.template + '.html';
            },
            compile    : function (tElement)
            {
                // Add class
                tElement.addClass('ms-card');
            }
        };
    }
})();