function Shape() {
    this.name = "Shape";
}

Shape.prototype.getName = function () {
    return this.name;
};

function Square(side) {
    Shape.call(this);
    this.side = side;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.getArea = function () {
    return this.side * this.side;
};

var square = new Square(5);
console.log(square.getName());