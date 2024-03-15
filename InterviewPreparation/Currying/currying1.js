function area(height) {
    return function (breadth) {
        return function (length) {
            return height * breadth * length;
        }
    }
}

console.log(area(1));
console.log(area(1)(2));
console.log(area(1)(2)(3));

/*
[Function (anonymous)]
[Function (anonymous)]
6
*/

console.log(area(1)()());
console.log(area(1)(2)());
console.log(area(1)(2)(3));

/*
NaN
NaN
6
*/
