(function ()
{
    'use strict';

    angular
        .module('app.core')
        .factory('msUtils', msUtils);

    /** @ngInject */
    function msUtils($window)
    {
        // Private variables
        var mobileDetect = new MobileDetect($window.navigator.userAgent);

        var service = {
            exists       : exists,
            guidGenerator: guidGenerator,
            isMobile     : isMobile,
            toggleInArray: toggleInArray
        };

        return service;

        //////////

        /**
         * Check if item exists in a list
         *
         * @param item
         * @param list
         * @returns {boolean}
         */
        function exists(item, list)
        {
            return list.indexOf(item) > -1;
        }

        /**
         * Generates a globally unique id
         *
         * @returns {*}
         */
        function guidGenerator()
        {
            var S4 = function ()
            {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + S4() + S4() + S4() + S4());
        }

        /**
         * Return if current device is a
         * mobile device or not
         */
        function isMobile()
        {
            return mobileDetect.mobile();
        }

        /**
         * Toggle in array (push or splice)
         *
         * @param item
         * @param array
         */
        function toggleInArray(item, array)
        {
            if ( array.indexOf(item) == -1 )
            {
                array.push(item);
            }
            else
            {
                array.splice(array.indexOf(item), 1);
            }
        }
    }
}());