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
                                $log.log('Recipient: ' + data);
                            }
                        });
                };

                $scope.submit = function(message, recipients) {
                    $log.debug('Message: ' + message + ' Recipient(s): ' + recipients);
                    if (recipients.length != 0) {
                        alert(recipients);
                        //message.recipients = recipients;
                        $http.post('api/messages', { content: message.content, recipients: recipients})
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