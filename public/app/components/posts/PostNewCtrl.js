/**
 * Created by shane on 7/16/15.
 */
'use strict';

(function(){
    angular
        .module('uwiaa')
        .controller('PostNewCtrl', [ '$scope', '$http', '$log', '$auth', '$state',
            function($scope, $http, $log, $auth, $state){
                // if the user is not logged in
                // redirect to login
                // move this login to .run()
                //if (!$auth.isAuthenticated()){
                //    $state.go('login');
                //}

                $scope.submit = function(post){
                    $log.log(post);
                    $http.post('api/posts/create', post)
                        .success(onPostSave)
                        .error(onError);

                };

                function onPostSave(response){
                    $log.log('success');
                    $log.log(response.data);
                }

                function onError(error){
                    $log.log('error');
                    $log.log(error.data);
                }

            }
        ]);
}());