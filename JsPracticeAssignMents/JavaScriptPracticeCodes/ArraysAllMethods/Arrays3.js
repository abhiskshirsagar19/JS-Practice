/*The shift() method removes the first item of an array.
The shift() method changes the original array.
The shift() method returns the shifted element.*/

let cards = ["ICICI", "RBL", "HDFC", "BOI", "UBI"];
console.log(cards.shift());
console.log(cards);

/*The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array.*/

let paymentMode = ["Card Payment", "UPI", "Net Banking", "QR Code", "Cash"];

let pm_1 = paymentMode.slice(1, 3); // UPI Net Banking
let pm = paymentMode.slice(-3, -2); //Net Banking
console.log(pm_1);
console.log(pm);

/*The some() method checks if any array elements pass a test (provided as a callback function).
The some() method executes the callback function once for each array element.
The some() method returns true (and stops) if the function returns true for one of the array elements.
The some() method returns false if the function returns false for all of the array elements.
The some() method does not execute the function for empty array elements.
The some() method does not change the original array.*/

function checkPayment(payment) {
    if (payment == "Card t" || payment == "UI" || payment == "Net Bking" || payment == "QCode" || payment == "Ch") { //(payment == "Card Payment" || payment == "UPI" || payment == "Net Banking" || payment == "QR Code" || payment == "Cash") true
        return true;
    } else {
        // payment == "Card t" || payment == "UI" || payment == "Net Bking" || payment == "QCode" || payment == "Ch"
        return false;
    }
};

let result = paymentMode.some(checkPayment);

console.log(result);


/*The sort() sorts the elements of an array.
The sort() overwrites the original array.
The sort() sorts the elements as strings in alphabetical and ascending order.*/

let sortResult = paymentMode.sort();
console.log(sortResult);



/*The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.*/

paymentMode.splice(2, 1, "Credit Card", "Mobile Banking");
console.log(paymentMode); //'Card Payment','Cash','Credit Card','Mobile Banking','QR Code','UPI'

paymentMode.splice(1, 2);
console.log(paymentMode); //'Card Payment', 'Mobile Banking', 'QR Code', 'UPI'

/*The toString() method returns a string with array values separated by commas.
The toString() method does not change the original array.*/

let text = paymentMode.toString();
console.log(text);


/*The unshift() method adds new elements to the beginning of an array.
The unshift() method overwrites the original array.*/

paymentMode.unshift('Cash', 'Credit Card');
console.log(paymentMode);

/*The valueOf() method returns the array itself.
The valueOf() method does not change the original array.
fruits.valueOf() returns the same as fruits.*/

let dummyPaymentarr = paymentMode.valueOf();
console.log("Printing dummyPaymentarr ");
console.log(dummyPaymentarr);

/*The with() method updates a specified array element.
The with() method returns a new array.
The with() method does not change the original array.*/

let mewPaymentmodes = paymentMode.with(0, "New Cash Payment");
console.log("New Updated Arrqay :")
console.log(mewPaymentmodes);