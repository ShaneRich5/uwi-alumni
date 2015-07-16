/**
 * Created by shane on 7/14/15.
 */
'use strict';

(function(){
    angular
        .module('uwiaa', [
            'satellizer',
            'ui.router',
            'ngCookies'
        ])
        .config(['$stateProvider', '$authProvider', '$urlRouterProvider',
            function($stateProvider, $authProvider, $urlRouterProvider) {

                var getView = function(viewName) {
                    return 'components/' + viewName + '/' + viewName + '.html';
                };

                // configures Satellizer to retrieve tokens from this route
                $authProvider.loginUrl = 'api/login';

                $stateProvider
                    .state('login', {
                        url: '/login',
                        templateUrl: 'app/components/login/login.html',
                        controller: 'LoginCtrl'
                    })
                    .state('register', {
                        url: '/register',
                        templateUrl: 'app/components/register/register.html',
                        controller: 'RegisterCtrl'
                    })
                    .state('users', {
                        url: '/users',
                        templateUrl: 'app/components/user/users.html',
                        controller: 'UserCtrl'
                    });

                // default state
                $urlRouterProvider.otherwise('login');
            }
        ]);
}());