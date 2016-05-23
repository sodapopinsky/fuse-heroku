(function ()
{
    'use strict';

    angular
        .module('app.notes')
        .factory('NotesService', NotesService);

    /** @ngInject */
    function NotesService()
    {
        var service = {
            data      : [],
            addNote   : addNote,
            updateNote: updateNote,
            deleteNote: deleteNote,
            getData   : getData
        };

        /**
         * Add Note
         * @param note
         */
        function addNote(note)
        {
            service.data.push(note);
        }

        /**
         * Update Note
         * @param note
         */
        function updateNote(note)
        {
            for ( var i = 0; i < service.data.length; i++ )
            {
                if ( service.data[i].id === note.id )
                {
                    service.data[i] = note;
                }
            }
        }

        /**
         * Delete Note
         * @param note
         */
        function deleteNote(note)
        {
            for ( var i = 0; i < service.data.length; i++ )
            {
                if ( service.data[i].id === note.id )
                {
                    service.data.splice(i, 1);
                }
            }
        }

        /**
         * Get service data
         * @returns {Array}
         */
        function getData()
        {
            return service.data;
        }

        return service;

    }
})();