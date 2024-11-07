# The Significance of Union and Intersection Types in TypeScripts


=>First: Let's get aquinted with Union and Intersection Types

What is Union types in Typescripts?

We know Union mean Unity.So when two types unite and make a single type that mean its an Union type and It can holds multiple types in one.

What is Intersection type in Typescripts?
It combines multiple types into one.Thats allows you to work with all the property has in Types and also have to use all property that has in intersection type.

# Union Type

//for the better understanding we can explore a example of union type
here is Example :

```
type first={
    name:string;
    age:number;
}
type second={
    address:string
}
type UnionType=first | second //here is first and second type exist 
```

# How it's work?
// When we need both type or any of both types we can use any of UnionType.

//Lets take object where would have name,age and adress or any only once any of three.

```
const object1:UnionType={
    name:'jakuan',
    age:21,
    address:'banani dhaka' 

   // we can use any of between first and second it will not give you error
}
```


# InterSectino Type
Lets take an example for well understanding
