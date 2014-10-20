'use strict';

angular.module('login')
	.controller('LoginCtrl', function($scope, security, $location) {
		$scope.login = function() {
			security.login($scope.username, $scope.password).then(function() {
				$location.path("/dashboard");
			}, function() {
				alert('Invalid Credentials');
			});
		};
	});