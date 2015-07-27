(function ()
{
    'use strict';

    angular.module('fuse')
        .directive('msTimeline', msTimeline);

    /** @ngInject */
    function msTimeline($window, $timeout)
    {
        return {
            scope: true,
            link : function ($scope, $element)
            {
                // Set onScreen to true
                $scope.onScreen = true;

                var windowEl = angular.element($window);
                var scrollEl = angular.element('#main');

                // Set onScreen true if element is on screen
                if ( $element.offset().top > windowEl.scrollTop() + windowEl.height() * 0.70 )
                {
                    $scope.onScreen = false;
                }

                // On scroll
                scrollEl.on('scroll', function ()
                {
                    if ( $scope.onScreen )
                    {
                        return;
                    }

                    if ( $element.offset().top <= windowEl.scrollTop() + windowEl.height() * 0.70 )
                    {
                        $element.addClass('animate');

                        $timeout(function ()
                        {
                            $scope.onScreen = true;
                        });
                    }
                });
            }
        };
    }
})();