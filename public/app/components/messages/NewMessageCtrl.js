/**
 * Created by shane on 7/16/15.
 */
'use strict';

(function(){
    angular
        .module('uwiaa')
        .controller('NewMessageCtrl', [ '$scope', '$log', '$auth', '$state', '$http',
            function($scope, $log, $auth, $state, $http){
                // if the user is not logged in
                // redirect to login
                // move this login to .run()
                if (!$auth.isAuthenticated()){
                    $state.go('login');
                }

                $scope.recipients = []; // init

                $scope.addRecipient = function addRecipient(email) {
                    $http.get('api/users?email=' + email)
                        .success(function(data){
                            if (data === 'model-not-found')
                                $log.debug(data);
                            else {
                                $scope.recipients.push(data);
                                $log.log('Recipient: ' + data.id);
                            }
                        });
                };

                $scope.submit = function(message, recipients) {
                    if ($scope.recipients.length != 0) {
                        //message.recipients = recipients;
                        $http.post('api/messages', { content: message, recipients: recipients })
                            .success(function(data){
                                $log.debug(data);
                                $state.go('messages_list');
                            })
                            .error(function(err){
                                $log.debug(err);
                            });
                    }
                };
            }
        ]);
}());