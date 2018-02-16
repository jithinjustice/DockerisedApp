'use strict';

console.log("inside app.config.js");
//httpprovider is for the request interseptor
angular.module('almApp').config(function ($urlRouterProvider, $stateProvider, $httpProvider) {


        console.log("inside app.config.js");

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('main', {
            url: '/',
            templateUrl: '/views/main.html',
            controller: 'mainCtrl'
        });
    });
