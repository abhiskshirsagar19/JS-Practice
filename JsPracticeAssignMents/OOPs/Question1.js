function Person(name){
    this.name = name;
};

Person.prototype.sayHello = function(){
    console.log("Hello, "+ this.name + "!");
}

var person1 = new Person("John");
person1.sayHello();