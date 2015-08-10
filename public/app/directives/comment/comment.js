/**
 * Created by shane on 7/20/15.
 */

(function(){
    angular
        .module('uwiaa')
        .directive('comment', function(){
            return {
                restrict: 'AE',
                scope: {
                    body: '='
                },
                replace: true,
                templateUrl: 'app/templates/comments/comment.html',
                controller: 'CommentCtrl'
            }
        });
}());