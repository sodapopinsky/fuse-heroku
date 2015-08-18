(function ()
{
    'use strict';

    angular.module('fuse')
        .directive('msTimelineItem', msTimelineItem);

    /** @ngInject */
    function msTimelineItem($window, $timeout)
    {
        return {
            scope: true,
            link : function ($scope, $element)
            {

              /*  $scope.$on('$includeContentLoaded', function (el)
                {
                    console.log('// it has loaded!');
                    console.log($element.outerHeight());
                        console.log($element.find('img'));


                    $element.find('img').bind('load', function ()
                    {

                        console.log('binded');
                        console.log($element.parent().outerHeight());

                    });

                });*/
                //$scope.on('$cardLoaded', );
                //$scope.$evalAsync(function ()
                //{
                //    console.log($element.find('img'));
                //
                //});


                $element.bind('load', function ()
                {
                    //$scope.$emit('$imageLoaded');
                    //});
                    //$timeout(function ()
                    //{
                    console.log($element.outerHeight());
                    console.log($element[0].clientHeight);
                });
            }
        };
    }
})();
