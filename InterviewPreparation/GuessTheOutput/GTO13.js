// const a = 20;
// {
//   const a = 30;
//   console.log("Inside Block 1, a = ",a);
//   {
//     const a = 40;
//     console.log("Inside Block 2, a = ",a);
//   }
// }
// console.log("Outside Block, a = ",a);
//Inside Block 1, a =  30
// Inside Block 2, a =  40
// Outside Block, a =  20

// var a = 10;
// {
//     var a = 30;
//     console.log("Inside Block 1, a = ", a);
//     {
//         var a = 40;
//         console.log("Inside Block 2, a = ", a);
//     }
// }
// console.log("Outside Block, a = ", a);
// Inside Block 1, a =  30
// Inside Block 2, a =  40
// Outside Block, a =  40



// var a = 20;
// function x() {
//     var a = 10;
//     console.log(a);
// }
// console.log(a);
// x();
//Output 20 10


// var a = 20;
// function x() {
//     var a = 10;
//     console.log(a);
// }
// x();
// console.log(a);
//Output 10 20

// function x(a, b, c, d,) {
//     console.log(a, b, c, d,);
// }
// console.log(x.length);
//Output 4

// const obj = {
//     propOne: "Abcd",
//     propTwo: 10
// }
// const obj1 = { ...obj }
// obj1.propTwo = 20;
// obj.propOne = "Efgh";
// console.log(obj1);
// console.log(obj);

let a = 100;
function x() {
    console.log(a);
}
x();