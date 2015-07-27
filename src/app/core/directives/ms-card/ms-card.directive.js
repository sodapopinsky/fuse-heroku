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
                card : '=ngModel'
            },
            templateUrl: function (tElement, tAttrs)
            {
                var baseDir = 'app/core/directives/ms-card/templates/';
                return baseDir + tAttrs.template + '/' + tAttrs.template + '.html';
            },
            link       : function ($scope, $element)
            {

                console.log($scope);
            }
        };
    }
})();