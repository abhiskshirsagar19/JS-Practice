//Initialise array

let arr = ["CSS", "JavaScript", "HTML", "Java", "C#", "C++", "Python"];
let index = 2;

//The at() method returns an indexed element from an array.
console.log(arr.at(5));

const arr1 = ["Springboot", "Node", "React", "VueJS"];


// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.
const arr3 = arr.concat(arr1);
console.log(arr3);

// The constructor property returns the function that created the Array prototype.
// For JavaScript arrays the constructor property returns:
// function Array() { [native code] }

let nativearr = arr3.constructor;
console.log(nativearr); // [Function: Array]


// The copyWithin() method copies array elements to another position in an array.
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.

let cpyarr = arr1.copyWithin(1, 0, 2);
console.log(cpyarr);




// The entries() method returns an Array Iterator object with key/value pairs:

// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]

// The entries() method does not change the original array.
let f = arr1.entries();

for (let x of f) {
    console.log(x);
}


// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array


function technologies(lang) {
    // if (lang == "CSS" && lang == "JavaScript" && lang == "HTML" && lang == "Java" && lang == "C#" && lang == "C++" && lang == "Python") {
    //     return true;
    // } return false
    if (lang == "CSS" || lang == "JavaScript" || lang == "HTML" || lang == "Java" || lang == "C#" || lang == "C++" || lang == "Python") {
        return true;
    } else {
        return false;
    }
}

console.log(arr.every(technologies));

/*
The fill() method fills specified elements in an array with a value.
The fill() method overwrites the original array.
Start and end position can be specified. If not, all elements will be filled.*/
// arr.fill("A");     
// console.log(arr);
/**[
  'A', 'A', 'A',
  'A', 'A', 'A',
  'A'
] */

arr.fill("SQL",6);
console.log(arr);

/*The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.*/

const checklang = arr.filter(technologies);

function technologies(lang) {
   
    if (lang == "CSS" || lang == "JavaScript" || lang == "HTML" ) {
        return true;
    } else {
        return false;
    }
}
console.log(checklang);



/*The find() method returns the value of the first element that passes a test.
The find() method executes a function for each array element.
The find() method returns undefined if no elements are found.
The find() method does not execute the function for empty elements.
The find() method does not change the original array.*/


const testlang = arr.find(technologies);

function technologies(lang) {
   
  return lang == "C++";
}
console.log(testlang);
console.log(arr.find(technologies));


/**The findIndex() method executes a function for each array element.
The findIndex() method returns the index (position) of the first element that passes a test.
The findIndex() method returns -1 if no match is found.
The findIndex() method does not execute the function for empty array elements.
The findIndex() method does not change the original array. */
const ind = arr.findIndex(technologies);

function technologies(lang) {
   
  return lang == "C++";
}
console.log(ind);