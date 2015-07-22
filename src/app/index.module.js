(function() {
  'use strict';

    /**
     * @ngdoc overview
     * @name fuse
     * @description
     * # fuse
     *
     * Main module of the application.
     */
    angular
        .module('fuse', [
            'app.core',
            'app.mail',
            'app.calendar',
            'app.todo',
            'app.profile',
            'app.fileManager',
            'app.invoice'
        ]);

})();
