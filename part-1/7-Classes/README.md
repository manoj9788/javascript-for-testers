# Class

Javascript is not a class based language. Classes in Javascript is not the same as in other programming languages. 

Javascript is a prototype based language. Javascript under the hood it uses the same prototype based inheritance. Class syntax is not introducing new object inheritance model instead it is a syntatical sugar to the existing object inheritance. 

Syntax within classes must follow `strict` syntax. Class body is executed in `strict`. Silent errors will be thrown if `strict` syntax is not followed.

Class syntax is introduced in Javascript in `ECMAScript 2015`.

## Class Syntax

As we saw in fucntions, classes can also be declared in Class Declarations and Class Expressions

### Class Declarations
Use the `class` keyword followed by Class Name. Like Java there is no hard rule like the class name should be same as the file name.

```javascript
class Vehicle {

}
```

### Class Expressions

```javascript
let Vehicle = class {
  
};
````

In Javascript, `class` should be declared first, then it can be accessed. `Class` is not hoisted like `functions`.

To create an object of a class, like other languages `new` keyword is used and by default `constructor` method will be invoked.

```javascript
const vehicle = new Vehicle();
```

## Class Body

Like in other languages, class body is what goes between the `{ }` braces. Functions, class variables, constructor goes inside this. All the code inside class is executed in strict mode. 

```javascript
class Vehicle {
    constructor(modelName, brand, model){
        this.modelName = modelName;
        this.brand = brand;
        this.model = model;
    }

    getVechicleDetails(){
        let vechicleDetails = `${this.brand} ${this.modelName} ${this.model}`;
        return vechicleDetails;
    }
}

let vehicle = new Vehicle("Nexon", "Tata", 2018);

console.log(vehicle.getVechicleDetails());
```

## Inhertiance

Class Inheritance is a way to extend from another class. New functionality can be added to the parent class.

```javascript
class Vehicle {
    constructor(modelName, brand, model){
        this.modelName = modelName;
        this.brand = brand
        this.model = model;
    }
}

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

let car = new Car("Nexon", "Tata", 2018);

console.log(car.getVechicleDetails());
```

Inheritance in Javascript can also be acheived using the Prototype.


### Getters and Setters

`ECMAScript 2015` brings a new syntax for adding Getters and Setters on object properties. Classes allows to use getter and setter methods. Keywords `get` and `set` used for the methods. Getter and Setter methods can accessed like object properties.

```javascript
class Vehicle {

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

let vehicle = new Vehicle();
vehicle.modelName = "Nexon";
vehicle.brand     = "Tata";
vehicle.model     = "2018";

console.log("Vehicle Details are " + vehicle.modelName + ' ' + vehicle.brand + ' ' + vehicle.modelName);

```

### Static Methods

The `static` keyword defines function in a class as static function. `static` functions can be called without instantiating the class. 

```javascript
    static getCarPrice() {
        let carPrice = "10 lakhs";
        return carPrice;
    }
```

It can be invoked without the instance of the class.

```javascript
console.log(Car.getCarPrice());
```

It can not be called with the instance of the class

```javascript
let car = new Car("Nexon", "Tata", 2018);

console.log(car.getCarPrice()); //Uncaught TypeError: car.getCarPrice is not a function
```
