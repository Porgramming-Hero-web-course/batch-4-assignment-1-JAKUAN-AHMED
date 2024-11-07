//problem-06
/**
 * define a interface name with profile that property has name,age and email
 * and create function name with updateProfile that accept profile as object
 * update a property as given and return updated profile
 * */

interface Profile{
    name:string;
    age:number;
    email:string;
}
function updateProfile(profile:Profile,property:Partial<Profile>):Profile{
    return {...profile,...property}
}
// const person1={name:'jakuan',age:21,email:'neuron111@gmail.com'};
// console.log(updateProfile(person1,{age:24}));
