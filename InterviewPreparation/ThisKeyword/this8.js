'use strict'
function outer() {
    return function inner () {
        console.log(this)
    }
}
console.log(outer)
//return object/function itselt