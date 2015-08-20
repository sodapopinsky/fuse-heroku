(function ()
{
    'use strict';

    angular.module('app.core')
        .directive('msWidget', msWidgetDirective);

    /** @ngInject */
    function msWidgetDirective()
    {
        return {
            restrict: 'E',
            scope   : {
                widget: '='
            },
            template: '<div class="widget-container" ng-include="templateDir"></div>',
            compile : function (tElement)
            {
                tElement.addClass('ms-widget');

                return function postLink($scope, $element)
                {
                    // Variables
                    var widget = $scope.widget;

                    /* Initial setup */

                    // Add classes based on the template
                    $element.addClass('widget-' + widget.options.template);

                    // Load the selected template
                    var baseDir = 'app/core/directives/ms-widget/templates/';
                    $scope.templateDir = baseDir + widget.options.template + '/' + widget.options.template + '.html';

                    //////////

                    // Methods
                    $scope.flipWidget = flipWidget;

                    /**
                     * Flip the widget
                     */
                    function flipWidget()
                    {
                        widget.options.flipped = !widget.options.flipped;
                    }
                };
            }
        };
    }
})();