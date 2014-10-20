'use strict';

angular.module('security', [])
  .factory('security', function($q) {

    return {
      currentUser: undefined,
      isAuthenticated: function() {
        return !!this.currentUser;
      },
      isAdmin: function() {
        return !!(this.currentUser && this.currentUser.admin);
      },
      login: function(username, password) {
        var deferred = $q.defer();

        if (username === 'pro') {
          this.currentUser = {
            admin: true
          };
          deferred.resolve();
        } else if (username === 'parent') {
          this.currentUser = {
            admin: false
          };
          deferred.resolve();
        } else {
          deferred.reject();
        }

        return deferred.promise;
      }
    };
  });