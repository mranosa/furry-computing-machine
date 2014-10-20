'use strict';

var DashboardPage = function() {
  this.gotoPage = function(){
  	browser.get('#/dashboard');
  }
};

module.exports = new DashboardPage();

