function displayer(some) {
    console.log(some);
}

function Calculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

Calculator(10, 20, displayer);