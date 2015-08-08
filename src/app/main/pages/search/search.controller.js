(function ()
{
    'use strict';

    angular.module('app.pages.search')
        .controller('SearchController', SearchController);

    /** @ngInject */
    function SearchController(api)
    {
        var vm = this;

        // Data
        vm.colors = ['md-blue-bg', 'md-blue-grey-bg', 'md-orange-bg', 'md-pink-bg', 'md-purple-bg'];

        api.search.articles.get({}, function (response)
        {
            vm.articles = response.data;
        });

        api.search.mails.get({}, function (response)
        {
            vm.mails = response.data;
        });

        api.search.users.get({}, function (response)
        {
            vm.users = response.data;
        });

        api.search.contacts.get({}, function (response)
        {
            vm.contacts = response.data;
        });

        // Methods

        //////////
    }

})();
