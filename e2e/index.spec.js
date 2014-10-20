'use strict';

/**
 * Name: Redirect user to login homepage
 *
 * Scenario:
 * - user should be in login page on web app load for the first time.
 */
describe('Index View', function() {
	var page;

	beforeEach(function() {
		page = require('./index.po');
		page.gotoPage();
	});

	it('should be able to view login page', function() {
		//expect login button to exist
		expect(page.loginButton).toBeDefined();
	});

});