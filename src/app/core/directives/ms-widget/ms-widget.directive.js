(function ()
{
    'use strict';

    angular.module('app.core')
        .controller('MsWidgetTrayController', MsWidgetTrayController)
        .directive('msWidgetTray', msWidgetTrayDirective)
        .directive('msWidget', msWidgetDirective);

    /** @ngInject */
    function MsWidgetTrayController($scope)
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
        function calculateGridSize(width, columns)
        {
            // Calculate and set the grid size
            vm.gridSize = Math.floor(Math.floor(width) / parseInt(columns));

            // Broadcast an event
            $scope.$broadcast('msWidgetTray::gridSizeCalculated');
        }
    }

    /** @ngInject */
    function msWidgetTrayDirective()
    {
        return {
            restrict  : 'E',
            scope     : true,
            controller: 'MsWidgetTrayController',
            compile   : function (tElement)
            {
                tElement.addClass('ms-widget-tray');

                return function postLink($scope, $element, $attrs, MsWidgetTrayCtrl)
                {
                    // Watch element width
                    $scope.$watch(function ()
                        {
                            return $element[0].getBoundingClientRect().width;
                        },
                        function (current, old)
                        {
                            if ( angular.isUndefined(current) )
                            {
                                return;
                            }

                            // Calculate grid size every time the width changes
                            MsWidgetTrayCtrl.calculateGridSize(current, $attrs.trayColumns);
                        }
                    );
                };
            }
        };
    }

    /** @ngInject */
    function msWidgetDirective()
    {
        return {
            restrict: 'E',
            require : '^msWidgetTray',
            scope   : {
                widget: '=ngModel'
            },
            template: '<div class="widget-container" ng-include="templateDir"></div>',
            compile : function (tElement)
            {
                tElement.addClass('ms-widget');

                return function postLink($scope, $element, $attrs, MsWidgetTrayCtrl)
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

                    // Update widget width and height every time grid size changes
                    $scope.$on('msWidgetTray::gridSizeCalculated', function ()
                    {
                        $element.outerWidth(MsWidgetTrayCtrl.gridSize);
                        $element.outerHeight(MsWidgetTrayCtrl.gridSize);
                    });

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
                };
            }
        };
    }
})();