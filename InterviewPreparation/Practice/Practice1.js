// console.log(a);
// var a = null;
// console.log(a);


// var a = 10;

// function print() {
//     // var a = 100;
//     console.log(a);
// }
// a = 200;
// console.log(a);
// a = 300;
// print();

// var x = 220;
// var y = "Hello";
// var z = undefined;

// console.log(x || y);//220
// console.log(y || z);//Hello
// console.log(x || y || z);// 220
// console.log(x && y);//Hello
// console.log(y && z);//undefined
// console.log(x && y && z);// undefined

// Pass by value
// var x = 20;
// var y = x;
// x = 30;
// console.log(x + "   " + y);


// Pass by reference

// let obj = {
//     name: 'A',
//     age: 20
// }


// let obj2 = {
//     name: 'B',
//     age: 50
// }
// let obj1 = obj2;

// obj.age = 25;
// console.log(obj);
// console.log(obj1);


// const arr = [1, 2, 3, 4, 5];

// const arr1 = arr;

// arr1.push(6, 7, 8);
// console.log(arr);
// console.log(arr1);

// var x = 10;
// function a() {

//     console.log(x)
//     console.log(y)
// }

// var x = 20;
// function b() {
//     console.log(x);
//     console.log(y)
// }
// var y = 200;
// a();

// b();


// function doo() {
//     var a = 10;
// }

// console.log(a)




// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }

// console.log("Employee=> ", employee);
// let newEmployee = employee;    // Shallow copy
// console.log("New Employee=> ", newEmployee);

// console.log("---------After modification----------");
// newEmployee.ename = "Beck";
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);


// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }
// console.log("=========Deep Copy========");
// let newEmployee = JSON.parse(JSON.stringify(employee));
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);
// console.log("---------After modification---------");
// newEmployee.ename = "Beck";
// newEmployee.salary = 70000;
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);


// const jsonobj = '{"Name":"abhi","age":24}';

// const obj = JSON.parse(jsonobj);
// console.log(obj.Name);
// console.log(obj.age);
// console.log(obj);


const student = {
    name: "Abc",
    age: 18
}

const studstring = JSON.stringify(student);
console.log(studstring);