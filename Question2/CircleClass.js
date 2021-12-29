function Circle(radius) {
    this.radius = radius
}
Circle.prototype.getArea = function () {
    return Math.PI * (this.radius ** 2)
}
Circle.prototype.getPerimeter = function () {
    return Math.PI * 2 * this.radius
}
let circy = new Circle(11)
console.log(circy.getArea())
let circle = new Circle(4.44)
console.log(circle.getPerimeter())


// class Circle{
//     constructor(raduis){
//         this.raduis=raduis
//     }
//     getArea() {
//         return Math.PI * (this.raduis ** 2)
//     }
//     getPerimeter() {
//        return 2 * Math.PI * this.raduis
//      }

//  }
// const circle1 = new Circle(4.44)
// console.log(circle1.getPerimeter())
// console.log(circle1.getArea())
