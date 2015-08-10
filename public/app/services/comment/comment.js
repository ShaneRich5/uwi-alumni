/**
 * Created by shane on 8/9/15.
 */
'use strict';
(function(){
    angular
        .module('uwiaa')
        .factory('Comment', ['$resource',
            function($resource){
                return $resource("http://localhost:8000/api/posts/:postId/comments/:commentId", {}, {});
            }
        ]);
})();