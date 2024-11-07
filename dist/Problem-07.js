"use strict";
//problem-07
/**
 * make a Car class with property name make,model and year
 * and make a class name with getCarAge which will return the current age of car
 */
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = 2024;
        return `${currentYear - this.year} (assuming current year is 2024)`;
    }
}
// const car = new Car("Honda", "Civic", 2018);
// console.log(car.getCarAge());
