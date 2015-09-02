(function ()
{
    'use strict';

    angular
        .module('app.components.maps')
        .controller('MapsController', MapsController);

    function MapsController(uiGmapGoogleMapApi, $scope, $state)
    {
        var vm = this;

        // Data

        // Methods

        //////////

        uiGmapGoogleMapApi.then(function (maps)
        {
            vm.simpleMap = {
                center: {
                    latitude : -34.397,
                    longitude: 150.644
                },
                zoom  : 8
            };

            vm.satelliteMap = {
                center : {
                    latitude : -34.397,
                    longitude: 150.644
                },
                zoom   : 8,
                options: {
                    mapTypeId: maps.MapTypeId.SATELLITE
                }
            };

            vm.terrainMap = {
                center : {
                    latitude : -34.397,
                    longitude: 150.644
                },
                zoom   : 8,
                options: {
                    mapTypeId: maps.MapTypeId.TERRAIN
                }
            };

            vm.simpleMarkerMap = {
                center: {
                    latitude : -25.363882,
                    longitude: 131.044922
                },
                zoom  : 8,
                marker: {
                    id    : 0,
                    coords: {
                        latitude : -25.363882,
                        longitude: 131.044922
                    }
                }
            };

            vm.customMarkerMap = {
                center: {
                    latitude : -25.363882,
                    longitude: 131.044922
                },
                zoom  : 8,
                marker: {
                    id     : 0,
                    coords : {
                        latitude : -25.363882,
                        longitude: 131.044922
                    },
                    options: {
                        icon: {
                            anchor: new maps.Point(36, 36),
                            origin: new maps.Point(0, 0),
                            url   : '//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                        }
                    }
                }
            };

        });
    }

})();