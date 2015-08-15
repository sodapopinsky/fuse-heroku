(function ()
{
    'use strict';

    angular
        .module('app.core')
        .provider('fuseConfig', fuseConfig);

    /** @ngInject */
    function fuseConfig()
    {
        // Default configuration
        var fuseConfiguration = {
            'disableMdInkRippleOnMobile'     : true,
            'disableCustomScrollbarsOnMobile': true
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
            fuseConfiguration = angular.extend({}, fuseConfiguration, configuration);
        }

        /**
         * Service
         */
        this.$get = function ()
        {
            var service = {
                config: getConfig
            };

            return service;

            //////////

            /**
             * Return a config value
             */
            function getConfig(configName)
            {
                if ( angular.isUndefined(fuseConfiguration[configName]) )
                {
                    return false;
                }

                return fuseConfiguration[configName];
            }
        };
    }
})();
