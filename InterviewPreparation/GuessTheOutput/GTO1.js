// First fullName variable defined in the global scope:
//const fullName = "Oluwatobi "; ReferenceError: fullName is not defined
const fullName = "Oluwatobi ";
// Nested functions containing two more fullName variables:
function profile() {
    // const fullName = "Oluwatobi Sho";
    function sayName() {
        // const fullName = "Tobi Sofe";
        function writeName() {
            //  const fullName = "Sofe";
            return fullName;
        }
        return writeName();
    }
    return sayName();
}
console.log(profile());