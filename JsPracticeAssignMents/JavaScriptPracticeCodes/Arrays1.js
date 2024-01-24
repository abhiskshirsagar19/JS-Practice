/*The findLast() method returns the value of the last element that passes a test.
The findLast() method executes a function for each array element.
The findLast() method returns undefined if no elements are found.
The findLast() method does not execute the function for empty elements.
The findLast() method does not change the original array.*/

const city = ["Pune", "Solapur", "Barshi", "Mumbai", "Dharashiv"];


function checkCity(city) {
    if (city == "Pune" || city == "Solapur" || city == "Barshi" || city == "Mumbai" || city == "Dharashiv") {
        return true;
    } else {
        return false;
    }
}
console.log(city.findLast(checkCity)); // Dharashiv


/*The findLastIndex() method executes a function for each array element.
The findLastIndex() method returns the index (position) of the last element that passes a test.
The findLastIndex() method returns -1 if no match is found.
The findLastIndex() method does not execute the function for empty array elements.
The findLastIndex() method does not change the original array.*/
const citys = ["Pune", "Solapur", "Barshi", "Mumbai", "Dharashiv", "Pandharpur"];


function checkCity(city) {
    if (city == "Pune" || city == "Solapur" || city == "Barshi" || city == "Mumbai" || city == "Dharashiv" || city == "Pandharpur") {
        return true;
    } else {
        return false;
    }
}
console.log(citys.findLastIndex(checkCity));


//The flat() method concatenates sub-array elements.

let cityCodes = [
    [111, 101, 87],
    [222, 45],
    [22, 90, 13],
    [12, 34]
];

let allcityCodes = cityCodes.flat();
console.log(allcityCodes);



/*The flatMap() method maps all array elements and creates a new flat array.
flatMap() creates a new array from calling a function for every array element.
flatMap() does not execute the function for empty elements.
flatMap() does not change the original array.*/

let newArr = city.flatMap((c) => "SmartCity_" + c);

console.log(newArr);

/*The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.*/

function myArr(cityname) {
    console.log("This is " + cityname);
}
newArr.forEach(myArr);


/*The Array.from() method returns an array from any object with a length property.
The Array.from() method returns an array from any iterable object.*/

let dummyText = "ABCDEFGHI";
let arrText = Array.from(dummyText);

console.log(arrText);


/*The includes() method returns true if an array contains a specified value.
The includes() method returns false if the value is not found.
The includes() method is case sensitive.*/


console.log(city.includes("Beed", 4));
console.log(city.includes("Barshi", 1));

/*The indexOf() method returns the first index (position) of a specified value.
The indexOf() method returns -1 if the value is not found.
The indexOf() method starts at a specified index and searches from left to right (from the given start postion to the end of the array).
By default the search starts at the first element and ends at the last.
Negative start values counts from the last element (but still searches from left to right).
*/

let cityIndex = city.indexOf("Dharashiv");

console.log(cityIndex);
let cityIndex_1 = city.indexOf("Goa");
console.log(cityIndex_1);

/*The isArray() method returns true if an object is an array, otherwise false.
Array.isArray() is a static property of the JavaScript Array object.
You can only use it as Array.isArray().
Using x.isArray(), where x is an array will return undefined.*/

let result = Array.isArray(dummyText);
console.log(result);

let result_1 = Array.isArray(city);
console.log(result_1);


// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).

let citystr = city.join();
console.log(citystr);

let citystr_1 = city.join(" and ");
console.log(citystr_1);