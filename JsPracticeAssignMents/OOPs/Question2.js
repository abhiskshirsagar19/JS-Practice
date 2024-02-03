function Circle(radius){
    this.radius = radius;
};

Circle.prototype.getArea = function(){
    return Math.PI * this.radius * this.radius;
};

var circle = new Circle(5);
console.log(circle.getArea());