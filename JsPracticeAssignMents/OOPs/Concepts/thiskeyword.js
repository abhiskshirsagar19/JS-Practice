console.log(this); //{}

function test() {
    console.log(this);
}

test(); // Object [global]


let obj = {
    name: "Abhi",
    age: 20,
    getname: function () {
        console.log(this);//Object [global] 
    }
}

obj.getname();

const getnameRef = obj.getname;
getnameRef();//Object [global] 
