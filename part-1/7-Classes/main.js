class Vehicle {
    constructor(model_name, brand, model){
        this.model_name = model_name;
        this.brand = brand
        this.model = model;
    }
}

let Vehicle2 = class {
    constructor(model_name, brand, model) {
          this.name = name;
          this.brand = brand
          this.model = model;
    }
};

class Car extends Vehicle {

    noOfGears(){
        let car_gears = 5;
        return car_gears;
    }

    getVechicleDetails(){
        let vechicleDetails = `${this.brand} ${this.model_name} ${this.model} ${this.noOfGears()} Gears`;
        return vechicleDetails;
    }

    static getCarPrice() {
        let car_price = "10 lakhs";
        return car_price;
    }
}

let car1 = new Car("Nexon", "Tata", 2018);

console.log(car1.getVechicleDetails());
console.log(Car.getCarPrice());
//console.log(car1.getCarPrice()); //Uncaught TypeError: car1.getCarPrice is not a function