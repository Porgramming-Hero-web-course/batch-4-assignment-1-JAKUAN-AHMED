"use strict";
//problem-08
/**
 *
 */
function validateKeys(person, keys) {
    for (let key of keys) {
        if (!(key in person)) {
            return false;
        }
    }
    return true;
}
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "car"]));
