'use strict';

var LoginPage = function() {
  this.loginButton = element(by.css('.login-button'));
  
  this.gotoPage = function(){
  	browser.get('#/login');
  }
};

module.exports = new LoginPage();

