/**
 * Created by shane on 7/14/15.
 */
'use strict';

(function(){
    var app = angular.module('uwiaa', [
        'ui.router',
        'ngCookies',
        'satellizer'
    ]);

    app.config(['$stateProvider', '$authProvider',
        function($stateProvider, $authProvider) {

        }
    ]);
}());