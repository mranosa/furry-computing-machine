'use strict';

angular.module('login', ['ngRoute', 'security'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      });
  });
