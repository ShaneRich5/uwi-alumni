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
                    comment: '=data'
                },
                replace: true,
                templateUrl: 'app/templates/comment/comment.html',
                controller: 'CommentCtrl'
            }
        })
}());