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

let cityCodes =[[111,101,87],[222,45],[22,90,13],[12,34]];

let allcityCodes= cityCodes.flat();
console.log(allcityCodes);