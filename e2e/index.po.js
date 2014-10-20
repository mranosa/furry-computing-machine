'use strict';

var IndexPage = function() {
  this.gotoPage = function(){
  	browser.get('#/');
  }
};

module.exports = new IndexPage();

