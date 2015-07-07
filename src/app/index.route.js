(function ()
{
    'use strict';

    angular
        .module('fuse')
        .config(routeConfig);
    /** @ngInject */
    function routeConfig($routeProvider, $stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', {
                abstract: true
            })

            .state('app.basic-layout', {
                abstract: true,
                'app@'  : {
                    templateUrl: 'app/layout/basic.html'
                },
            })

            .state('app.default-layout', {
                abstract: true,
                views   : {
                    'app@'                          : {
                        templateUrl: 'app/layout/default.html'
                    },
                    'toolbar@layouts.default'       : {
                        templateUrl: 'app/toolbar/toolbar.html',
                        controller : 'toolbarController as vm'
                    },
                    'sidenavLeft@layouts.default'   : {
                        templateUrl: 'app/sidenav/navigation/nav-sidenav.html',
                        controller : 'navSidenavController as vm'
                    },
                    'themeCustomize@layouts.default': {
                        templateUrl: 'app/components/theme-change/theme-change.html',
                        controller : 'ThemeChangeController as vm'
                    }
                }
            })

            .state('app.default-layout.dashboard', {
                url  : '/',
                views: {
                    'main': {
                        templateUrl: 'app/main/dashboard/dashboard.html',
                        controller : 'dashboardController as vm'
                    }
                }
            })
            .state('app.default-layout.mail', {
                url  : '/mail',
                views: {
                    'main': {
                        templateUrl: 'app/main/mail/mail.html',
                        controller : 'mailController as vm'
                    }
                }
            })
            .state('app.default-layout.calendar', {
                url  : '/calendar',
                views: {
                    'main': {
                        templateUrl: 'app/main/calendar/calendar.html',
                        controller : 'calendarController as vm'
                    }
                }
            })
            .state('app.default-layout.todo', {
                url  : '/todo',
                views: {
                    'main': {
                        templateUrl: 'app/main/todo/todo.html',
                        controller : 'todoController as vm'
                    }
                }
            })
            .state('app.default-layout.colors', {
                url  : '/colors',
                views: {
                    'main': {
                        templateUrl: 'app/main/colors/colors.html',
                        controller : 'colorsController as vm'
                    }
                }

            })
            .state('app.deafult-layout.icons', {
                url  : '/icons',
                views: {
                    'main': {
                        templateUrl: 'app/main/icons/icons.html',
                        controller : 'iconsController as vm'
                    }
                }
            })
            .state('app.basic-layout.login', {
                url        : '/login',
                templateUrl: 'app/main/pages/auth/login/login.html'
            })
            .state('register', {
                url        : '/register',
                templateUrl: 'app/main/pages/auth/register/register.html'
            });

    }

})();
