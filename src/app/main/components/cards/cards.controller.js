(function ()
{
    'use strict';

    angular
        .module('app.components')
        .controller('CardsController', CardsController);

    /** @ngInject */
    function CardsController(api)
    {
        var vm = this;

        // Data
        api.cards.get({}, function (response)
        {
            vm.cards = response.data;
        });

        // Methods

        //////////
    }
})();