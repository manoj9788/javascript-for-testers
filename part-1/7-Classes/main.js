class Vehicle {
    constructor(modelName, brand, model){
        this.modelName = modelName;
        this.brand = brand
        this.model = model;
    }
}

let Vehicle2 = class {
    constructor(modelName, brand, model) {
          this.modelName = modelName;
          this.brand = brand
          this.model = model;
    }
};

class Car extends Vehicle {

    noOfGears(){
        let carGears = 5;
        return carGears;
    }

    getVechicleDetails(){
        let vechicleDetails = `${this.brand} ${this.modelName} ${this.model} ${this.noOfGears()} Gears`;
        return vechicleDetails;
    }

    static getCarPrice() {
        let carPrice = "10 lakhs";
        return carPrice;
    }
}

let car1 = new Car("Nexon", "Tata", 2018);

console.log(car1.getVechicleDetails());
console.log(Car.getCarPrice());
//console.log(car1.getCarPrice()); //Uncaught TypeError: car1.getCarPrice is not a function