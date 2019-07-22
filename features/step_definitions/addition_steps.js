const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const Calculator = require('../../lib/calculator');

let calculator;

Given('the numbers {int} and {int}', function (int, int2, callback) {
    calculator = new Calculator();
    callback();
  });

When('they are added together', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


Then('should the result be {int}', function (int, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

