// We create objects with curly braces {…} and a list of properties. 
//A property is a key-value pair where the key must be a string or a symbol, and the value can be of any type, including another object.
/*
Object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables. 
Even better, object destructuring can extract multiple properties in a single statement, can access properties from nested objects, and can set a default value if the property doesn't exist.
*/

const employee = { empname: "Abhishek", organization: "HCL", experience: "2 years", location: "Pune" };

// Traditional way to get object properties
let ename = employee.empname;
let eorganization = employee.organization;
let eexperience = employee.experience;
let elocation = employee.experience

console.log("Employee Name : " + ename,
    "Employee Organization Name : " + eorganization,
    "Employee Organization Experience : " + eexperience,
    "Employee Organization Location : " + elocation);

// Object destructuring
const { empnamename } = employee;
const { organization } = employee;
const { experience } = employee;
const { location } = employee;
console.log("================== Object Destructuring ====================")
console.log(empname, organization, experience, location);