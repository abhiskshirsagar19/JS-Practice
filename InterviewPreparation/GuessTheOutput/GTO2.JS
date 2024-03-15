// First fullName variable defined in the global scope:
const fullName = "Oluwatobi ";

// Nested functions containing two more fullName variables:
function profile(fullName) {
    // const fullName = "Oluwatobi Sho";
    function sayName(fullName) {
        // const fullName = "Tobi Sofe";
        fullName = "Tobi Sofe";
        function writeName(fullName) {
            //  const fullName = "Sofe";

            return fullName;
        }
        return writeName();
    }
    return sayName();
}
console.log(profile());