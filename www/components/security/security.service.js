'use strict';

angular.module('security', [])
  .factory('security', function() {

    return {
      currentUser: undefined,
      isAuthenticated: function() {
        return !!this.currentUser;
      },
      isAdmin: function() {
        return !!(this.currentUser && this.currentUser.admin);
      }
    };
  });