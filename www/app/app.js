'use strict';

angular.module('wiizbabyApp', [
  'ngCordovaMocks',
  'ngRoute',
  'security',
  'dashboard',
  'login'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function(security, $location, $rootScope) {
    // TODO : find a more elegant solution
    $rootScope.$on('$routeChangeStart', function(event, next) {
      if (next.access !== undefined && next.access.requiresLogin && !security.isAuthenticated()) {
        $location.path('/login');
        $rootScope.$apply();
      }
    });
  });