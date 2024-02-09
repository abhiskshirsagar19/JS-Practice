"use strict";

// Question 1
console.log(x); // x is not defined
// Question 2
// Question 3
// Question 4

a = 1;
console.log(a);
var a; // Question 5

console.log(b);
var b = 1; // Question 6

console.log(c);
c = 1; // Question 7

console.log(sum);

var sum = function sum(a, b) {
  return a + b;
}; // Question 8


console.log(total);

var total = function total(a, b) {
  return a + b;
}; // Question 9


console.log(sum(1, 2));

function sum1(a, b) {
  return a + b;
} // Question 10


function example1() {
  if (true) {
    var aa = 1;
    var _bb = 2;
  }

  console.log(aa);
  console.log(bb);
}

example1(); // Question 11

var cc = 20;

function example2() {
  if (true) {
    var cc = 1;
  }

  console.log(cc);
}

example2(cc);
console.log(cc); // Question 12

var dd = 20;

function example3() {
  if (true) {
    dd = 1;
  }

  console.log(dd);
}

example3(dd);
console.log(dd); // Question 13

function parent() {
  var a = 20;

  function child() {
    console.log(a);
  }

  child();
}

parent(); // Question 14

function parent1() {
  var a = 20;

  function child() {
    console.log(a);

    function child2() {
      console.log(a);
    }
  }

  child2();
}

parent1(); // Question 15
// Question 16
// Question 17
// Question 18
// Question 19
// Question 20
// Question 20
// Question 21
// Question 22
// Question 23
// Question 24
// Question 25
// Question 26
// Question 27
// Question 28
// Question 29
// Question 30
// Question 31
// Question 32
// Question 33
// Question 34
// Question 35
// Question 36
// Question 37
// Question 38
// Question 39
// Question 40
// Question 41
// Question 42
// Question 43
// Question 44
// Question 45
// Question 46
// Question 47
// Question 48
// Question 49
// Question 50