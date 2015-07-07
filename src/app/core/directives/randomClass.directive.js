(function () {
    'use strict';

    angular.module('fuse')
        .directive('ngRandomClass', ngRandomClass);

    /** @ngInject */
    function ngRandomClass() {
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