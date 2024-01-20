const arr = ["abhi","kavya"];

 function changeNames(arr){
    const result = [];
    for (let i = 0 ; i < arr.length;i++){
        // arr[i] = arr[i].toUpperCase();
        result.push(arr[i].toUpperCase());
    }
    return result;
}
//console.log(changeNames(arr));
console.log(changeNames([...arr]));
console.log(changeNames(arr.slice()));
console.log(arr);