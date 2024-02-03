function Vehicle() {
    this.engine = true;
}

Vehicle.prototype.start = function () {
    console.log("Engine started.")
}

function Car() {
    Vehicle.call(this);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var car = new Car();
console.log(car.engine);