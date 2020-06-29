class Vehicle {
    constructor(modelName, brand, model){
        this.modelName = modelName;
        this.brand = brand
        this.model = model;
    }

    getVechicleDetails(){
        let vechicleDetails = `${this.brand} ${this.modelName} ${this.model}`;
        return vechicleDetails;
    }
}


let Vehicle2 = class {
    constructor(modelName, brand, model) {
        this.modelName = modelName;
        this.brand = brand;
        this.model = model;
    }
};

let vehicle1 = new Vehicle("Nexon", "Tata", 2018);

console.log(vehicle1.getVechicleDetails());

// Getters and Setters

class Vehicle3 {

    set modelName(modelName){
        this.modelName = modelName;
    }

    get modelName(){
        return this.modelName;
    }

    set brand(brand){
        this.brand = brand;
    }

    get brand(){
        return this.brand;
    }

    set model(model){
        this.model = model;
    }

    get model(){
        return this.model;
    }
}

let vehicle2 = new Vehicle2();
vehicle2.modelName = "Nexon";
vehicle2.brand     = "Tata";
vehicle2.model     = "2018";

console.log("Vehicle Details are " + vehicle2.modelName + ' ' + vehicle2.brand + ' ' + vehicle2.modelName);


// Inheritance

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

let car1 = new Car("Altroz", "Tata", 2020);

console.log(car1.getVechicleDetails());
console.log(Car.getCarPrice());
//console.log(car1.getCarPrice()); //Uncaught TypeError: car1.getCarPrice is not a function