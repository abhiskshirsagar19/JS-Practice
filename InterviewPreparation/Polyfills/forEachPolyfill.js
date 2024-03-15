//forEach
const arr = [1, 2, 3, 4, 5];

//arr.forEach((ele) => { console.log(ele) });

function traverse(ele) {
    console.log(ele);
}
Array.prototype.myforEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

arr.myforEach(traverse);


// fill the array using this

const arr2 = [];

arr.myforEach((ele) => {
    arr2.push(ele);
});

console.log();
arr2.myforEach(traverse);