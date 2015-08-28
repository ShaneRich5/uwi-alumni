/**
 * Created by shane on 8/26/15.
 */

'use strict';

(function(){
    function PostFactory($http){
        return {
            all: function(){
                return $http({method: 'GET', url: '/posts'});
            },
            find: function(id){
                return $http({method: 'GET', url: '/posts/' + id});
            },
            update: function(postObject){
                return $http({method: 'PUT', url: '/posts', data: postObject});
            },
            create: function(postObject){

            },
            login: function(credentials){
                return $http({method: 'POST', url: '/login', data: credentials});
            },
            register: function(credentials){
                return $http({method: 'POST', url: '/register', data: credentials})
            }
        };
    }

    angular
        .module('uwiaa')
        .factory('User', [
            '$http',
            PostFactory
        ]);
})();