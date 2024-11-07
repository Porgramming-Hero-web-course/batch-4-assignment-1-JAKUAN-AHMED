//problem-08

/**
 * making validateKeys function and return boolean if exist or not exist
 */

function validateKeys<T extends object>(person:T,keys:(keyof T|string)[]):boolean{
    
    return keys.every(key=>key in person);
}
// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age"]));