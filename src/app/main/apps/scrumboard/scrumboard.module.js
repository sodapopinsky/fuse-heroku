(function ()
{
    'use strict';

    angular
        .module('app.scrumboard', [])
        .config(config)
        .run(run);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        $stateProvider.state('app.scrumboard', {
                url      : '/scrumboard',
                abstract : true,
                resolve  : {
                    'BoardList': function (apiResolver)
                    {
                        return apiResolver.resolve('scrumboard.boardList@get');
                    }
                },
                bodyClass: 'scrumboard'
            })
            .state('app.scrumboard.home', {
                url    : '',
                resolve: {
                    redirect: function (BoardList, $state)
                    {
                        var latestBoard = BoardList.data[0];
                        $state.go('app.scrumboard.board', {
                            id : latestBoard.id,
                            uri: latestBoard.uri
                        });
                    }
                }

            })
            .state('app.scrumboard.board', {
                    url    : '/board/:id/:uri',
                    views  : {
                        'content@app'                           : {
                            templateUrl: 'app/main/apps/scrumboard/scrumboard.html',
                            controller : 'ScrumboardController as vm'
                        },
                        'scrumboardContent@app.scrumboard.board': {
                            templateUrl: 'app/main/apps/scrumboard/views/board/board-view.html',
                            controller : 'BoardViewController as vm'
                        }
                    },
                    resolve: {
                        'BoardData': function (apiResolver, $stateParams, Board)
                        {
                            return Board.setData($stateParams.id);
                        }
                    }
                }
            )
            .state('app.scrumboard.board.calendar', {
                url  : '/calendar',
                views: {
                    'scrumboardContent@app.scrumboard.board': {
                        templateUrl: 'app/main/apps/scrumboard/views/calendar/calendar-view.html',
                        controller : 'CalendarViewController as vm'
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/scrumboard');

        // Navigation
        msNavigationServiceProvider.saveItem('apps.scrumboard', {
            title : 'Scrumboard',
            icon  : 'icon-trello',
            state : 'app.scrumboard.home',
            weight: 5
        });
    }

    /** @ngInject */
    function run(editableThemes)
    {
        /**
         * Inline Edit Configuration
         * @type {string}
         */
        editableThemes.default.submitTpl = '<md-button class="md-icon-button" type="submit" aria-label="save">' +
                                           '<md-icon md-font-icon="icon-checkbox-marked-circle" class="md-accent-fg md-hue-1"></md-icon></md-button>';
        editableThemes.default.cancelTpl = '<md-button class="md-icon-button" ng-click="$form.$cancel()" aria-label="cancel">' +
                                           '<md-icon md-font-icon="icon-close-circle" class="icon-cancel"></md-icon></md-button>';
    }

})();