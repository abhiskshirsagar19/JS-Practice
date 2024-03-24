const obj = {
    propOne: "Abcd",
    propTwo: 10
}
const obj1 = { ...obj }
obj1.propTwo = 20;
obj.propOne = "Efgh";
console.log(obj1);
console.log(obj);