'use strict';

/**
 * Name: Login Page
 *
 * Scenario:
 * - Pro and Parents should be able to login.
 */
describe('Login Page', function() {
	var indexPage, loginPage, dashboardPage;

	beforeEach(function() {
		loginPage = require('../login.po');
		dashboardPage = require('../dashboard.po');;

		loginPage.gotoPage();
	});

	describe('Pro', function() {
		it('should be able login', function() {
			loginPage.loginAs('pro', 'pro');
			expect(browser.getCurrentUrl()).toContain('/dashboard');
		});

	});

});