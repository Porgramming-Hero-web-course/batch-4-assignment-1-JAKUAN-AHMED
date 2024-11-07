//problem-04
//defining union type shape and calculate area 
//circle area returning the number to 2 decimal places


type circle={
    shape:"circle";
    radius:number;
}
type rectangle={
    shape:"rectangle";
    width:number;
    height:number;
}
type UnionShape=circle | rectangle;

function calculateShapeArea(Shape:UnionShape):number{
    
    return (Shape.shape==="circle")
    ?Math.round((Math.PI*Shape.radius * Shape.radius)*100)/100
    : (Shape.shape==="rectangle")?(Shape.height*Shape.width)
    :0;

    
}
// console.log(
//   calculateShapeArea({ shape: "circle", radius: 5 })
// );