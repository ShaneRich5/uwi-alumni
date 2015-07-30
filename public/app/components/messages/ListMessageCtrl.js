/**
 * Created by shane on 7/16/15.
 */
'use strict';

(function(){
    angular
        .module('uwiaa')
        .controller('ListMessageCtrl', ['$scope', '$auth', '$http', '$log', '$state',
            function($scope, $auth, $http, $log, $state){
                // if the user is not logged in
                // redirect to login
                // move this login to .run()
                if (!$auth.isAuthenticated()){
                    $state.go('login');
                }

                $http.get('api/messages')
                    .then(onMessagesLoaded, onError);

                function onMessagesLoaded(response) {
                    $log.log(response.data);
                    $scope.messages = response.data.messages;
                }

                function onError(error) {
                    $log.log(error.data);
                }
            }
        ]);
}());