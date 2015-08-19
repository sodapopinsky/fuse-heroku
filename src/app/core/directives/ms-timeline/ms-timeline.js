(function ()
{
    'use strict';

    angular.module('fuse')
        .directive('msTimeline', msTimelineDirective);

    /** @ngInject */
    function msTimelineDirective()
    {
        return {
            scope  : true,
            compile: function (tElement)
            {
                tElement.addClass('ms-timeline');

                return function postLink($scope, $element)
                {
                    var scrollEl = angular.element('#content > md-content');

                    // Set the timelineItemLimit
                    $scope.timelineItemLimit = 1;

                    $scope.$on('msCard::cardTemplateLoaded', function (event, args)
                    {
                        var cardEl = angular.element(args[0]);

                        // Test the cardEl for the existence of an image element(s)
                        var imageEl = cardEl.find('img');

                        // If there are images, wait for them to load before doing anything else
                        if ( imageEl.length > 0 )
                        {
                            imageEl.on('load', function ()
                            {
                                // Increase the limit if needed
                                if ( shouldIncreaseLimit() )
                                {
                                    $scope.$evalAsync(function ()
                                    {
                                        $scope.timelineItemLimit++;
                                    });
                                }
                            });
                        }
                        else
                        {
                            // Increase the limit if needed
                            if ( shouldIncreaseLimit() )
                            {
                                $scope.$evalAsync(function ()
                                {
                                    $scope.timelineItemLimit++;
                                });
                            }
                        }
                    });

                    // Increase the limit onScroll if needed
                    scrollEl.on('scroll', function ()
                    {
                        if ( scrollEl.scrollTop() + scrollEl.height() >= $element.height() + 160 )
                        {
                            $scope.$evalAsync(function ()
                            {
                                $scope.timelineItemLimit++;
                            });
                        }
                    });

                    function shouldIncreaseLimit()
                    {
                        return ($element.height() <= scrollEl.height());
                    }
                };
            }
        };
    }
})();