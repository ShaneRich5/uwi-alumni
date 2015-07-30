/**
 * Created by shane on 7/14/15.
 */

'use strict';

(function(){
    angular
        .module('uwiaa')
        .controller('RegisterCtrl', ['$scope', '$auth', '$log', '$http',
            function($scope, $auth, $log, $http) {
                $scope.submit = function(credentials) {
                    $http.post('api/register', credentials)
                        .then(registrationSuccess, registrationFailed);
                    //$auth.signup({
                    //    email: credentials.email,
                    //    password: credentials.password,
                    //    password_confirmation: credentials.password_confirmation
                    //}).then(registrationSuccess, registrationFailed);
                };

                function registrationSuccess(response) {
                    $log.log(response.data);
                }

                function registrationFailed(error) {
                    $log.log(error.data);
                }
            }
        ]);
}());