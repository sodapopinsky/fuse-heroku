(function ()
{
    'use strict';

    angular.module('app.core')
        .controller('MsWidgetController', MsWidgetController)
        .directive('msWidget', msWidgetDirective)
        .directive('msWidgetFront', msWidgetFrontDirective)
        .directive('msWidgetBack', msWidgetBackDirective);

    /** @ngInject */
    function MsWidgetController($scope)
    {
        var vm = this;

        // Data
        vm.element = undefined;
        vm.flipped = false;

        // Methods
        vm.flip = flip;
        vm.init = init;

        //////////

        /**
         * Init the controller with the element
         *
         * @param element
         */
        function init(element)
        {
            vm.element = element;
        }

        /**
         * Flip the widget
         */
        function flip()
        {
            if ( !isFlippable() )
            {
                return;
            }

            // Toggle flipped status
            vm.flipped = !vm.flipped;

            // Toggle the 'flipped' class
            vm.element.toggleClass('flipped', vm.flipped);
        }

        /**
         * Check if widget is flippable
         *
         * @returns {boolean}
         */
        function isFlippable()
        {
            return (angular.isDefined($scope.flippable) && $scope.flippable === true);
        }
    }

    /** @ngInject */
    function msWidgetDirective()
    {
        return {
            restrict        : 'E',
            scope           : {
                flippable: '=?'
            },
            controller      : 'MsWidgetController',
            transclude      : true,
            template        : '<div class="widget" ng-transclude></div>',
            compile         : function (tElement)
            {
                tElement.addClass('ms-widget');

                return function postLink($scope, $element, $attrs, MsWidgetCtrl)
                {
                    // Init the controller with element
                    MsWidgetCtrl.init($element);

                    //////////
                };
            }
        };
    }

    /** @ngInject */
    function msWidgetFrontDirective()
    {
        return {
            restrict  : 'E',
            require   : '^msWidget',
            transclude: true,
            template  : '<div ng-transclude></div>',
            compile   : function (tElement)
            {
                tElement.addClass('ms-widget-front');

                return function postLink($scope, $element, $attrs, MsWidgetCtrl)
                {
                    // Methods
                    $scope.flipWidget = MsWidgetCtrl.flip;
                };
            }
        };
    }

    /** @ngInject */
    function msWidgetBackDirective()
    {
        return {
            restrict  : 'E',
            require   : '^msWidget',
            transclude: true,
            template  : '<div ng-transclude></div>',
            compile   : function (tElement)
            {
                tElement.addClass('ms-widget-back');

                return function postLink($scope, $element, $attrs, MsWidgetCtrl)
                {
                    // Methods
                    $scope.flipWidget = MsWidgetCtrl.flip;
                };
            }
        };
    }

})();