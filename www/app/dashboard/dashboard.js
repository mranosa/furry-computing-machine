'use strict';

angular.module('wiizbabyApp')
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
