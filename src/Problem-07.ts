//problem-07
/**
 * make a Car class with property name make,model and year
 * and make a class name with getCarAge which will return the current age of car
 */

interface carType{
    make:string;
    model:string;
    year:number;
    getCarAge():string;
}

class Car implements carType {
    make:string;
    model:string;
    year:number;
    constructor(make:string,model:string,year:number)
    {
        this.make=make;
        this.model=model;
        this.year=year;

    }
    getCarAge(): string{
        const currentYear=2024;
        return `${currentYear-this.year} (assuming current year is 2024)`;
    }

}
// const car = new Car("Honda", "Civic", 2018);
// console.log(car.getCarAge());