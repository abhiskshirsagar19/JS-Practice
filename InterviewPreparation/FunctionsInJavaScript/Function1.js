//Normal Function
function call() {
    console.log("Hi I am call function");
}
call();
//Function with parameter
function doCall(anything) {

    anything = 10;
    anything = "I am function paramenter";
    console.log(anything);//undefined
}
doCall();

//Funcation pass as parameter

function magic(fun) {
    return fun;
}

console.log(magic(doCall));
console.log(magic(doCall()));

console.log("====================================");

function outer() {
    console.log("I am  outer function");
    return function inner() {
        console.log("I am inner function");
    }
}

outer(); //I am  outer function
console.log(outer())//I am  outer function [Function: inner]



