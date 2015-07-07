(function () {
    'use strict';

    angular.module('app.calendar')
        .controller('calendarController', calendarController);

    /** @ngInject */
    function calendarController(api, $mdDialog, $document) {
        var vm = this;
        vm.eventDialog = eventDialog;
        vm.calendarUiConfig = {
            calendar: {
                editable: true,
                eventLimit: true,
                header: '',
                viewRender: function (view) {
                    vm.calendarView = view;
                    vm.calendar = vm.calendarView.calendar;
                    vm.currentMonthShort = vm.calendar.getDate().format('MMM');
                },
                columnFormat: {
                    month: 'ddd',
                    week: 'ddd M',
                    day: 'ddd M'
                },
                //dayClick: $scope.alertEventOnClick,
                //eventDrop: $scope.alertOnDrop,
                //eventResize: $scope.alertOnResize
                eventClick: eventDetailDialog,
                selectable: true,
                selectHelper: true,
                select: dateSelection
            }
        };
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        vm.events = [[
            {title: 'All Day Event', start: new Date(y, m, 1)},
            {title: 'Long Event', start: new Date(y, m, d - 5), end: new Date(y, m, d - 2)},
            {id: 999, title: 'Repeating Event', start: new Date(y, m, d - 3, 16, 0), allDay: false},
            {id: 999, title: 'Repeating Event', start: new Date(y, m, d + 4, 16, 0), allDay: false},
            {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false
            },
            {
                title: 'All Day Event',
                start: new Date(y, m, d + 8, 16, 0)
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d + 12, 16, 0)
            },
            {
                title: 'Repeating Event',
                start: new Date(y, m, d + 14, 2, 0)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 14, 4, 0)
            },
            {
                title: 'Repeating Event',
                start: new Date(y, m, d + 14, 2, 0)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 14, 4, 0)
            },
            {
                title: 'Repeating Event',
                start: new Date(y, m, d + 14, 2, 0)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 14, 4, 0)
            },
            {
                title: 'Conference',
                start: new Date(y, m, d + 17, 4, 0),
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d + 22, 4, 0),
                end: new Date(y, m, d + 24, 4, 0)
            }
        ]
        ];
        vm.next = function () {
            vm.calendarView.calendar.next();
        };
        vm.prev = function () {
            vm.calendarView.calendar.prev();
        };


        function dateSelection(start, end, jsEvent) {
            eventDialog('add', jsEvent, start);
            /* var title = prompt('Event Title:');
             var eventData;
             if (title) {
             eventData = {
             title: title,
             start: start,
             end: end
             };
             $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
             }
             $('#calendar').fullCalendar('unselect');*/
        }

        function eventDialog(type, ev, start, event) {
            var title = (type === 'add') ? 'Add Event' : 'Edit Event';
            $mdDialog.show({
                controller: 'eventDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/main/calendar/event-dialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    start: start,
                    title: title,
                    event: event
                }
            });
        }

        function eventDetailDialog(event, jsEvent, view) {
            $mdDialog.show({
                controller: 'eventDetailDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/main/calendar/event-detail-dialog.html',
                parent: angular.element($document.body),
                targetEvent: jsEvent,
                clickOutsideToClose: true,
                locals: {
                    event: event,
                    eventDialog: eventDialog
                }
            });
        }
    }

})();
