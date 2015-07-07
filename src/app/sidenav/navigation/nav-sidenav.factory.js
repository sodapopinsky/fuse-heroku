(function () {
    'use strict';

    angular.module('fuse')
        .factory('navigation', navigation);

    /** @ngInject */
    function navigation($rootScope, $location) {
        var self = this;

        $rootScope.$on('$routeChangeStart', function () {
            $rootScope.loadingProgress = true;
        });

        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            console.log(current);
            $rootScope.loadingProgress = false;
        });

        self = {
            selectSection: function (section) {
                console.log(section);
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
                            "name": "Email",
                            "url": "/mail",
                            "type": "link",
                            "icon": "icon-email"
                        },
                        {
                            "name": "Calendar",
                            "url": "/calendar",
                            "type": "link",
                            "icon": "icon-today"
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
                    "name": "UI",
                    "type": "heading",
                    "children": [
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
                            "name": "Table",
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
                            "name": "Chart",
                            "type": "link",
                            "icon": "icon-equalizer"
                        },
                        {
                            "name": "Icons",
                            "url": "/icons",
                            "type": "link",
                            "icon": "icon-info_outline"
                        },
                        {
                            "name": "Typography",
                            "url": "/typography",
                            "type": "link",
                            "icon": "icon-format_size"
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
                                }
                            ]
                        },
                        {
                            "name": "Search",
                            "url": "/search",
                            "type": "link",
                            "icon": "icon-search"
                        },
                        {
                            "name": "404",
                            "url": "/email",
                            "type": "link",
                            "icon": "icon-error_outline"
                        }
                    ]
                },
                {
                    "name": "Customization",
                    "type": "heading",
                    "children": [
                        {
                            "name": "Layout",
                            "type": "link",
                            "icon": "icon-view_compact"
                        },
                        {
                            "name": "Colors",
                            "url": "/colors",
                            "type": "link",
                            "icon": "icon-palette"
                        }
                    ]
                }
            ]
        };

        return self;
    }
})();