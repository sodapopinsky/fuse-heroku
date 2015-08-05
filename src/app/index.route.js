(function () {
    'use strict';

    angular
        .module('fuse')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        $locationProvider.html5Mode(true);

        $stateProvider

        /**
         * App
         */
            .state('app', {
                abstract: true,
                views: {
                    'app@': {
                        templateUrl: 'app/layout/default.html'
                    },
                    'toolbar@app': {
                        templateUrl: 'app/toolbar/toolbar.html',
                        controller: 'ToolbarController as vm'
                    },
                    'sidenavLeft@app': {
                        templateUrl: 'app/sidenav/navigation/navigation.html',
                        controller: 'NavigationController as vm'
                    },
                    'sidenavRight@app': {
                        templateUrl: 'app/sidenav/quick-panel/quick-panel.html',
                        controller: 'QuickPanelController as vm'
                    },
                    'themeChanger@app': {
                        templateUrl: 'app/components/theme-changer/theme-changer.html',
                        controller: 'ThemeChangerController as vm'
                    }
                }
            })

            // Dev
            .state('app.dev', {
                url: '/dev',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/apps/dev/dev.html',
                        controller: 'DevController as vm'
                    }
                }
            })

            // Dashboard
            .state('app.dashboard', {
                url: '/',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/apps/dashboard/dashboard.html',
                        controller: 'DashboardController as vm'
                    }
                }
            })

            // Calendar
            .state('app.calendar', {
                url: '/calendar',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/apps/calendar/calendar.html',
                        controller: 'CalendarController as vm'
                    }
                }
            })

            // E-Commerce
            .state('app.e-commerce', {
                url: '/e-commerce',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/app/e-commerce/e-commerce.html',
                        controller: 'calendarController as vm'
                    }
                }
            })

            // E-Mail
            .state('app.e-mail', {
                url: '/email',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/apps/mail/mail.html',
                        controller: 'MailController as vm'
                    }
                }
            })

            // File Manager
            .state('app.file-manager', {
                url: '/file-manager',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/apps/file-manager/file-manager.html',
                        controller: 'FileManagerController as vm'
                    }
                }
            })

            // To-Do
            .state('app.to-do', {
                url: '/to-do',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/apps/todo/todo.html',
                        controller: 'TodoController as vm'
                    }
                }
            })

        /**
         * Pages
         */
            .state('app.pages', {
                abstract: true,
                url: '/pages'
            })

        /**
         * Authentication
         */
            .state('app.pages.auth', {
                abstract: true,
                url: '/auth'
            })

            // Login
            .state('app.pages.auth.login', {
                url: '/login',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.pages.auth.login': {
                        templateUrl: 'app/main/pages/auth/login/login.html',
                        controller: 'LoginController as vm'
                    }
                }
            })

            // Register
            .state('app.pages.auth.register', {
                url: '/register',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.pages.auth.register': {
                        templateUrl: 'app/main/pages/auth/register/register.html',
                        controller: 'RegisterController as vm'
                    }
                }
            })

            // Forgot Password
            .state('app.pages.auth.forgot-password', {
                url: '/forgot-password',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.pages.auth.forgot-password': {
                        templateUrl: 'app/main/pages/auth/forgot-password/forgot-password.html',
                        controller: 'ForgotPasswordController as vm'
                    }
                }
            })

            // Lock
            .state('app.pages.auth.lock', {
                url: '/lock',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.pages.auth.lock': {
                        templateUrl: 'app/main/pages/auth/lock/lock.html',
                        controller: 'LockController as vm'
                    }
                }
            })

            // Coming Soon
            .state('app.pages.coming-soon', {
                url: '/coming-soon',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.pages.coming-soon': {
                        templateUrl: 'app/main/pages/coming-soon/coming-soon.html',
                        controller: 'ComingSoonController as vm'
                    }
                }
            })

            /*
             * Errors
             */
            .state('app.pages.errors', {
                abstract: true,
                url: '/errors'
            })

            // 404
            .state('app.pages.errors.error-404', {
                url: '/error-404',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.pages.errors.error-404': {
                        templateUrl: 'app/main/pages/errors/404/error-404.html',
                        controller: 'Error404Controller as vm'
                    }
                }
            })

            // 500
            .state('app.pages.errors.error-500', {
                url: '/error-500',
                views: {
                    'app@': {
                        templateUrl: 'app/layout/basic.html'
                    },
                    'main@app.pages.errors.error-500': {
                        templateUrl: 'app/main/pages/errors/500/error-500.html',
                        controller: 'Error500Controller as vm'
                    }
                }
            })

            // Invoice
            .state('app.pages.invoice', {
                url: '/invoice',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/pages/invoice/invoice.html',
                        controller: 'InvoiceController as vm'
                    }
                }
            })

            // Profile
            .state('app.pages.profile', {
                url: '/profile',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/pages/profile/profile.html',
                        controller: 'ProfileController as vm'
                    }
                }
            })

            // Search
            .state('app.pages.search', {
                url: '/search',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/pages/search/search.html',
                        controller: 'SearchController as vm'
                    }
                }
            })

            // Timeline
            .state('app.pages.timeline', {
                url: '/timeline',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/pages/timeline/timeline.html',
                        controller: 'TimelineController as vm'
                    }
                }
            })

        /**
         * User Interface
         */
            .state('app.ui', {
                abstract: true,
                url: '/ui'
            })

            // Typography
            .state('app.ui.typography', {
                url: '/typography',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/ui/typography/typography.html',
                        controller: 'TypographyController as vm'
                    }
                }
            })

            // Colors
            .state('app.ui.colors', {
                url: '/colors',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/ui/colors/colors.html',
                        controller: 'ColorsController as vm'
                    }
                }

            })

            // Icons
            .state('app.ui.icons', {
                url: '/icons',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/ui/icons/icons.html',
                        controller: 'IconsController as vm'
                    }
                }
            })

        /**
         * Layouts
         */
            .state('app.ui.layouts', {
                abstract: true,
                url: '/layouts'
            })

            // App 1 - Full Width
            .state('app.ui.layouts.app1-fullwidth', {
                url: '/app1-fullwidth',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/ui/layouts/app1-fullwidth/app1-fullwidth.html',
                        controller: 'App1FullwidthController as vm'
                    }
                }
            })

            // App 1 - Left Pane
            .state('app.ui.layouts.app1-leftpane', {
                url: '/app1-leftpane',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/ui/layouts/app1-leftpane/app1-leftpane.html',
                        controller: 'App1LeftpaneController as vm'
                    }
                }
            })

            // App 1 - Right Pane
            .state('app.ui.layouts.app1-rightpane', {
                url: '/app1-rightpane',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/ui/layouts/app1-rightpane/app1-rightpane.html',
                        controller: 'App1RightpaneController as vm'
                    }
                }
            })

        /**
         * Components
         */
            .state('app.components', {
                abstract: true,
                url: '/components'
            })

        /**
         * Elements
         */
            .state('app.components.elements', {
                abstract: true,
                url: '/elements'
            })

            // Inputs
            .state('app.components.elements.inputs', {
                abstract: true,
                url: '/inputs'
            })


            // Autocomplete
            .state('app.components.elements.inputs.autocomplete', {
                url: '/autocomplete',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/inputs/autocomplete/autocomplete.html',
                        controller: 'AutocompleteController as vm'
                    }
                }
            })

            // Checkbox
            .state('app.components.elements.inputs.checkbox', {
                url: '/checkbox',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/inputs/checkbox/checkbox.html',
                        controller: 'CheckboxController as vm'
                    }
                }
            })

            // Chips / Tags
            .state('app.components.elements.inputs.chips', {
                url: '/chips',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/inputs/chips/chips.html',
                        controller: 'ChipsController as vm'
                    }
                }
            })

            // Fields
            .state('app.components.elements.inputs.fields', {
                url: '/fields',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/inputs/fields/fields.html',
                        controller: 'FieldsController as vm'
                    }
                }
            })

            // Radio
            .state('app.components.elements.inputs.radio', {
                url: '/radio',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/inputs/radio/radio.html',
                        controller: 'RadioController as vm'
                    }
                }
            })

            // Select
            .state('app.components.elements.inputs.select', {
                url: '/select',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/inputs/select/select.html',
                        controller: 'SelectController as vm'
                    }
                }
            })

            // Slider
            .state('app.components.elements.inputs.slider', {
                url: '/slider',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/inputs/slider/slider.html',
                        controller: 'SliderController as vm'
                    }
                }
            })

            // Switch
            .state('app.components.elements.inputs.switch', {
                url: '/switch',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/inputs/switch/switch.html',
                        controller: 'SwitchController as vm'
                    }
                }
            })

            // Buttons
            .state('app.components.elements.buttons', {
                url: '/buttons',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/buttons/buttons.html',
                        controller: 'ButtonsController as vm'
                    }
                }
            })

            // Bottom Sheet
            .state('app.components.elements.bottom-sheet', {
                url: '/bottom-sheet',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/bottom-sheet/bottom-sheet.html',
                        controller: 'BottomSheetController as vm'
                    }
                }
            })

            // Card
            .state('app.components.elements.card', {
                url: '/card',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/card/card.html',
                        controller: 'CardController as vm'
                    }
                }
            })

            // Dialog
            .state('app.components.elements.dialog', {
                url: '/dialog',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/dialog/dialog.html',
                        controller: 'DialogController as vm'
                    }
                }
            })

            // Fab Toolbar
            .state('app.components.elements.fab-toolbar', {
                url: '/fab-toolbar',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/fab-toolbar/fab-toolbar.html',
                        controller: 'FabToolbarController as vm'
                    }
                }
            })

            // Fab Speed Dial
            .state('app.components.elements.fab-speed-dial', {
                url: '/fab-speed-dial',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/fab-speed-dial/fab-speed-dial.html',
                        controller: 'FabSpeedDialController as vm'
                    }
                }
            })

            // Progress Circular
            .state('app.components.elements.progress-circular', {
                url: '/progress-circular',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/progress-circular/progress-circular.html',
                        controller: 'ProgressCircularController as vm'
                    }
                }
            })

            // Progress Linear
            .state('app.components.elements.progress-linear', {
                url: '/progress-linear',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/progress-linear/progress-linear.html',
                        controller: 'ProgressLinearController as vm'
                    }
                }
            })

            // Toast
            .state('app.components.elements.tabs', {
                url: '/tabs',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/tabs/tabs.html',
                        controller: 'TabsController as vm'
                    }
                }
            })

            // Toast
            .state('app.components.elements.toast', {
                url: '/toast',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/elements/toast/toast.html',
                        controller: 'ToastController as vm'
                    }
                }
            })

        /**
         * Tables
         */
            .state('app.components.tables', {
                abstract: true,
                url: '/tables'
            })

            // Standard Table
            .state('app.components.tables.standard-table', {
                url: '/standard-table',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/tables/standard-table/standard-table.html',
                        controller: 'StandardTableController as vm'
                    }
                }
            })

            // DataTable
            .state('app.components.tables.data-table', {
                url: '/datatable',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/tables/datatable/datatable.html',
                        controller: 'DatatableController as vm'
                    }
                }
            })

            // Price Tables
            .state('app.components.price-tables', {
                url: '/price-tables',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/price-tables/price-tables.html',
                    }
                }
            })

            // Charts
            .state('app.components.charts', {
                url: '/charts',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/charts/charts.html',
                        controller: 'ChartsController as vm'
                    }
                }
            })

            // Maps
            .state('app.components.maps', {
                url: '/maps',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/maps/maps.html',
                        controller: 'MapsController as vm'
                    }
                }
            })

            // Widgets
            .state('app.components.widgets', {
                url: '/widgets',
                views: {
                    'main@app': {
                        templateUrl: 'app/main/components/maps/maps.html',
                        controller: 'WidgetsController as vm'
                    }
                }
            });
    }

})();
