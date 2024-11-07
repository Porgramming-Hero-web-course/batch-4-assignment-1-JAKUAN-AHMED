## **✨The Significance of Union and Intersection Types in TypeScripts**

🎯*Welcome! in this guide.We will dive into Uninon and Intersection types in Typescripts*

🥇*First: Let's get acquainted with Union and Intersection Types*

### **What is Union types in Typescripts?**

🎯*A union types allows a variable to hold multiple types,representing the concept of unity.It enables flexibility by allowing a variable to be of one type or another.making it perticularly useful when dealing with diverse data.*

### **🤔 What is Intersection type in Typescripts?**

*It combines multiple types into one.Thats allows you to work with all the property has in Types and also have to use all property that has in intersection type.*

### **Union Type ( | )**

🎯*for the better understanding we can explore a example of union type
here is Example*

```ts
type first = {
  name: string;
  age: number;
};
type second = {
  address: string;
};

//it combines first and second type
type UnionType = first | second;
```

### **🔍How it's work?**

🎯*When we need both type or any of both types we can use any of UnionType*

🎯*Lets take object where would have name,age and adress or any only once any of three*

```ts
const object1:UnionType={
    name:'jakuan',
    age:21,
    address:'banani dhaka'

   🎯we can use any of between first and second it will not give you error
}
```

### InterSectino Type ( & )

🎯*Let's take an example for well understanding*

```ts
type teacher = {
  name: string;
  age: 21;
  profession: string;
};

type student = {
  id: number;
  name: string;
  age: 21;
};

type teacherAndstudent = teacher & student;
```

*type teacherAndstudent means it has both of type and wher it would be use you have to put all property that has in teacherAndStudent*

🎯*Let's make an object name with person*

```ts
const person: teacherAndstudent = {
  id: 1,
  name: "jakuan",
  age: 21,
  profession: "teacher",
};
```

🎯*If you understand good for your future*
