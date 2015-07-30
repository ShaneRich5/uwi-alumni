/**
 * Created by shane on 7/16/15.
 */
'use strict';

(function(){
    angular
        .module('uwiaa')
        .controller('NewMessageCtrl', [ '$scope', '$log', '$auth', '$state',
            function($scope, $log, $auth, $state){
                // if the user is not logged in
                // redirect to login
                // move this login to .run()
                if (!$auth.isAuthenticated()){
                    $state.go('login');
                }

                $scope.submit = function(message) {

                }
            }
        ]);
}());