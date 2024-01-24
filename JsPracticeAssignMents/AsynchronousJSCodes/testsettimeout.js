console.log("Before");

function greet() {
    console.log("This is asynchronous..........");
}
setTimeout(greet, 3000);
console.log("After");