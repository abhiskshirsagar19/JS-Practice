class Shape {
    constructor() {
        this.name = 'Shape';
    }

    getName() {
        return this.name;
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.radius = 5;
    }

    getName() {
        return super.getName() + ' (Circle)';
    }
}

const circle = new Circle();
console.log(circle.getName());