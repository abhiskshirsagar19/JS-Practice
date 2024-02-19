function multiplyBy(num) {
    return function (x) {
        return num * x;
    }
}

var multiplyByTwo = multiplyBy(2);
var multiplyByThree = multiplyBy(3);
var result = multiplyByTwo(multiplyByThree(4));

console.log(result);