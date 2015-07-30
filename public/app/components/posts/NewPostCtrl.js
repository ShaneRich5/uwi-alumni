/**
 * Created by shane on 7/16/15.
 */
'use strict';

(function(){
    angular
        .module('uwiaa')
        .controller('NewPostCtrl', [ '$scope', '$http', '$log', '$auth', '$state',
            function($scope, $http, $log, $auth, $state){
                // if the user is not logged in
                // redirect to login
                // move this login to .run()
                //if (!$auth.isAuthenticated()){
                //    $state.go('login');
                //}

                $scope.submit = function(post){
                    $http.post('api/posts', post)
                        .success(onPostSave)
                        .error(onError);

                };

                function onPostSave(response){
                    $log.log('success...user: ' + response.data);
                    $log.log(response);
                    $state.go('posts_list');
                }

                function onError(error){
                    $log.log('error');
                    $log.log(error.data);
                }

            }
        ]);
}());