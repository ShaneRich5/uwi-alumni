/**
 * Created by shane on 7/17/15.
 */

'use strict';

(function(){
    angular
        .module('uwiaa')
        .directive('navbar', function() {
            return {
                restrict: 'AE',
                replace: true,
                templateUrl: 'app/shared/navbar/navbar.html',
                controller: 'NavbarCtrl'
            }
        })
}());