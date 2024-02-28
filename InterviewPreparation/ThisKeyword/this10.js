'use strict'
let obj = {
    name: "Abcd",
    fun: function () {
        function g() {
            console.log(this)
        }
        g();
    }
}

obj.fun();
// return  undefind