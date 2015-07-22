/**
 * Created by shane on 7/19/15.
 */

(function(){
    angular
        .module('uwiaa')
        .controller('PostShowCtrl', [ '$scope', '$http', '$log', '$stateParams',
            function($scope, $http, $log, $stateParams) {
                var id = $stateParams.postId; // post id

                //$http.get('api/posts/' + $stateParams.postId)
                //    .then(onPostLoaded, onError);


                $http.get('api/posts/' + id)
                    .then(function(res){
                        $log.log('Post data: ' + res.data);
                        $scope.post = res.data;

                        return $http.get('api/posts/' + id + '/comments');
                    })
                    .then(function(res){
                        //$log.log('Comments data: ' + res.data);
                        $scope.comments = res.data;
                    });

                $scope.submit = function(body){
                    $log.log('new comment to post: ' + body);
                    $http.post('api/posts/' + id + '/comments', body)
                        .then(function(res){
                            $log.log('server response to post: ' + res);
                        })
                };
            }
        ])
}());