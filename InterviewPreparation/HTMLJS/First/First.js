const btnref = document.getElementById('btn');
btnref.addEventListener('click', function (event) {
    const firstinputref = document.getElementById('firstinput').value;
    const secondtinputref = document.getElementById('secondtinput').value
    const sum = Number(firstinputref) + Number(secondtinputref);
    (document.getElementById('thirdinput').value) = sum;
})