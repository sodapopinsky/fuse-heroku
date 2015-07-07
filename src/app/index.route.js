(function () {
    'use strict';

    angular
        .module('fuse')
        .config(routeConfig);
    /** @ngInject */
    function routeConfig($routeProvider, $stateProvider, $urlRouterProvider) {

        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider

            .state('dashboard', {
                url: '/',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/default.html'
                    },
                    'sideNav@dashboard': {
                        templateUrl: 'app/sidenav/navigation/nav-sidenav.html',
                        controller: 'navSidenavController as vm'
                    },
                    'main@dashboard': {
                        templateUrl: 'app/main/dashboard/dashboard.html',
                        controller: 'dashboardController as vm'
                    }
                }
            })
            .state('colors', {
                url: '/colors',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/default.html'
                    },
                    'main@dashboard': {
                        templateUrl: 'app/main/colors/colors.html',
                        controller: 'colorsController as vm'
                    }
                }

            })
            .state('icons', {
                url: '/icons',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/default.html'
                    },
                    'main@dashboard': {
                        templateUrl: 'app/main/icons/icons.html',
                        controller: 'iconsController as vm'
                    }
                }
            })
            .state('mail', {
                url: '/mail',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/default.html'
                    },
                    'main@dashboard': {
                        templateUrl: 'app/main/mail/mail.html',
                        controller: 'mailController as vm'
                    }
                }
            })
            .state('calendar', {
                url: '/calendar',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/default.html'
                    },
                    'main@calendar': {
                        templateUrl: 'app/main/calendar/calendar.html',
                        controller: 'calendarController as vm'
                    }
                }
            })
            .state('todo', {
                url: '/todo',
                templateUrl: 'app/main/todo/todo.html',
                controller: 'todoController as vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/main/pages/auth/login/login.html'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'app/main/pages/auth/register/register.html'
            });

    }

})();
