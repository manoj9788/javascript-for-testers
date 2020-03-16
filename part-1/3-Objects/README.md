# Objects

Objects, in JavaScript, is it’s most important data-type and forms the building blocks for modern JavaScript. These objects are quite different from JavaScript’s primitive data-types. 

There are 8 data types in JavaScript and out of which 7 of them are "primitive" because their values contain only a single value each depending on their types( String or number).

An object, is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value. That reference or pointer points to the location in memory where the object is stored. The variables don’t actually store the value.

In JavaScript, there are four methods to use to create an object:

* Object Literals.
* New operator or constructor.
* Object.create or Prototype method
* Class.

## Object Literals

An object literal, also called an object initializer, is a comma-separated set of paired names and values.
```js
let user = {};  // "object literal" syntax
```
```js
var car = {
    model: 'audi',
    color: 'red',
    price: 20000
}
console.log(JSON.stringify(car));
```
Here we add the dynamic property car.type:
```js
var car = {
    model: 'audi',
    color: 'red',
    price: 20000
}
console.log(JSON.stringify(car));
car.type = 'manual'; // dynamic property  console.log(JSON.stringify(car));
```

## New operator or constructor

```js 
let user = new Object(); // "object constructor" syntax
//
let o = new Object()
o.foo = 42

console.log(o)
// Object { foo: 42 }
```

### `this` and `new` keyword
* Every function, while executing has a reference to its current execution context called this (keyword).
* The new keyword in front of any function turns the function call into constructor call

 If you call a function using a new operator, the function acts as a constructor and returns an object. Consider the following code:

This method of creating an object is also called the `Constructor Invocation Pattern`. There are two steps to work with the constructor function:

* Create a function, which will define the object type.
* Create an instance of an object using a new operator.
```js
function Car(model, color) {
    this.model = model;
    this.color = color;
}
var c1 = new Car('Audi', 'red');
console.log(c1.model);
```

## Object.create or Prototype Method
You can also create new objects using the Object.create() method, which allows you to specify the prototype object and the properties. For example:

```js
var Car = {
    model: 'Audi',
    color: 'red'
}
```
You can use the Car object as a prototype to create another object, as shown below:

```js
var HybridCar = Object.create(Car);
console.log(HybridCar.model); // Audi
```
The HybridCar object will have all the properties of the Car object. 

## Class
ES 6 introduced the class keyword to create classes in JavaScript like any other Statically typed or object oriented language. So, object can be created out of a class in javascript as well as shown below

```js
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker =  maker;
    this.engine = engine;
  }
}
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
console.log(bike1.name);    //Output: Hayabusa
console.log(bike2.maker);   //Output: Kawasaki
```

# Garbage Collection

JavaScript, utilize a form of automatic memory management known as garbage collection (GC). The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.

*The main concept of memory management in JavaScript is reachability.*

```js
// user has a reference to the object
let user = {
  name: "Kumar"
};
```
The global variable `user` references the object `{name: "Kumar"}`. The `name` property of John stores a primitive, so it’s painted inside the object.

If the value of `user` is overwritten, the reference is lost:
```js
user = null;
```
Now Object `Kumar` becomes unreachable. There’s no way to access it, no references to it. Garbage collector will junk the data and free the memory.

Summary on GC:
* Garbage collection is performed automatically. We cannot force or prevent it.
* The basic garbage collection algorithm is called “mark-and-sweep”.
* Objects are retained in memory while they are reachable.
* Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole.