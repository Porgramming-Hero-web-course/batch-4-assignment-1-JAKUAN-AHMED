//problem-5

//make generic function which return the value of object with key and use a constraint 

function getProperty <T ,KEY extends keyof T>(person:T,key:KEY):T[KEY]
{
    return person[key];
}
// const person={name:'jakuan',age:21}
// console.log(getProperty(person,'age'));