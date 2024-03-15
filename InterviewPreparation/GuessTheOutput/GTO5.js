let a = 11;
function myFunction() {
    // let a = 1;
    //  a = 200;
    function test() {
        // a = 400;
        console.log(a);
    }
    //a = 500
    // a = 100 // 100
    return test
}
let c = myFunction();
c();