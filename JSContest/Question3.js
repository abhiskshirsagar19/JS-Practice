function Outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    x = 20;
    return inner;
}

let closureFn = Outer();
closureFn();