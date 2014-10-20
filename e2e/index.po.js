'use strict';

var MainPage = function() {
  this.loginButton = element(by.css('.login-button'));
  
  this.gotoPage = function(){
  	browser.get('#/');
  }
};

module.exports = new MainPage();

