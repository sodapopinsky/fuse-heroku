(function() {
  'use strict';

  angular
    .module('fuse')
    .config(routeConfig);
    /** @ngInject */
  function routeConfig($routeProvider) {
      $routeProvider
          .when('/', {
              templateUrl: 'app/main/dashboard/dashboard.html',
              controller: 'dashboardController as vm'
          })
          .when('/colors', {
              templateUrl: 'app/main/colors/colors.html',
              controller: 'colorsController as vm'
          })
          .when('/icons', {
              templateUrl: 'app/main/icons/icons.html',
              controller: 'iconsController as vm'
          })
          .when('/mail', {
              templateUrl: 'app/main/mail/mail.html',
              controller: 'mailController as vm'
          })
          .when('/todo', {
              templateUrl: 'app/main/todo/todo.html',
              controller: 'todoController as vm'
          })
          .otherwise({
              redirectTo: '/'
          });
  }

})();
