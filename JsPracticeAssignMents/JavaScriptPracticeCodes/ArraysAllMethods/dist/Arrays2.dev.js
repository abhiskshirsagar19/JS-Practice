"use strict";

/*The keys() method returns an Array Iterator object with the keys of an array.
The keys() method does not change the original array.*/
var employeeNames = ["A", "B", "C", "D", "E", "A", "F", "G", "B", "H", "I", "J", "K", "A"];
var empname = employeeNames.keys();
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = empname[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var n = _step.value;
  } // console.log(n + " ");

  /*The lastIndexOf() method returns the last index (position) of a specified value.
  The lastIndexOf() method returns -1 if the value is not found.
  The lastIndexOf() starts at a specified index and searches from right to left (from the given postion to the beginning of the array).
  By defalt the search starts at the last element and ends at the first.
  Negative start values counts from the last element (but still searches from right to left).*/

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var indx = employeeNames.lastIndexOf("A", -3); //lastIndexOf("A")

console.log(indx);
console.log(indx); //The length property sets or returns the number of elements in an array.

console.log(employeeNames.length);
/*map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array.*/

employeeNames.map(checkNames);

function checkNames(ename) {
  var i = 101;
  console.log(ename + ":- " + i);
}

;
/*The Array.of() method creates a new array from any number of arguments.
The Array.of() method can take any type of arguments.*/

var newEmp = Array.of("K", "L", "M", "N", "O", "P", "Q", "R", "S");
console.log(newEmp);
/*The pop() method removes (pops) the last element of an array.
The pop() method changes the original array.
The pop() method returns the removed element.*/

newEmp.pop();
console.log(newEmp);
/**prototype allows you to add new properties and methods to arrays.
prototype is a property available with all JavaScript objects. */

var a = Array.prototype.myChnage = function () {
  for (var i = 0; i < this.length; i++) {
    this[i] = this[i].toLowerCase();
  }
};

employeeNames.myChnage();
console.log(employeeNames);
/**The push() method adds new items to the end of an array.
The push() method changes the length of the array.
The push() method returns the new length. */

newEmp.push("S");
console.log(newEmp);
/**The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array. */

var nums = [100, 20, 3, 44, 12, 11];

function myNums(total, num) {
  return total - num;
}

;
console.log(nums.reduce(myNums));
/*The reduceRight() method executes a reducer function for each array element.
The reduceRight() method works from right to left.
The reduceRight() method returns a single value: the function's accumulated result.
The reduceRight() method does not execute the function for empty elements.*/

var numArr = [10, 20, 30, 40, 200];
console.log(numArr.reduceRight(myNums));
/**
The reverse() method reverses the order of the elements in an array.
The reverse() method overwrites the original array. */

var arr = ["Java", "C#", "JavaScript", "C++"];
console.log(arr.reverse());