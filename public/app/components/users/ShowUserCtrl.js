/**
 * Created by shane on 7/21/15.
 */

'use strict';

(function(){
    function ShowUserCtrl($scope, $state, User){
        $scope.user = {firstName: "Shane", lastName: "Richards"};
    }

    angular
        .module('uwiaa')
        .controller('ShowUserCtrl', [
            '$scope',
            '$state',
            'User',
            ShowUserCtrl
        ]);
}());