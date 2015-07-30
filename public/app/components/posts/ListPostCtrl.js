/**
 * Created by shane on 7/16/15.
 */

'use strict';

(function(){
    angular
        .module('uwiaa')
        .controller('ListPostCtrl', [ '$scope', '$log', '$http',
            function($scope, $log, $http){
                $http.get('api/posts')
                    .success(onPostsLoaded)
                    .error(onError);

                function onPostsLoaded(res){
                    $log.log(res);
                    $scope.posts = res;
                }

                function onError(error){
                    $log.log(error.data);
                }

            }
        ]);
}());