function Outer() {
    let x = 5;
    return function inner(y) {
        x += y;
        return x;
    };
}

let closureFn = Outer();
console.log(closureFn(3));
console.log(closureFn(2));