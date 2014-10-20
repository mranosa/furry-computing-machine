'use strict';

describe('Service: security', function() {

  // load the service's module
  beforeEach(module('security'));

  // instantiate service
  var security, $rootScope;
  beforeEach(inject(function(_security_, _$rootScope_) {
    security = _security_;
    $rootScope = _$rootScope_;
  }));

  describe('currentUser', function() {

    it('should be unauthenticated to begin with', function() {
      expect(security.isAuthenticated()).toBe(false);
      expect(security.currentUser).not.toBeTruthy();
    });

    it('should be authenticated if we update with user info', function() {
      var userInfo = {};
      security.currentUser = userInfo;
      expect(security.isAuthenticated()).toBe(true);
      expect(security.isAdmin()).toBe(false);
      expect(security.currentUser).toBe(userInfo);
    });

    it('should be admin if we update with admin user info', function() {
      var userInfo = {
        admin: true
      };
      security.currentUser = userInfo;
      expect(security.isAuthenticated()).toBe(true);
      expect(security.isAdmin()).toBe(true);
      expect(security.currentUser).toBe(userInfo);
    });

    it('should not be authenticated or admin if we clear the user', function() {
      var userInfo = {
        admin: true
      };
      security.currentUser = userInfo;
      expect(security.isAuthenticated()).toBe(true);
      expect(security.isAdmin()).toBe(true);
      expect(security.currentUser).toBe(userInfo);

      security.currentUser = null;
      expect(security.isAuthenticated()).toBe(false);
      expect(security.isAdmin()).toBe(false);
      expect(security.currentUser).toBe(null);
    });
  });

  describe('login', function() {
    it('should authenticate parent', function() {
      expect(security.isAuthenticated()).toBe(false);

      security.login('parent');
      $rootScope.$apply();

      expect(security.isAuthenticated()).toBe(true);
      expect(security.isAdmin()).toBe(false);
    });

    it('should authenticate pro', function() {
      expect(security.isAuthenticated()).toBe(false);
      
      security.login('pro');
      $rootScope.$apply();

      expect(security.isAuthenticated()).toBe(true);
      expect(security.isAdmin()).toBe(true);
    });
  });
});