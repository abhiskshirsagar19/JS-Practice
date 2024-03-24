// Input =  [1, 2, 3, [4, 5, [6, 7]], [[[[NaN], undefined]]]];
// Output = [1,2,3,4,5,6,7,Nan,Undefined]

const arr = [1, 2, 3, [4, 5, [6, 7]], [[[[NaN], undefined]]]];

const flatten = (input) => {
    let result = []
    if (!Array.isArray(input)) {
        console.log(input)
        return input;
    }
    for (let data of input) {
        console.log(result)
        result = result.concat(flatten(data))
    }

    return result;
}

console.log(flatten(arr))