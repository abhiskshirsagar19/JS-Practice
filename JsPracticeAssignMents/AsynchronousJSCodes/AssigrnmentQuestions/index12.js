function outer() {
    var x = 10;

    function inner() {
        console.log(x);
    }
    x = 20 ;
    return inner;
}

var closerFunc = outer();
closerFunc();