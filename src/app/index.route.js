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
                    'navigation@app': {
                        templateUrl: 'app/sidenav/navigation/navigation.html',
                        controller: 'NavigationController as vm'
                    },
                    'quickPanel@app': {
                        templateUrl: 'app/sidenav/quick-panel/quick-panel.html',
                        controller: 'QuickPanelController as vm'
                    },
                    'themeChanger': {
                        templateUrl: 'app/core/theming/theme-changer/theme-changer.html',
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

            // Mail
            .state('app.mail', {
                url: '/mail',
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
                    'main@': {
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
                    'main@': {
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
                    'main@': {
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
                    'main@': {
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
                    'main@': {
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
                    'main@': {
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
                    'main@': {
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

            // Carded - Full Width
            .state('app.ui.layouts.carded-fullwidth', {
                url: '/carded-fullwidth',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/ui/layouts/carded/fullwidth/fullwidth.html',
                        controller: 'CardedFullwidthController as vm'
                    }
                }
            })

            // Carded - Left Pane
            .state('app.ui.layouts.carded-leftpane', {
                url: '/carded-leftpane',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/ui/layouts/carded/leftpane/leftpane.html',
                        controller: 'CardedLeftpaneController as vm'
                    }
                }
            })

            // Carded - Right Pane
            .state('app.ui.layouts.carded-rightpane', {
                url: '/carded-rightpane',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/ui/layouts/carded/rightpane/rightpane.html',
                        controller: 'CardedRightpaneController as vm'
                    }
                }
            })

            // Simple - Full Width
            .state('app.ui.layouts.simple-fullwidth', {
                url: '/simple-fullwidth',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/ui/layouts/simple/fullwidth/fullwidth.html',
                        controller: 'SimpleFullwidthController as vm'
                    }
                }
            })

            // Simple - Left Pane
            .state('app.ui.layouts.simple-leftpane', {
                url: '/simple-leftpane',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/ui/layouts/simple/leftpane/leftpane.html',
                        controller: 'SimpleLeftpaneController as vm'
                    }
                }
            })

            // Simple - Left Pane, Full Height
            .state('app.ui.layouts.simple-leftpane-fullheight', {
                url: '/simple-leftpane-fullheight',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/ui/layouts/simple/leftpane-fullheight/leftpane-fullheight.html',
                        controller: 'SimpleLeftpaneFullheightController as vm'
                    }
                }
            })

            // Simple - Right Pane
            .state('app.ui.layouts.simple-rightpane', {
                url: '/simple-rightpane',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/ui/layouts/simple/rightpane/rightpane.html',
                        controller: 'SimpleRightpaneController as vm'
                    }
                }
            })

            // Simple - Right Pane, Full Height
            .state('app.ui.layouts.simple-rightpane-fullheight', {
                url: '/simple-rightpane-fullheight',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/ui/layouts/simple/rightpane-fullheight/rightpane-fullheight.html',
                        controller: 'SimpleRightpaneFullheightController as vm'
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
                abstract: true,
                url: '/charts'
            })

            // C3 Charts
            .state('app.components.charts.c3', {
                url: '/charts/c3',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/charts/c3/c3.html',
                        controller: 'C3Controller as vm'
                    }
                }
            })

            // Chart.js Charts
            .state('app.components.charts.chartJs', {
                url: '/charts/chartJs',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/charts/chartJs/chartJs.html',
                        controller: 'ChartJsController as vm'
                    }
                }
            })


            // Chartist Charts
            .state('app.components.charts.chartist', {
                url: '/charts/chartist',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/charts/chartist/chartist.html',
                        controller: 'ChartistController as vm'
                    }
                }
            })

            // NvD3 Charts
            .state('app.components.charts.nvd3', {
                url: '/charts/nvd3',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/charts/nvd3/nvD3.html',
                        controller: 'Nvd3Controller as vm'
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
