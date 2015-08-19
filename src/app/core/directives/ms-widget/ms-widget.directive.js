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
            template  : '<div class="widget-container" ng-include="templateDir"></div>',
            compile   : function (tElement, tAttrs)
            {
                tElement.addClass('ms-widget');

                return function postLink($scope, $element, $attrs, MsWidgetCtrl)
                {
                    var widget = $scope.widget;

                    // Add classes based on the template
                    $element.addClass('widget-' + widget.options.template);

                    // Load the selected template
                    var baseDir = 'app/core/directives/ms-widget/templates/';
                    $scope.templateDir = baseDir + widget.options.template + '/' + widget.options.template + '.html';

                    /**
                     * Initialize the widget
                     */
                    function initWidget()
                    {
                        // Set the current size
                        setWidgetSize(widget.options.currentSize);
                    }

                    // Init the widget
                    initWidget();

                    // Methods
                    $scope.flipWidget = flipWidget;
                    $scope.setWidgetSize = setWidgetSize;

                    //////////

                    /**
                     * Flip the widget
                     */
                    function flipWidget()
                    {
                        widget.options.flipped = !widget.options.flipped;
                    }

                    /**
                     * Set widget size
                     *
                     * @param size
                     */
                    function setWidgetSize(size)
                    {

                        // Remove the old size class
                        $element.removeClass(widget.options.currentSize);

                        // Update the size and class
                        widget.options.currentSize = size;
                        $element.addClass(size);
                    }

                    // Watchers
                    $scope.$watch(function ()
                        {
                            return $element.width();
                        },
                        function (current, old)
                        {
                            if ( angular.isUndefined(current) )
                            {
                                return;
                            }

                            $element.height(current);
                        });
                };
            }
        };
    }

})();