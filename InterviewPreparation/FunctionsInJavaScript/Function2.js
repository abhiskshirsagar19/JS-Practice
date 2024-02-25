function outer() {
    console.log("I am  outer function");
    return function inner() {
        console.log("I am inner function");
    }
}

let infun = outer();
infun();
console.log(infun);//
infun();
/*
I am  outer function
I am inner function
[Function: inner]
I am inner function*/