(function ()
{
    'use strict';

    angular
        .module('app.core')
        .factory('fuseHelper', fuseHelper);

    /** @ngInject */
    function fuseHelper()
    {
        // Private variables
        var mobileDetect = new MobileDetect(window.navigator.userAgent);

        var service = {
            isMobile: isMobile
        };

        return service;

        //////////

        /**
         * Return if current device is a
         * mobile device or not
         */
        function isMobile()
        {
            return mobileDetect.mobile();
        }
    }
}());