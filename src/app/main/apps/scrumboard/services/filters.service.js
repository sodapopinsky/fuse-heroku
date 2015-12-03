(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .factory('CardFilters', CardFiltersService);

    /** @ngInject */
    function CardFiltersService()
    {
        var self = {
            name   : '',
            labels : [],
            members: [],
            clear  : function ()
            {
                self.name = '';
                self.labels = [];
                self.members = [];
            },
            isOn   : function ()
            {
                return (self.name === '' && self.labels.length === 0 && self.members.length === 0 ) ? false : true;
            }
        }

        return self;
    }
})();