const arr = [1, 2, 3, 4, 5];

//arr.map(function (ele) { console.log(ele) });

Array.prototype.customMap = function (callbackFun) {
    let newarr = [];
    for (let item of this) {
        newarr.push(callbackFun(item));
    }
    return newarr;
}

arr.customMap(function (ele) { console.log(ele) });