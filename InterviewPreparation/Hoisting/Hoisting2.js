console.log(varname);
var varname;
console.log(varname);
varname = "Captain";
console.log(varname);
fn();
function fn() {
    console.log("Function fn");
};
fn();
//fnContainer();
var fnContainer = function () {
    console.log("Function container")
};
fnContainer();

// undefined
// undefined
// Captain
// Function fn
// Function fn
// Function container