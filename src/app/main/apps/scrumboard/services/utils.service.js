(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .factory('utils', utilsService);

    /** @ngInject */
    function utilsService()
    {
        var self = {
            /**
             * Generates Unique Id
             * @returns {*}
             */
            guidGenerator: function ()
            {
                var S4 = function ()
                {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                return (S4() + S4() + S4() + S4() + S4() + S4());
            },
            /**
             * Check Item Exists in List
             * @param item
             * @param list
             * @returns {boolean}
             */
            exists       : function (item, list)
            {
                return list.indexOf(item) > -1;
            },
            /**
             * Toggle In Array (push or splice)
             * @param item
             * @param array
             */
            toggleInArray: function (item, array)
            {
                if ( array.indexOf(item) == -1 )
                {
                    array.push(item);
                }
                else
                {
                    array.splice(array.indexOf(item), 1);
                }
            }
        }

        return self;
    }
})();