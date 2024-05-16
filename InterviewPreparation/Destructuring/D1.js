const employee = [
    { nameemp: "A", empid: 1, epmlocation: "Pune" },
    { nameemp: "B", empid: 2, epmlocation: "Delhi" },
    { nameemp: "C", empid: 3, epmlocation: "Mubai" },
    { nameemp: "D", empid: 4, epmlocation: "Noida" }
]
function getEmps() {
    return employee;
}
function getEmp(empid) {
    return employee.find((d) => d.empid == empid)
}
const emp = getEmp(1);
const emp2 = getEmp(2);
// const empName = emp.nameemp;
// const location = emp.epmlocation;

const { nameemp, epmlocation } = emp2;



console.log(nameemp, epmlocation);




// const [em1, em2, em3] = employee;
