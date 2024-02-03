class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Animal sound !")
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Woof!")
    }
}

var animal = new Animal("Generic");

animal.makeSound();
