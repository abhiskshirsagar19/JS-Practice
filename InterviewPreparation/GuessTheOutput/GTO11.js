// function x() {
//     var i = 1;
//     setTimeout(function () { console.log(i) }, 0);
//     console.log("Hi");
// }
// x();
//Output : Hi 1

// function x() {
//     var i = 1;
//     setTimeout(function () { console.log(i) }, 1000);
//     console.log("Hi");
// }
// x();
//Output : Hi 1

// function x() {
//     var i = 1;
//     setTimeout(function () { console.log(i) }, 1000);
//     console.log("Hi");
//     i++;
//     setTimeout(function () { console.log(i) }, 0);
// }
// x();
//Output : Hi 2 2

function x() {
    var i = 1;
    setTimeout(function () { console.log(i) }, 1000);
    console.log("Hi");
    i++;
    setTimeout(function () { console.log(7) }, 0);
}
x();
//Output : Hi 7 2