function multiplyBy(num) {
    return function (x) {
        return num * x;
        var num = 2;
    }
}
var multiplyByTwo = multiplyBy(2);
var result = multiplyByTwo(5);
console.log(result);