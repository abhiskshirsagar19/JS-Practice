// function myFun(num) {
//     setTimeout(() => {
//         return num * 2;
//     }, 0)
// }
// let i = 0;
// for (i = 1; i <= 5; i++) {
//     console.log(myFun(i));
// }


//====== output for above code is undefined for 5 times

// function myFun(num) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(num * 2);
//         }, 0);
//     });
// }

// for (i = 1; i <= 5; i++) {
//     console.log(myFun(i));
// }
//====== output for above code is logs Promise { <pending> } for 5 times

// function myFun(num) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(num * 2);
//         }, 0);
//     });
// }

// async function main() {
//     for (let i = 1; i <= 5; i++) {
//         const result = await myFun(i);
//         console.log(result);
//     }
// }

// main();
//====== output for above code is logs 2,4,6,8,10

function myFun(num, callback) {
    setTimeout(() => {
        callback(num * 2);
    }, 0)
}

for (let i = 1; i <= 5; i++) {
    myFun(i, (result) => {
        console.log(result);
    })

}