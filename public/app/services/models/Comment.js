/**
 * Created by shane on 8/28/15.
 */

'use strict';

(function(){
    function CommentFactory($http){
        return {
            all: function(postId){
                return $http({method: 'GET', url: '/posts/' + postId + '/comments'});
            },
            find: function(postId, commentId){
                return $http({method: 'GET', url: '/posts/' + postId + '/comments/' + commentId});
            },
            update: function(postId, commentId, commentObj){
                return $http({method: 'PUT', url: '/posts/' + postId + '/comments', data: commentObj});
            },
            create: function(postId, commentObj){
                return $http({method: 'POST', url: '/posts/' + postId + '/comments', data: commentObj})
            }
        }
    }
})();