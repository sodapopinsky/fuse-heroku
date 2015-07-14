(function () {
    'use strict';

    angular
        .module('fuse')
        .config(routeConfig);
    /** @ngInject */
    function routeConfig($routeProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $stateProvider
            .state('layout', {
                abstract: true
            })

            .state('layout.basic', {
                abstract: true,
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    }
                }
            })

            .state('layout.default', {
                abstract: true,
                views: {
                    'app@': {
                        templateUrl: 'app/layout/default.html'
                    },
                    'toolbar@layout.default': {
                        templateUrl: 'app/toolbar/toolbar.html',
                        controller: 'toolbarController as vm'
                    },
                    'sidenavLeft@layout.default': {
                        templateUrl: 'app/sidenav/navigation/nav-sidenav.html',
                        controller: 'navSidenavController as vm'
                    },
                    'sidenavRight@layout.default': {
                        templateUrl: 'app/sidenav/notification/notification-sidenav.html',
                        controller: 'notificationSidenavController as vm'
                    },
                    'themeChanger@layout.default': {
                        templateUrl: 'app/components/theme-changer/theme-changer.html',
                        controller: 'ThemeChangerController as vm'
                    }
                }
            })

            .state('layout.default.dashboard', {
                url: '/',
                views: {
                    'main': {
                        templateUrl: 'app/main/dashboard/dashboard.html',
                        controller: 'dashboardController as vm'
                    }
                }
            })
            .state('layout.default.mail', {
                url: '/mail',
                views: {
                    'main': {
                        templateUrl: 'app/main/mail/mail.html',
                        controller: 'mailController as vm'
                    }
                }
            })
            .state('layout.default.calendar', {
                url: '/calendar',
                views: {
                    'main': {
                        templateUrl: 'app/main/calendar/calendar.html',
                        controller: 'calendarController as vm'
                    }
                }
            })
            .state('layout.default.todo', {
                url: '/todo',
                views: {
                    'main': {
                        templateUrl: 'app/main/todo/todo.html',
                        controller: 'todoController as vm'
                    }
                }
            })
            .state('layout.default.colors', {
                url: '/colors',
                views: {
                    'main': {
                        templateUrl: 'app/main/colors/colors.html',
                        controller: 'colorsController as vm'
                    }
                }

            })
            .state('layout.default.icons', {
                url: '/icons',
                views: {
                    'main': {
                        templateUrl: 'app/main/icons/icons.html',
                        controller: 'iconsController as vm'
                    }
                }
            })
            .state('layout.basic.login', {
                url: '/login',
                views: {
                    'main': {
                        templateUrl: 'app/main/pages/auth/login/login.html'
                    }
                }
            })
            .state('layout.basic.register', {
                url: '/register',
                views: {
                    'main': {
                        templateUrl: 'app/main/pages/auth/register/register.html'
                    }
                }
            })
            .state('layout.basic.forgot-password', {
                url: '/forgot-password',
                views: {
                    'main': {
                        templateUrl: 'app/main/pages/auth/forgot-password/forgot-password.html'
                    }
                }
            })
            .state('layout.basic.lock', {
                url: '/lock',
                views: {
                    'main': {
                        templateUrl: 'app/main/pages/auth/lock/lock.html'
                    }
                }
            })
            .state('layout.basic.coming-soon', {
                url: '/coming-soon',
                views: {
                    'main': {
                        templateUrl: 'app/main/pages/coming-soon/coming-soon.html'
                    }
                }
            })
            .state('layout.basic.404', {
                url: '/error-404',
                views: {
                    'main': {
                        templateUrl: 'app/main/pages/error/error-404.html'
                    }
                }
            })
            .state('layout.basic.500', {
                url: '/error-500',
                views: {
                    'main': {
                        templateUrl: 'app/main/pages/error/error-500.html'
                    }
                }
            })
            .state('layout.default.price-tables', {
                url: '/price-tables',
                views: {
                    'main': {
                        templateUrl: 'app/main/pages/price-tables/price-tables.html'
                    }
                }
            });

    }

})();
