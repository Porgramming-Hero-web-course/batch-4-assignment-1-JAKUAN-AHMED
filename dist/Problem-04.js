"use strict";
//problem-04
//defining union type shape and calculate area 
//circle area returning the number to 2 decimal places
function calculateShapeArea(Shape) {
    return (Shape.shape === "circle")
        ? Math.round((Math.PI * Shape.radius * Shape.radius) * 100) / 100
        : (Shape.shape === "rectangle") ? (Shape.height * Shape.width)
            : 0;
}
// console.log(
//   calculateShapeArea({ shape: "circle", radius: 5 })
// );
