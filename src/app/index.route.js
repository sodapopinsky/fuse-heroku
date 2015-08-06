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
                    'main@': {
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
                    'content@app': {
                        templateUrl: 'app/main/apps/dev/dev.html',
                        controller: 'DevController as vm'
                    }
                }
            })

            // Dashboard
            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/apps/dashboard/dashboard.html',
                        controller: 'DashboardController as vm'
                    }
                }
            })

            // Calendar
            .state('app.calendar', {
                url: '/calendar',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/apps/calendar/calendar.html',
                        controller: 'CalendarController as vm'
                    }
                }
            })

            // E-Commerce
            .state('app.e-commerce', {
                url: '/e-commerce',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/app/e-commerce/e-commerce.html',
                        controller: 'calendarController as vm'
                    }
                }
            })

            // E-Mail
            .state('app.e-mail', {
                url: '/email',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/apps/mail/mail.html',
                        controller: 'MailController as vm'
                    }
                }
            })

            // File Manager
            .state('app.file-manager', {
                url: '/file-manager',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/apps/file-manager/file-manager.html',
                        controller: 'FileManagerController as vm'
                    }
                }
            })

            // To-Do
            .state('app.to-do', {
                url: '/to-do',
                views: {
                    'content@app': {
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
                    'content@app.pages.auth.login': {
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
                    'content@app.pages.auth.register': {
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
                    'content@app.pages.auth.forgot-password': {
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
                    'content@app.pages.auth.lock': {
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
                    'content@app.pages.coming-soon': {
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
                    'content@app.pages.errors.error-404': {
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
                    'content@app.pages.errors.error-500': {
                        templateUrl: 'app/main/pages/errors/500/error-500.html',
                        controller: 'Error500Controller as vm'
                    }
                }
            })

            // Invoice
            .state('app.pages.invoice', {
                url: '/invoice',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/invoice/invoice.html',
                        controller: 'InvoiceController as vm'
                    }
                }
            })

            // Profile
            .state('app.pages.profile', {
                url: '/profile',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/profile/profile.html',
                        controller: 'ProfileController as vm'
                    }
                }
            })

            // Search
            .state('app.pages.search', {
                url: '/search',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/search/search.html',
                        controller: 'SearchController as vm'
                    }
                }
            })

            // Timeline
            .state('app.pages.timeline', {
                url: '/timeline',
                views: {
                    'content@app': {
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
                    'content@app': {
                        templateUrl: 'app/main/ui/typography/typography.html',
                        controller: 'TypographyController as vm'
                    }
                }
            })

            // Colors
            .state('app.ui.colors', {
                url: '/colors',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/ui/colors/colors.html',
                        controller: 'ColorsController as vm'
                    }
                }

            })

            // Icons
            .state('app.ui.icons', {
                url: '/icons',
                views: {
                    'content@app': {
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

            // Style 1 - Full Width
            .state('app.ui.layouts.style1-fullwidth', {
                url: '/style1-fullwidth',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/ui/layouts/style-1/fullwidth/fullwidth.html',
                        controller: 'Style1FullwidthController as vm'
                    }
                }
            })

            // Style 1 - Left Pane
            .state('app.ui.layouts.style1-leftpane', {
                url: '/style1-leftpane',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/ui/layouts/style-1/leftpane/leftpane.html',
                        controller: 'Style1LeftpaneController as vm'
                    }
                }
            })

            // Style 1 - Right Pane
            .state('app.ui.layouts.style1-rightpane', {
                url: '/style1-rightpane',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/ui/layouts/style-1/rightpane/rightpane.html',
                        controller: 'Style1RightpaneController as vm'
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
                    'content@app': {
                        templateUrl: 'app/main/components/elements/inputs/autocomplete/autocomplete.html',
                        controller: 'AutocompleteController as vm'
                    }
                }
            })

            // Checkbox
            .state('app.components.elements.inputs.checkbox', {
                url: '/checkbox',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/inputs/checkbox/checkbox.html',
                        controller: 'CheckboxController as vm'
                    }
                }
            })

            // Chips / Tags
            .state('app.components.elements.inputs.chips', {
                url: '/chips',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/inputs/chips/chips.html',
                        controller: 'ChipsController as vm'
                    }
                }
            })

            // Fields
            .state('app.components.elements.inputs.fields', {
                url: '/fields',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/inputs/fields/fields.html',
                        controller: 'FieldsController as vm'
                    }
                }
            })

            // Radio
            .state('app.components.elements.inputs.radio', {
                url: '/radio',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/inputs/radio/radio.html',
                        controller: 'RadioController as vm'
                    }
                }
            })

            // Select
            .state('app.components.elements.inputs.select', {
                url: '/select',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/inputs/select/select.html',
                        controller: 'SelectController as vm'
                    }
                }
            })

            // Slider
            .state('app.components.elements.inputs.slider', {
                url: '/slider',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/inputs/slider/slider.html',
                        controller: 'SliderController as vm'
                    }
                }
            })

            // Switch
            .state('app.components.elements.inputs.switch', {
                url: '/switch',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/inputs/switch/switch.html',
                        controller: 'SwitchController as vm'
                    }
                }
            })

            // Buttons
            .state('app.components.elements.buttons', {
                url: '/buttons',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/buttons/buttons.html',
                        controller: 'ButtonsController as vm'
                    }
                }
            })

            // Bottom Sheet
            .state('app.components.elements.bottom-sheet', {
                url: '/bottom-sheet',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/bottom-sheet/bottom-sheet.html',
                        controller: 'BottomSheetController as vm'
                    }
                }
            })

            // Card
            .state('app.components.elements.card', {
                url: '/card',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/card/card.html',
                        controller: 'CardController as vm'
                    }
                }
            })

            // Dialog
            .state('app.components.elements.dialog', {
                url: '/dialog',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/dialog/dialog.html',
                        controller: 'DialogController as vm'
                    }
                }
            })

            // Fab Toolbar
            .state('app.components.elements.fab-toolbar', {
                url: '/fab-toolbar',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/fab-toolbar/fab-toolbar.html',
                        controller: 'FabToolbarController as vm'
                    }
                }
            })

            // Fab Speed Dial
            .state('app.components.elements.fab-speed-dial', {
                url: '/fab-speed-dial',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/fab-speed-dial/fab-speed-dial.html',
                        controller: 'FabSpeedDialController as vm'
                    }
                }
            })
            // Fab Speed Dial
            .state('app.components.elements.menu', {
                url: '/menu',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/menu/menu.html',
                        controller: 'MenuController as vm'
                    }
                }
            })

            // Progress Circular
            .state('app.components.elements.progress-circular', {
                url: '/progress-circular',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/progress-circular/progress-circular.html',
                        controller: 'ProgressCircularController as vm'
                    }
                }
            })

            // Progress Linear
            .state('app.components.elements.progress-linear', {
                url: '/progress-linear',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/progress-linear/progress-linear.html',
                        controller: 'ProgressLinearController as vm'
                    }
                }
            })

            // Sidenav
            .state('app.components.elements.sidenav', {
                url: '/sidenav',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/sidenav/sidenav.html',
                        controller: 'SidenavController as vm'
                    }
                }
            })

            // Toast
            .state('app.components.elements.tabs', {
                url: '/tabs',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/elements/tabs/tabs.html',
                        controller: 'TabsController as vm'
                    }
                }
            })

            // Toast
            .state('app.components.elements.toast', {
                url: '/toast',
                views: {
                    'content@app': {
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
                    'content@app': {
                        templateUrl: 'app/main/components/tables/standard-table/standard-table.html',
                        controller: 'StandardTableController as vm'
                    }
                }
            })

            // DataTable
            .state('app.components.tables.data-table', {
                url: '/datatable',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/tables/datatable/datatable.html',
                        controller: 'DatatableController as vm'
                    }
                }
            })

            // Price Tables
            .state('app.components.price-tables', {
                url: '/price-tables',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/price-tables/price-tables.html',
                    }
                }
            })

            // Charts
            .state('app.components.charts', {
                url: '/charts',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/charts/charts.html',
                        controller: 'ChartsController as vm'
                    }
                }
            })

            // Maps
            .state('app.components.maps', {
                url: '/maps',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/maps/maps.html',
                        controller: 'MapsController as vm'
                    }
                }
            })

            // Widgets
            .state('app.components.widgets', {
                url: '/widgets',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/maps/maps.html',
                        controller: 'WidgetsController as vm'
                    }
                }
            });
    }

})();
