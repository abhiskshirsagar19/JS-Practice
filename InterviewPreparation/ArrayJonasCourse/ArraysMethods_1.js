// Slice method
// It doesn't mutate the original array
// We use this method to extract some part from the array.

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log("====== Slice Method ====");
console.log(arr.slice(1));
console.log(arr.slice(1, 4));
console.log(arr.slice(-2, -1));
console.log(arr.slice());
console.log(arr.slice([...arr]));
console.log(arr);
console.log("=========================")
console.log("====== Splice Method ====");
// Splice method
// It mutate the original array
// We use this method to delete some part of array 

let ar = ['a', 'b', 'c', 'd', 'e'];
console.log(ar.splice(1));
console.log(ar.splice(1, 3));
console.log(ar.splice(-3));
console.log(ar);
console.log("=========================");

// Reverse Method
// It mutate the original array
console.log("==== Reverse Method =====");
const arrr = ['a', 'b', 'c', 'd', 'e'];
console.log(arrr.reverse());
console.log(arrr);
console.log("=========================");

// Concat
// It doesn't mutate the original array

console.log("===== Concat ====")
const a = ['a', 'b', 'c', 'd', 'e'];
const b = ['f', 'g', 'h', 'i', 'j'];
const ab = a.concat(b);

console.log(ab);
console.log(...a, ...b);
console.log("=========================");

// Join 
// Mutate the original array
console.log("===== Join ====");
console.log(ab.join(" - "));
console.log("=========================");
