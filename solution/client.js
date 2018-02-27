var wiwApp = angular.module('wiwApp', ['ngRoute', 'ngCookies']);


/// Routes ///
wiwApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/index', {
            templateUrl: '/assets/views/templates/index.html',
            controller: 'IndexCtrl as ic',
            resolve: {
                getuser: function (User) {
                    return User.getuser();
                }
            }
        })
        .when('/login', {
            templateUrl: '/assets/views/templates/login.html',
            controller: 'LoginCtrl as lc'
        })
        .when('/user', {
            templateUrl: '/assets/views/templates/view_user.html',
            controller: 'UserCtrl as uc',
            resolve: {
                getuser: function (User) {
                    return User.getuser();
                }
            }
        })
        .when('/position', {
            templateUrl: '/assets/views/templates/view_position.html',
            controller: 'PositionCtrl as pc',
            resolve: {
                getuser: function (User) {
                    return User.getuser();
                }
            }
        })
        .otherwise({
            redirectTo: 'index'
        });
});
