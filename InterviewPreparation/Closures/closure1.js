//  const myname = "Abhishek"; // Abhishek

function myfunction() {
    const myname = "Abhishek";
    function displayname() {
        // console.log(myname);
          //  const myname = "Abhishek"; // Abhishek
        return myname
    }
    //  const myname = "Abhishek"; // Abhishek
    return displayname;
}
const inn = myfunction();
console.log(inn());

