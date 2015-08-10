/**
 * Created by shane on 8/9/15.
 */
'use strict';
(function(){
    angular
        .module('uwiaa')
        .factory('Post', ['$resource',
            function($resource){
                return $resource("http://localhost:8000/api/posts/:id", {}, {});
            }
        ]);
})();