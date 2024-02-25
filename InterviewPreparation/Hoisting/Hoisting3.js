console.log("line 1 ", varname);
var varname = 10;

function b() {
    console.log("line 5 ", varname);
}
console.log("line 7 ", varname);
function fn() {
    console.log("line 9 ", varname);
    var varname = 20;
    b();
    console.log("line 13 ", varname);
}
fn();
// line 1  undefined
// line 7  10
// line 9  undefined
// line 5  10
// line 13  20