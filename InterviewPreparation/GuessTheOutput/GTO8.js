let a = 10;

function myFunction() {
    //let a = 200;
    return function inner(a) {
        console.log(a);
    }
    return function outer() {
        console.log(a);
    }
   
}

let x = myFunction();
// console.log(x(90));
x(12);