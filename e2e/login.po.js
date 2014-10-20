'use strict';

var LoginPage = function() {
	this.username = element(by.css('.username'));
	this.password = element(by.css('.password'));
	this.loginButton = element(by.css('.login-button'));

	this.loginAs = function(username, password){
		this.username.sendKeys(username);
        this.password.sendKeys(password);
        this.loginButton.click();
	}

	this.gotoPage = function() {
		browser.get('#/login');
	}
};

module.exports = new LoginPage();