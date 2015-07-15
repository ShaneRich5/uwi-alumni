/**
 * Created by shane on 7/14/15.
 */
'use strict';

(function(){
    angular
        .module('uwiaa')
        .controller('UserCtrl', ['$scope', '$http', '$log',
            function($scope, $http, $log){
                $http.get('api/users')
                    .success(onUsersFetched)
                    .error(onError);

                function onUsersFetched(users){
                    $log.log(users);
                    $scope.users = users;
                }

                function onError(error){
                    $log.log(error);
                }
            }
        ]);
}());