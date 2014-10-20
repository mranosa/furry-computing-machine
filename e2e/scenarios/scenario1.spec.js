'use strict';

/**
 * Name: Home Page
 *
 * Scenario:
 * - first time users should be in login page.
 */
describe('Home Page', function() {
	var indexPage, loginPage, dashboardPage;

	beforeEach(function() {
		indexPage = require('../index.po');
		loginPage = require('../login.po'); 
		dashboardPage = require('../dashboard.po');;
		
		indexPage.gotoPage();
	});

	it('should be able to view login page', function() {
		expect(loginPage.loginButton).toBeDefined();
	});

	it('should not be able to access dashboard page, redirect to login', function() {
		browser.get('#/dashboard');

		expect(loginPage.loginButton).toBeDefined();
	});

});