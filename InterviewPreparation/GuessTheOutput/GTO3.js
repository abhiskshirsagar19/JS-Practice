var a = 100;
console.log("line 2 :" + a);//100
function check(a) {
    console.log("line 4 :" + a);//100
    var a = 10;
    console.log("line 6 :" + a);//10
    a += 10;
    console.log("line 8 :" + a);//20
}
console.log("line 10 :" + a);//100
check(a);