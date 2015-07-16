/**
 * Created by shane on 7/14/15.
 */
'use strict';

(function(){
    angular
        .module('uwiaa')
        .controller('LoginCtrl', ['$scope', '$rootScope', '$auth', '$state', '$log', '$http',
            function($scope, $rootScope, $auth, $state, $log, $http) {
                $scope.loginError = false;

                $scope.submit = function(credentials) {
                    $log.log('Entered credentials: ' + credentials);
                    $auth.login(credentials)
                        .then(retrievedUserSuccess, retrievedUsedFail)
                        .then(loginSuccess);
                };

                var retrievedUsedFail = function(error) {
                    $scope.loginError = true;
                    $scope.loginErrorText = error.data.error;
                };

                var retrievedUserSuccess = function() {
                    return $http.get('api/auth');
                };

                function loginSuccess(response) {
                    var user = JSON.stringify(response.data.user);

                    localStorage.setItem('user', user);

                    $rootScope.authenticated = true;
                    $rootScope.currentUser = response.data.user;

                    $state.go('users');
                }
            }
        ]);
}());