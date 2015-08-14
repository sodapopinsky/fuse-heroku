(function ()
{
    'use strict';

    angular.module('fuse')
        .directive('msScroll', msScroll);

    /** @ngInject */
    function msScroll($timeout)
    {
        return {
            restrict: 'AE',
            compile : function (tElement)
            {
                // Do not replace scrollbars on mobile devices
                var md = new MobileDetect(window.navigator.userAgent);

                if ( md.mobile() )
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
                    if ( $attrs.msScroll )
                    {
                        options = $scope.$eval($attrs.msScroll);
                    }

                    // Initialize the perfectScrollbar
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

                    // Update the scrollbar
                    function updateScrollbar()
                    {
                        $element.perfectScrollbar('update');
                    }

                    // Cleanup on $destroy
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