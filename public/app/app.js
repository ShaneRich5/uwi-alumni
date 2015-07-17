/**
 * Created by shane on 7/14/15.
 */
'use strict';

(function(){
    angular
        .module('uwiaa', [
            'satellizer',
            'ui.router',
            'ngCookies',
            'textAngular'
        ])
        .config(['$stateProvider', '$authProvider', '$urlRouterProvider', '$httpProvider', '$provide',
            function($stateProvider, $authProvider, $urlRouterProvider, $httpProvider, $provide) {

                // configures Satellizer to retrieve tokens from this route
                $authProvider.loginUrl = 'api/login';
                $authProvider.signupUrl = 'api/register';


                // default state
                $urlRouterProvider.otherwise('login');

                $stateProvider
                    .state('/', {
                        url: '/',
                        templateUrl: 'app/components/home/home.html',
                        controller: 'HomeCtrl'
                    })
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
                        templateUrl: 'app/components/users/partials/usersList.html',
                        controller: 'UserListCtrl'
                    })
                    .state('messages_list', {
                        url: '/messages',
                        templateUrl: 'app/components/messages/partials/messageList.html',
                        controller: 'MessageListCtrl'
                    })
                    .state('messages_new', {
                        url: '/messages/create',
                        templateUrl: 'app/components/messages/partials/messageNew.html',
                        controller: 'MessageNewCtrl'
                    })
                    .state('posts_list', {
                        url: '/posts',
                        templateUrl: 'app/components/posts/partials/postsList.html',
                        controller: 'PostListCtrl'
                    })
                    .state('posts_new', {
                        url: '/posts/new',
                        templateUrl: 'app/components/posts/partials/postsNew.html',
                        controller: 'PostNewCtrl'
                    });

                // Setup for the $httpInterceptor
                $provide.factory('redirectWhenLoggedOut', redirectWhenLoggedOut);

                // Push the new factory onto the $http interceptor array
                $httpProvider.interceptors.push('redirectWhenLoggedOut');

                function redirectWhenLoggedOut($q, $injector) {

                    return {

                        responseError: function(rejection) {

                            // Need to use $injector.get to bring in $state or else we get
                            // a circular dependency error
                            var $state = $injector.get('$state');

                            // Instead of checking for a status code of 400 which might be used
                            // for other reasons in Laravel, we check for the specific rejection
                            // reasons to tell us if we need to redirect to the login state
                            var rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid'];

                            // Loop through each rejection reason and redirect to the login
                            // state if one is encountered
                            angular.forEach(rejectionReasons, function(value, key) {

                                if(rejection.data.error === value) {

                                    // If we get a rejection corresponding to one of the reasons
                                    // in our array, we know we need to authenticate the user so
                                    // we can remove the current user from local storage
                                    localStorage.removeItem('user');

                                    // Send the user to the auth state so they can login
                                    $state.go('login');
                                }
                            });

                            return $q.reject(rejection);
                        }
                    }
                }
            }
        ])
        .run(function($rootScope, $state) {

            // $stateChangeStart is fired whenever the state changes. We can use some parameters
            // such as toState to hook into details about the state as it is changing
            $rootScope.$on('$stateChangeStart', function(event, toState) {

                // Grab the user from local storage and parse it to an object
                var user = JSON.parse(localStorage.getItem('user'));

                // If there is any user data in local storage then the user is quite
                // likely authenticated. If their token is expired, or if they are
                // otherwise not actually authenticated, they will be redirected to
                // the auth state because of the rejected request anyway
                if(user) {

                    // The user's authenticated state gets flipped to
                    // true so we can now show parts of the UI that rely
                    // on the user being logged in
                    $rootScope.authenticated = true;

                    // Putting the user's data on $rootScope allows
                    // us to access it anywhere across the app. Here
                    // we are grabbing what is in local storage
                    $rootScope.currentUser = user;

                    // If the user is logged in and we hit the auth route we don't need
                    // to stay there and can send the user to the main state
                    if(toState.name === "login") {

                        // Preventing the default behavior allows us to use $state.go
                        // to change states
                        event.preventDefault();

                        // go to the "main" state which in our case is users
                        $state.go('users');
                    }
                }
            });
        });
}());