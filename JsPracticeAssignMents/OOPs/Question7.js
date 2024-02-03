class Vehicle {
    constructor() {
        this.hasEngine = true;
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        this.numWheels = 4;
    }
};

var car = new Car();
console.log(car.hasEngine);