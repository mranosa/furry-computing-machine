'use strict';

angular.module('wiizbabyApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngCordovaMocks',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });