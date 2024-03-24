const obj = {
    propOne: "Abcd",
    propTwo: 10
}

const obj1 = Object.assign({}, obj);
console.log(obj1);

obj1.propOne = "Efgh";
obj1.propTwo = 20;
console.log(obj1);