interface Shape{
    getArea(): number;
}

class Circle2 implements Shape{
    constructor(public radius: number){
        this.radius = radius;
    }

    getArea(){
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle2 implements Shape{
    constructor(private width: number, private height: number){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}

const circle2 = new Circle2(5);
console.log(circle2.radius)
const rectangle2 = new Rectangle2(10,5);

// private can not be accessed from outside of Class.
// console.log(rectangle2.width);

