"use strict";
//problem-06
/**
 * define a interface name with profile that property has name,age and email
 * and create function name with updateProfile that accept profile as object
 * update a property as given and return updated profile
 * */
function updateProfile(profile, property) {
    return Object.assign(Object.assign({}, profile), property);
}
// const person1={name:'jakuan',age:21,email:'neuron111@gmail.com'};
// console.log(updateProfile(person1,{age:24}));
