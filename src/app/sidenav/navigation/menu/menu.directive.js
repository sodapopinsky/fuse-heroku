(function () {
    'use strict';

    angular.module('fuse')
        .directive('menuLink', menuLink)
        .directive('menuToggle', menuToggle);

    /** @ngInject */
    function menuLink(navigation) {
        return {
            scope: {
                section: '='
            },
            templateUrl: 'app/sidenav/navigation/menu/menu-link.tmpl.html',
            link: function ($scope, $element) {
                var controller = $element.parent().controller();
                $scope.isSelected = function () {
                    return navigation.isPageSelected($scope.section);
                };

                $scope.focusSection = function () {
                    // set flag to be used later when
                    // $locationChangeSuccess calls openPage()
                    controller.autoFocusContent = true;
                };
            }
        };
    }

    function menuToggle($timeout, navigation) {
        return {
            scope: {
                section: '='
            },
            templateUrl: 'app/sidenav/navigation/menu/menu-toggle.tmpl.html',
            link: function ($scope, $element) {
                //var controller = $element.parent().controller();
                //var $ul = $element.find('ul');
                //var originalHeight;

                $scope.isOpen = function () {
                    return navigation.isSectionSelected($scope.section);
                };
                $scope.toggle = function () {
                    navigation.toggleSelectSection($scope.section);
                };
                $scope.$watch(
                    function () {
                        return navigation.isSectionSelected($scope.section);
                    },
                    function (open) {
                        var $ul = $element.find('ul');
                        var targetHeight = open ? getTargetHeight() : 0;
                        $timeout(function () {
                            $ul.css({height: targetHeight + 'px'});
                        }, 0, false);

                        function getTargetHeight() {
                            var targetHeight;
                            $ul.addClass('no-transition');
                            $ul.css('height', '');
                            targetHeight = $ul.prop('clientHeight');
                            $ul.css('height', 0);
                            $ul.removeClass('no-transition');
                            return targetHeight;
                        }
                    }
                );

                var parentNode = $element[0].parentNode.parentNode.parentNode;
                if (parentNode.classList.contains('parent-list-item')) {
                    var heading = parentNode.querySelector('h2');
                    $element[0].firstChild.setAttribute('aria-describedby', heading.id);
                }
            }
        };
    }
})();