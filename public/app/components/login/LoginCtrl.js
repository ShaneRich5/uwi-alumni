/**
 * Created by shane on 7/14/15.
 */
'use strict';

(function(){
    angular
        .module('uwiaa')
        .controller('LoginCtrl', ['$scope', '$auth', '$state', '$log', '$http',
            function($scope, $auth, $state, $log, $http) {
                $scope.credentials = {
                    email: '',
                    password: ''
                };

                $scope.submit = function(credentials) {
                    $log.log('Entered credentials: ' + credentials);
                    $auth.login(credentials).then(loginSuccess);
                };

                function loginSuccess(data) {
                    $state.go('users', {});
                }
            }
        ]);
}());