/**
 * Created by shane on 7/16/15.
 */

'use strict';

(function(){
    angular
        .module('uwiaa')
        .controller('PostListCtrl', [ '$scope', '$log', '$http',
            function($scope, $log, $http){
                $http.get('api/posts')
                    .success(onPostsLoaded)
                    .error(onError);

                function onPostsLoaded(res){
                    $log.log(res.data);
                }

                function onError(error){
                    $log.log(error.data);
                }

            }
        ]);
}());