function outer() {
    var x = 10;

    function inner() {
        console.log(x);
    }
    return inner;

}
var closerFunc = outer();
closerFunc();