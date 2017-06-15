/// <reference path="login/login.tmpl.html" />
(function () {
    'use strict';

    angular.module('SlApp.route').
    config(function ($routeProvider) {
        $routeProvider.when('/login', {
            controller: 'LoginController',
            templateUrl: 'login/login.tmpl.html' 
        })
            .when('/index', {
                controller: 'indexctrl',
                templateUrl: 'index.html'
            }).
        when('/home', {
            controller: 'homectrl',
            templateUrl: 'home/home.tmpl.html'
        }).
        when('/schedule', {
            controller: 'schedulectrl',
            templateUrl: 'schedule/schedule.tmpl.html'
        })
        ;
    });
})();