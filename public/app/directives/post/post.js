/**
 * Created by shane on 8/9/15.
 */

'use strict';

(function(){
    angular
        .module('uwiaa')
        .directive('post', function($sce){
            return {
                restrict: 'AE',
                scope: {
                    title: '=',
                    body: '='
                },
                replace: true,
                templateUrl: 'app/templates/posts/post.html',
                controller: 'PostCtrl',
                link: function(scope, element, attr) {
                    //scope.body = $sce.trustAsHtml( markdown.toHTML( scope.body ) );
                }
            }
        });
}());