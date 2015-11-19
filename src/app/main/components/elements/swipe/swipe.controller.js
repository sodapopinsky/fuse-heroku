(function ()
{
    'use strict';

    angular
        .module('app.components.elements.swipe')
        .controller('SwipeController', SwipeController);

    /** @ngInject */
    function SwipeController($mdDialog)
    {
        var vm = this;

        // Data

        // Methods
        vm.swipeAction = swipeAction;

        //////////

        function swipeAction(direction, ev)
        {
            $mdDialog.show($mdDialog.alert()
                    .content('You swiped ' + direction + ' !!')
                    .ok('Great')
                    .targetEvent(ev)
            );
        }

    }

})();