(function ()
{
    'use strict';

    angular.module('app.core')
        .controller('MsWidgetController', MsWidgetController)
        .directive('msWidget', msWidgetDirective);

    /** @ngInject */
    function MsWidgetController()
    {
        var vm = this;

        // Data

        // Methods

        //////////
    }

    /** @ngInject */
    function msWidgetDirective()
    {
        return {
            restrict  : 'E',
            scope     : {
                widget: '=ngModel'
            },
            controller: 'MsWidgetController',
            template  : '<div ng-include="templateDir"></div>',
            compile   : function (tElement, tAttrs)
            {
                tElement.addClass('ms-widget');

                return function postLink($scope, $element, $attrs, MsWidgetCTrl)
                {
                    var widgetData = $scope.widget;
                    $scope.flipped = false;

                    // Load the selected template
                    var baseDir = 'app/core/directives/ms-widget/templates/';
                    $scope.templateDir = baseDir + widgetData.template + '/' + widgetData.template + '.html';

                    // Expose the public API
                    $scope.flipWidget = flipWidget;

                    // Public API
                    function flipWidget()
                    {
                        $scope.flipped = !$scope.flipped;
                    }
                };
            }
        };
    }

})();