/**
 * Created by shane on 7/14/15.
 */
'use strict';

(function(){
    angular
        .module('uwiaa')
        .controller('UserListCtrl', ['$scope', '$auth', '$http', '$rootScope', '$log',
            function($scope, $auth, $http, $rootScope, $log){
                $scope.user = null;

                function onUsersFetched(users){
                    $log.log(users);
                    $scope.users = users;
                }

                function onError(error){
                    $log.log(error);
                    $scope.error = error;
                }

                $scope.getUsers = function() {
                    $http.get('api/users')
                        .success(onUsersFetched)
                        .error(onError);
                };

                $scope.logout = function() {
                    $auth.logout().then(function() {
                        localStorage.removeItem('user');
                        $rootScope.authenticated = false;
                        $rootScope.currentUser = null;
                    });
                }
            }
        ]);
}());