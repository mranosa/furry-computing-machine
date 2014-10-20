'use strict';

angular.module('wiizbabyApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngCordovaMocks',
  'ngRoute',
  'security'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function(security, $location, $rootScope) {
    $rootScope.$on('$routeChangeStart', function(event, next) {
      if (next.access !== undefined && next.access.requiresLogin && !security.isAuthenticated()) {
        $location.path('/login');
        $rootScope.$apply();
      }
    });
  });