let obj = {
    name: "Abcd",
    fun: function () {
        console.log(this)
    }
}

obj.fun();
// return  object itselt 