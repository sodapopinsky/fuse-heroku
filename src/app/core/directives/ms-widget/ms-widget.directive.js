(function ()
{
    'use strict';

    angular.module('app.core')
        .controller('MsWidgetsController', MsWidgetsController)
        .directive('msWidgets', msWidgetsDirective)
        .directive('msWidgetTray', msWidgetTrayDirective)
        .directive('msWidget', msWidgetDirective);

    /** @ngInject */
    function MsWidgetsController($scope)
    {
        var vm = this;

        // Data
        vm.gridSize = 0;

        // Methods
        vm.calculateGridSize = calculateGridSize;

        //////////

        /**
         * Calculate the grid size
         *
         * @param width
         * @param columns
         */
        function calculateGridSize(width)
        {
            // Calculate and set the grid size
            vm.gridSize = Math.floor(Math.floor(width) / parseInt(vm.options.columns));

            // Broadcast an event
            $scope.$broadcast('msWidgets::gridSizeCalculated');
        }
    }

    /** @ngInject */
    function msWidgetsDirective()
    {
        return {
            restrict        : 'E',
            scope           : true,
            bindToController: {
                options: '='
            },
            controller      : 'MsWidgetsController',
            controllerAs    : 'MsWidgetsCtrl',
            compile         : function (tElement)
            {
                tElement.addClass('ms-widgets');

                return function postLink($scope, $element, $attrs, MsWidgetsCtrl)
                {
                    // Watch element width
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

                            // Calculate grid size every time the width changes
                            calculateGridSize();
                        }
                    );

                    /**
                     * Calculate grid size
                     */
                    function calculateGridSize()
                    {
                        var trayEl = $element.children('.ms-widget-tray');
                        MsWidgetsCtrl.calculateGridSize(trayEl[0].getBoundingClientRect().width);
                    }
                };
            }
        };
    }

    /** @ngInject */
    function msWidgetTrayDirective()
    {
        return {
            restrict: 'E',
            require : '^msWidgets',
            compile : function (tElement)
            {
                tElement.addClass('ms-widget-tray');

                return function postLink($scope, $element, $attrs, MsWidgetsCtrl)
                {

                };
            }
        };
    }

    /** @ngInject */
    function msWidgetDirective()
    {
        return {
            restrict: 'E',
            require : '^msWidgets',
            scope   : {
                widget: '='
            },
            template: '<div class="widget-container" ng-include="templateDir"></div>',
            compile : function (tElement)
            {
                tElement.addClass('ms-widget');

                return function postLink($scope, $element, $attrs, MsWidgetsCtrl)
                {
                    // Variables
                    var widget = $scope.widget;

                    /* Initial setup */

                    // Add classes based on the template
                    $element.addClass('widget-' + widget.options.template);

                    // Load the selected template
                    var baseDir = 'app/core/directives/ms-widget/templates/';
                    $scope.templateDir = baseDir + widget.options.template + '/' + widget.options.template + '.html';

                    // Set the current size
                    setWidgetSize(widget.options.size);

                    //////////

                    // Methods
                    $scope.flipWidget = flipWidget;
                    $scope.setWidgetSize = setWidgetSize;

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
                        $element.removeClass(widget.options.size);

                        // Update the size
                        widget.options.size = size;

                        // Calculate the widget size
                        calculateWidgetSize();

                        // Add new size class
                        $element.addClass(size);
                    }


                    function calculateWidgetSize()
                    {
                        var width = MsWidgetsCtrl.options.sizes[widget.options.size].x * MsWidgetsCtrl.gridSize;
                        var height = MsWidgetsCtrl.options.sizes[widget.options.size].y * MsWidgetsCtrl.gridSize;

                        $element.outerWidth(width);
                        $element.outerHeight(height);
                    }

                    // Listeners

                    // Update widget width and height every time grid size changes
                    $scope.$on('msWidgets::gridSizeCalculated', function ()
                    {
                        console.log('msWidgets::gridSizeCalculated');

                        calculateWidgetSize();
                    });
                };
            }
        };
    }
})();