// for (var i = 0; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }
// //Output 6 6 6 6 6 6

// for (let i = 0; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }
// //Output 0 1 2 3 4 5
















// function x() {
//     for (var i = 0; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hi");
// }
// x();
//Output Hi 6 6 6 6 6 6

// function x() {
//     for (let i = 0; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hi");
// }
// x();
//Output Hi 0 1 2 3 4 5

// function x() {
//     for (var i = 0; i <= 5; i++) {
//         function change(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000);
//         }
//         change(i);
//     }
//     console.log("Hi");
// }
// x();
//Output Hi 0 1 2 3 4 5



for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
