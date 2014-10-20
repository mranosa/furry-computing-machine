'use strict';

angular.module('dashboard', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        access: {
            requiresLogin: true
        }
      }).when('/', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        access: {
            requiresLogin: true
        }
      });
  });
