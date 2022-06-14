// interface는 클래스 또는 객체를 위한 타입을 지정 할 때 사용되는 문법입니다.

interface Shape{
    getArea(): number;
    // 함수    // 리턴값
    // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape{
      // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
    radius: number; // 멤버 변수 radius 값을 설정합니다.

    constructor(radius: number) {
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현합니다.
    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape{
    width: number;
    height: number; 
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height; 
    }
    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10,5)];

const circle = new Circle(5);
console.log(circle.radius);
const rectangle = new Rectangle(10,5);
console.log(rectangle.width);

shapes.forEach(shape => {
    console.log(shape.getArea());
})

