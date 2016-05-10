(function ()
{
    'use strict';

    angular
        .module('app.core')
        .filter('filterThreadsByStatus', filterThreadsByStatus);

    /** @ngInject */
    function filterThreadsByStatus()
    {
        return function (items, status)
        {
            var filtered = [];

            items.map(function (item)
            {
                if ( item[status] === true )
                {
                    filtered.push(item);
                }
            });

            return filtered;
        };
    }

})();