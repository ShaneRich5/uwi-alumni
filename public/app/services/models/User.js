/**
 * Created by shane on 8/26/15.
 */

'use strict';

(function(){
    function UserFactory($http){
        return {
            all: function(){
                return $http({method: 'GET', url: '/users'});
            },
            find: function(id){
                return $http({method: 'GET', url: '/users/' + id});
            },
            update: function(userObject){
                return $http({method: 'PUT', url: '/users', data: userObject});
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
            UserFactory
        ]);
})();