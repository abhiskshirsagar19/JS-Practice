class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.sound = "Woof!";
    }
}

var dog = new Dog("Buddy");
dog.speak();