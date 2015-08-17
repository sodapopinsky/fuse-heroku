(function ()
{
    'use strict';

    angular.module('fuse')
        .provider('msScrollConfig', msScrollConfigProvider)
        .directive('msScroll', msScrollDirective);

    /** @ngInject */
    function msScrollConfigProvider()
    {
        // Default configuration
        var defaultConfiguration = {
            wheelSpeed            : 1,
            wheelPropagation      : false,
            swipePropagation      : true,
            minScrollbarLength    : null,
            maxScrollbarLength    : null,
            useBothWheelAxes      : false,
            useKeyboard           : true,
            suppressScrollX       : false,
            suppressScrollY       : false,
            scrollXMarginOffset   : 0,
            scrollYMarginOffset   : 0,
            stopPropagationOnClick: true
        };

        // Methods
        this.config = config;

        //////////

        /**
         * Extend default configuration with the given one
         *
         * @param configuration
         */
        function config(configuration)
        {
            defaultConfiguration = angular.extend({}, defaultConfiguration, configuration);
        }

        /**
         * Service
         */
        this.$get = function ()
        {
            var service = {
                getConfig: getConfig
            };

            return service;

            //////////

            /**
             * Return the config
             */
            function getConfig()
            {
                return defaultConfiguration;
            }
        };
    }

    /** @ngInject */
    function msScrollDirective($timeout, msScrollConfig, fuseConfig, fuseHelper)
    {
        return {
            restrict: 'AE',
            compile : function (tElement)
            {
                // Do not replace scrollbars if
                // 'disableCustomScrollbars' config enabled
                if ( fuseConfig.config('disableCustomScrollbars') )
                {
                    return false;
                }

                // Do not replace scrollbars on mobile devices
                // if 'disableCustomScrollbarsOnMobile' config enabled
                if ( fuseConfig.config('disableCustomScrollbarsOnMobile') && fuseHelper.isMobile() )
                {
                    return false;
                }

                // Add class
                tElement.addClass('ms-scroll');

                return function postLink($scope, $element, $attrs)
                {
                    var options = {};

                    // If options supplied, evaluate the given
                    // value. This is because we don't want to
                    // have an isolated scope but still be able
                    // to use scope variables.
                    // We don't want an isolated scope because
                    // we should be able to use this everywhere
                    // especially with other directives
                    if ( $attrs.msScrollDirective )
                    {
                        options = $scope.$eval($attrs.msScrollDirective);
                    }

                    // Extend the given config with the ones from provider
                    options = angular.extend({}, msScrollConfig.getConfig(), options);

                    // Initialize the scrollbar
                    $timeout(function ()
                    {
                        $element.perfectScrollbar(options);
                    }, 0);

                    // Update the scrollbar on element mouseenter
                    $element.on('mouseenter', updateScrollbar);

                    // Watch scrollHeight and update
                    // the scrollbar if it changes
                    $scope.$watch(function ()
                    {
                        return $element.prop('scrollHeight');
                    }, function (current, old)
                    {
                        if ( angular.isUndefined(current) || angular.equals(current, old) )
                        {
                            return;
                        }

                        updateScrollbar();
                    });

                    /**
                     * Update the scrollbar
                     */
                    function updateScrollbar()
                    {
                        $element.perfectScrollbar('update');
                    }

                    // Cleanup on destroy
                    $scope.$on('$destroy', function ()
                    {
                        $element.off('mouseenter');
                        $element.perfectScrollbar('destroy');
                    });
                };
            }
        };
    }
})();