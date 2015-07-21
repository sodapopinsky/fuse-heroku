(function () {
    'use strict';

    angular.module('fuse')
        .factory('navigation', navigation);

    /** @ngInject */
    function navigation($rootScope, $location) {
        var self = this;

        $rootScope.$on('$stateChange', function () {
            $rootScope.loadingProgress = true;
        });

        $rootScope.$on('$stateChangeSuccess', function () {
            $rootScope.loadingProgress = false;
        });

        self = {
            selectSection: function (section) {
                    self.openedSection = section;
            },
            toggleSelectSection: function (section) {
                self.openedSection = (self.openedSection === section ? null : section);
            },
            isSectionSelected: function (section) {
                return self.openedSection === section;
            },

            selectPage: function (section, page) {
                self.currentSection = section;
                self.currentPage = page;
            },
            isPageSelected: function (page) {
                return self.currentPage === page;
            },
            onLocationChange: function () {
                $rootScope.loadingProgress = true;
                var path = $location.path();
                var introLink = {
                    name: "Introduction",
                    url: "/",
                    type: "link"
                };
                if (path === '/') {
                    self.selectSection(introLink);
                    self.selectPage(introLink, introLink);
                    return;
                }

                var matchPage = function (section, page) {
                    if (path === page.url) {
                        self.selectSection(section);
                        self.selectPage(section, page);
                    }
                };

                self.sections.forEach(function (section) {
                    if (section.children) {
                        // matches nested section toggles, such as API or Customization
                        section.children.forEach(function (childSection) {
                            if (childSection.pages) {
                                childSection.pages.forEach(function (page) {
                                    matchPage(childSection, page);
                                });
                            }
                        });
                    }
                    else if (section.pages) {
                        // matches top-level section toggles, such as Demos
                        section.pages.forEach(function (page) {
                            matchPage(section, page);
                        });
                    }
                    else if (section.type === 'link') {
                        // matches top-level links, such as "Getting Started"
                        matchPage(section, section);
                    }
                });
            },
            sections: [
                {
                    "name": "Fuse",
                    "type": "heading",
                    "children": [
                        {
                            "name": "Dashboard",
                            "url": "/getting-started",
                            "type": "link",
                            "icon": "icon-dashboard"
                        }
                    ]
                },
                {
                    "name": "Components",
                    "type": "heading",
                    "children": [
                        {
                            "name": "Calendar",
                            "url": "/calendar",
                            "type": "link",
                            "icon": "icon-today"
                        },
                        {
                            "name": "E-Commerce",
                            "url": "/ecommerce",
                            "type": "link",
                            "icon": "icon-shopping_cart"
                        },
                        {
                            "name": "E-Mail",
                            "url": "/mail",
                            "type": "link",
                            "icon": "icon-email"
                        },
                        {
                            "name": "File Manager",
                            "url": "/file-manager",
                            "type": "link",
                            "icon": "icon-folder"
                        },
                        {
                            "name": "To-do",
                            "url": "/todo",
                            "type": "link",
                            "icon": "icon-check_box"
                        }
                    ]
                },
                {
                    "name": "User Interface",
                    "type": "heading",
                    "children": [
                        {
                            "name": "Typography",
                            "url": "/typography",
                            "type": "link",
                            "icon": "icon-format_size"
                        },
                        {
                            "name": "Colors",
                            "url": "/colors",
                            "type": "link",
                            "icon": "icon-palette"
                        },
                        {
                            "name": "Icons",
                            "url": "/icons",
                            "type": "link",
                            "icon": "icon-info_outline"
                        },
                        {
                            "name": "Layouts",
                            "url": "/layouts",
                            "type": "link",
                            "icon": "icon-view_compact"
                        },
                        {
                            "name": "Elements",
                            "type": "toggle",
                            "icon": "icon-style",
                            "pages": [
                                {
                                    "name": "Button",
                                    "id": "button",
                                    "url": "/button"
                                },
                                {
                                    "name": "Card",
                                    "id": "carf",
                                    "url": "/card"
                                },
                                {
                                    "name": "Dialog",
                                    "id": "layoutAlign",
                                    "url": "/dialog"
                                }
                            ]
                        },
                        {
                            "name": "Tables",
                            "type": "toggle",
                            "icon": "icon-grid_on",
                            "pages": [
                                {
                                    "name": "Standart Table",
                                    "id": "standart-table",
                                    "url": "/table"
                                },
                                {
                                    "name": "Datatable",
                                    "id": "data-table",
                                    "url": "/datatable"
                                }
                            ]
                        },
                        {
                            "name": "Charts",
                            "type": "link",
                            "icon": "icon-equalizer"
                        },
                        {
                            "name": "Maps",
                            "type": "link",
                            "icon": "icon-place"
                        },
                        {
                            "name": "Widgets",
                            "type": "link",
                            "icon": "icon-layers"
                        }
                    ]
                },
                {
                    "name": "Pages",
                    "type": "heading",
                    "children": [
                        {
                            "name": "Authentication",
                            "type": "toggle",
                            "icon": "icon-person",
                            "pages": [
                                {
                                    "name": "Login",
                                    "id": "login",
                                    "url": "/login"
                                },
                                {
                                    "name": "Register",
                                    "id": "register",
                                    "url": "/register"
                                },
                                {
                                    "name": "Forgot Password",
                                    "id": "forgot-password",
                                    "url": "/forgot-password"
                                },
                                {
                                    "name": "Lock",
                                    "id": "lock",
                                    "url": "/lock"
                                }
                            ]
                        },
                        {
                            "name": "Coming Soon",
                            "url": "/coming-soon",
                            "type": "link",
                            "icon": "icon-timer"
                        },
                        {
                            "name" : "Error",
                            "type": "toggle",
                            "icon": "icon-error_outline",
                            "pages" : [
                                {
                                    "name": "404",
                                    "url": "/error-404",
                                    "type": "link"
                                },
                                {
                                    "name": "500",
                                    "url": "/error-500",
                                    "type": "link"
                                }
                            ]
                        },
                        {
                            "name": "Invoice",
                            "url": "/invoice",
                            "type": "link",
                            "icon": "icon-receipt"
                        },
                        {
                            "name": "Profile",
                            "url": "/profile",
                            "type": "link",
                            "icon": "icon-person"
                        },
                        {
                            "name": "Search",
                            "url": "/search",
                            "type": "link",
                            "icon": "icon-search"
                        },
                        {
                            "name": "Price Tables",
                            "url": "/price-tables",
                            "type": "link",
                            "icon": "icon-view_comfortable"
                        },
                        {
                            "name": "Timeline",
                            "url": "/timeline",
                            "type": "link",
                            "icon": "icon-view_day"
                        }
                    ]
                }
            ]
        };

        return self;
    }
})();