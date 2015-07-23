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
            .state('app', {
                abstract: true,
                views: {
                    'app@': {
                        templateUrl: 'app/layout/default.html'
                    },
                    'toolbar@app': {
                        templateUrl: 'app/toolbar/toolbar.html',
                        controller: 'toolbarController as vm'
                    },
                    'sidenavLeft@app': {
                        templateUrl: 'app/sidenav/navigation/nav-sidenav.html',
                        controller: 'navSidenavController as vm'
                    },
                    'sidenavRight@app': {
                        templateUrl: 'app/sidenav/notification/notification-sidenav.html',
                        controller: 'notificationSidenavController as vm'
                    },
                    'themeChanger@app': {
                        templateUrl: 'app/components/theme-changer/theme-changer.html',
                        controller: 'ThemeChangerController as vm'
                    }
                }
            })
            
            .state('app.dashboard', {
                url: '/',
                views: {
                    'main': {
                        templateUrl: 'app/main/dashboard/dashboard.html',
                        controller: 'dashboardController as vm'
                    }
                }
            })
            .state('app.mail', {
                url: '/mail',
                views: {
                    'main': {
                        templateUrl: 'app/main/mail/mail.html',
                        controller: 'mailController as vm'
                    }
                }
            })
            .state('app.calendar', {
                url: '/calendar',
                views: {
                    'main': {
                        templateUrl: 'app/main/calendar/calendar.html',
                        controller: 'calendarController as vm'
                    }
                }
            })
            .state('app.todo', {
                url: '/todo',
                views: {
                    'main': {
                        templateUrl: 'app/main/todo/todo.html',
                        controller: 'todoController as vm'
                    }
                }
            })
            .state('app.colors', {
                url: '/colors',
                views: {
                    'main': {
                        templateUrl: 'app/main/colors/colors.html',
                        controller: 'colorsController as vm'
                    }
                }

            })
            .state('app.icons', {
                url: '/icons',
                views: {
                    'main': {
                        templateUrl: 'app/main/icons/icons.html',
                        controller: 'iconsController as vm'
                    }
                }
            })
            .state('app.standartTable', {
                url: '/standart-table',
                views: {
                    'main': {
                        templateUrl: 'app/main/tables/standart-table/standart-table.html',
                        controller: 'standartTableController as vm'
                    }
                }
            })
            .state('app.login', {
                url: '/login',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.login': {
                        templateUrl: 'app/main/pages/auth/login/login.html'
                    }
                }
            })
            .state('app.register', {
                url: '/register',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.register': {
                        templateUrl: 'app/main/pages/auth/register/register.html'
                    }
                }
            })
            .state('app.forgot-password', {
                url: '/forgot-password',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.forgot-password': {
                        templateUrl: 'app/main/pages/auth/forgot-password/forgot-password.html'
                    }
                }
            })
            .state('app.lock', {
                url: '/lock',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.lock': {
                        templateUrl: 'app/main/pages/auth/lock/lock.html'
                    }
                }
            })
            .state('app.coming-soon', {
                url: '/coming-soon',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.coming-soon': {
                        templateUrl: 'app/main/pages/coming-soon/coming-soon.html'
                    }
                }
            })
            .state('app.404', {
                url: '/error-404',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.404': {
                        templateUrl: 'app/main/pages/error/error-404.html'
                    }
                }
            })
            .state('app.500', {
                url: '/error-500',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.500': {
                        templateUrl: 'app/main/pages/error/error-500.html'
                    }
                }
            })
            .state('app.price-tables', {
                url: '/price-tables',
                views: {
                    'main': {
                        templateUrl: 'app/main/pages/price-tables/price-tables.html'
                    }
                }
            })
            .state('app.invoice', {
                url: '/invoice',
                views: {
                    'main': {
                        templateUrl: 'app/main/pages/invoice/invoice.html',
                        controller: 'invoiceController as vm'
                    }
                }
            })
            .state('app.profile', {
                url: '/profile',
                views: {
                    'main': {
                        templateUrl: 'app/main/pages/profile/profile.html',
                        controller: 'profileController as vm'
                    }
                }
            })
            .state('app.fileManager', {
                url: '/file-manager',
                views: {
                    'main': {
                        templateUrl: 'app/main/file-manager/file-manager.html',
                        controller: 'fileManagerController as vm'
                    }
                }
            });

    }

})();
