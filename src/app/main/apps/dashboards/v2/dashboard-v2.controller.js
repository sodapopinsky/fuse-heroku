(function ()
{
    'use strict';

    angular.module('app.dashboard-v2')
        .controller('DashboardV2Controller', DashboardV2Controller);

    /** @ngInject */
    function DashboardV2Controller()
    {
        var vm = this;

        // Data
        vm.widget1 = {
            title   : 'ANALYTICS',
            subtitle: 'Last 12 hours',
            chart   : {
                columns: [
                    {
                        id    : 'Visitors',
                        name  : 'Visitors',
                        color : 'lightgrey',
                        values: '30,75,290,400,150,250,75,210,125,92,30,75,290,400',
                        type  : 'bar'
                    },
                    {
                        id    : 'Bounce',
                        name  : 'Bounce',
                        color : 'green',
                        values: '26,62,210,349,90,241,69,120,100,20,10,10,189,165',
                        type  : 'spline'
                    }
                ]
            },
            stats   : {
                title  : 'Stats',
                column1: [
                    {
                        label: 'Visits:',
                        value: 856
                    },
                    {
                        label: 'Pageviews:',
                        value: 1588
                    },
                    {
                        label: 'Pages/Visit:',
                        value: 1.855
                    }
                ],
                column2: [
                    {
                        label: 'Bounce Rate:',
                        value: '83.58%'
                    },
                    {
                        label: 'Average Visit Duration:',
                        value: '1m 42s'
                    },
                    {
                        label: 'New Visits:',
                        value: '89.55%'
                    }
                ]
            }
        };

        vm.widget2 = {
            title : 'STORAGE CAPACITY',
            value : 92,
            icon  : 'icon-alert',
            detail: 'This is the back side. You can show detailed information here.',
        };

        vm.widget3 = {
            title: 'ONLINE MEMBERS',
            value: 658,
            icon : 'icon-account'
        };

        vm.widget4 = {
            title: 'MEMBERS FOR PAST 30 DAYS',
            value: 55,
            icon : 'icon-account-plus'
        };

        vm.widget5 = {
            title: 'TOTAL MEMBERS',
            value: 59962,
            icon : 'icon-account-multiple'
        };

        vm.latestPosts = [
            {
                avatar  : {
                    src: 'assets/images/avatars/alice.png',
                    alt: 'Alice Freeman'
                },
                title   : 'Alice Freeman posted on Nature',
                subtitle: '32 minutes ago',
                text    : 'Look deep into nature, then you will understand everything better. Look deep into nature, then you will understand everything better.',
                media   : {
                    image: {
                        src: 'assets/images/photos/early-sunrise.jpg',
                        alt: 'Early Sunrise'
                    }
                }
            },
            {
                avatar  : {
                    src: 'assets/images/avatars/garry.png',
                    alt: 'Andrew Ryan'
                },
                title   : 'Andrew Ryan posted on Gaming',
                subtitle: '3 hours ago',
                text    : 'Fallout 4 PipBoy edition will come with an actual PipBoy. You will be able to put your mobile device in it and it will work with the game!',
                media   : {
                    image: {
                        src: 'assets/images/photos/fallout.png',
                        alt: 'Fallout 4'
                    }
                }
            },
            {
                avatar  : {
                    src: 'assets/images/avatars/katherine.png',
                    alt: 'Katherine'
                },
                title   : 'Katherine posted on Weather',
                subtitle: '4 hours ago',
                text    : 'Aliquam mauris magna, elementum eget lobortis ut, rutrum ut est. Integer auctor, velit at hendrerit aliquam, lacus mi tincidunt.',
                media   : {
                    image: {
                        src: 'assets/images/photos/snow.jpg',
                        alt: 'Snow'
                    }
                }
            },
            {
                avatar  : {
                    src: 'assets/images/avatars/danielle.jpg',
                    alt: 'Danielle'
                },
                title   : 'Danielle posted on Holidays',
                subtitle: '1 day ago',
                text    : 'Proin nec lacus vestibulum, commodo ipsum eleifend, scelerisque magna. Vivamus ac turpis sagittis, feugiat neque eu, consectetur mauris.',
                media   : {
                    image: {
                        src: 'assets/images/photos/tropical-beach.jpg',
                        alt: 'Tropical Beach'
                    }
                }
            }
        ];
        //////////

    }

})();
