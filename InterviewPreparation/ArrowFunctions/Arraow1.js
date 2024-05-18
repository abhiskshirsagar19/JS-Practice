const yearUntilRetirement = (birthYear,firstName)=>{
    const age = 2024 - birthYear;
    const retirement = 58 -age;
    return `${firstName} have ${retirement} years reamaining to getting retire.`
}
console.log(yearUntilRetirement(1999,"Abhishek"));
console.log(yearUntilRetirement(1990,"Abhi"));