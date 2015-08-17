(function () {
    'use strict';

    angular.module('fuse')
        .directive('ngRandomClass', ngRandomClassDirective);

    /** @ngInject */
    function ngRandomClassDirective() {
        return {
            restrict: 'EA',
            replace: false,
            scope: {
                ngRandomClass: "="
            },
            link: function (scope, elem) {

                //Add random background class to selected element
                elem.addClass(scope.ngRandomClass[Math.floor(Math.random() * (scope.ngRandomClass.length))]);
            }
        };
    }

})();