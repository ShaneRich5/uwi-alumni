/**
 * Created by shane on 7/19/15.
 */

(function(){
    angular
        .module('uwiaa')
        .controller('PostShowCtrl', [ '$scope', '$http', '$log', '$stateParams',
            function($scope, $http, $log, $stateParams) {

                $http.get('api/posts/' + $stateParams.postId)
                    .then(onPostLoaded, onError);

                function onPostLoaded(res) {
                    $log.log(res.data);
                    $scope.post = res.data;
                }

                function onError(error) {
                    $log.log(error);
                }
            }
        ])
}());