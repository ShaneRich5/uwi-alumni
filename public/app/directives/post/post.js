/**
 * Created by shane on 8/9/15.
 */

'use strict';

(function(){
    angular
        .module('uwiaa')
        .directive('post', function(){
            return {
                restrict: 'AE',
                scope: {
                    title: '=',
                    body: '='
                },
                replace: true,
                templateUrl: 'app/templates/posts/post.html',
                controller: 'PostCtrl'
            }
        });
}());