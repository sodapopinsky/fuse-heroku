(function ()
{
    'use strict';

    angular.module('fuse')
        .directive('msRandomClass', msRandomClassDirective);

    /** @ngInject */
    function msRandomClassDirective()
    {
        return {
            restrict: 'A',
            scope   : {
                msRandomClass: '='
            },
            link    : function (scope, iElement)
            {
                var randomClass = scope.msRandomClass[Math.floor(Math.random() * (scope.msRandomClass.length))];
                iElement.addClass(randomClass);
            }
        };
    }
})();