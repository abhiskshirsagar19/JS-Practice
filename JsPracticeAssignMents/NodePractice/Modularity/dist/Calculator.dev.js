"use strict";

function add(a, b) {
  console.log("The addition is: ".concat(a + b));
}

function sub(a, b) {
  console.log("The subtraction is: ".concat(a - b));
}

function mul(a, b) {
  console.log("The multiplication is: ".concat(a * b));
}

function div(a, b) {
  console.log("The division is: ".concat(a / b));
}

module.exports = {
  addition: add,
  subtraction: sub,
  multiplication: mul,
  division: div
};