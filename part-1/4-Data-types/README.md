# Data Types

# Methods of primitives

JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects.

Let's look at difference in primitives and objects

A primitive is a value of type.
We have 7 primitive types `string, number, bigint, boolean, symbol, null and undefined`

An object is capable of storing multiple values as properties like
`{name: "John", age: 30}`

Objects can also be stored as functions like

```js
let element = {
  name: 'John',
  sayHi: function() {
    alert('Hi buddy!');
  }
};

element.sayHi(); // Hi buddy!
```

# Arrays

Objects allow us to store keyed values and there are times were we need to read the value in the 1st,2nd locatios.

There are two ways to create Arrays

- let arr = new Array();
- let arr = [];

Most of the time, we use the second syntax.

`let cars = ['Swift', 'Audi', 'Benz']`

Array of elements are numbered.

```js
cars[0]; // Swift
cars[2]; // Benz
```

Total count of the array can be found by `length`

`cars.length // 3`

Arrays can store any value type

```js
let arr = [
  'Benz',
  true,
  { name: 'Hacker' },
  function() {
    console.log('Hello World!!');
  }
];
```

Methods that work with Arrays

`pop`,`push`,`shift`,`unshift`

`pop`

Extracts the last element and returns

```js
let cars = ['Swift', 'Audi', 'Benz'];
cars.pop(); // Removes Benz and returns

console.log(cars); // ['Swift', 'Audi']
```

`push`

Append the element to the end of the array:

```js
let cars = ['Swift', 'Audi'];
cars.push('Benzzzz');

console.log(cars); // ['Swift', 'Audi', 'Benzzzz']
```

`shift`

Extracts the first element of the array and returns it:

```js
let cars = ['Swift', 'Audi', 'Benz'];
cars.shift(); // remove Swift

console.log(cars); // [ 'Audi', 'Benz']
```

`unshift`

Add the element to the beginning of the array:

```js
let cars = ['Audi', 'Benz'];
cars.unshift('Swift'); // Adds Swift

console.log(cars); // [ 'Swift', 'Audi', 'Benz']
```

`push` and `unshift` can also work on multiple elements

```js
let cars = ['Audi', 'Benz'];
cars.push('Swift'); // Adds Swift
cars.unshift('Audi Q5');

console.log(cars); // [ 'Audi Q5', 'Swift', 'Audi', 'Benz']
```

# Array Methods

Add/Remove items - We already saw pop,shift,unshift and push for these.

`slice`

```js
let cars = ['Swift', 'Audi', 'Benz'];
delete cars[1];

console.log(cars[1]); //undefined

console.log(cars.length); // 3
```

`slice` methos in array can delete, insert and replace

```js
let cars = ['Swift', 'Audi', 'Benz'];

cars.slice(1, 1); //from index 1 to 1

console.log(cars); // ['Swift', , 'Benz']
```

We can also remove and replace with items

```js
let cars = ['Swift', 'Audi', 'Benz'];

cars.slice(1, 1, 'Q5'); // remove from index 1 to 1 and replace

console.log(cars); // ['Swift', 'Q5', 'Benz']
```

The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

```js
let arr = ['I', 'study', 'JavaScript'];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, 'complex', 'language');

alert(arr); // "I", "study", "complex", "language", "JavaScript"
```

### Iterate: forEach

```js
const items = [
  { name: 'Bike', price: 100 },
  { name: 'Bike', price: 100 },
  { name: 'Car', price: 120 },
  { name: 'TV', price: 300 },
  { name: 'Book', price: 10 },
  { name: 'Computer', price: 120 },
  { name: 'Computer', price: 110 }
];

// Old style
for (let i = 0; i < items.length; i++) {
  if (items[i].price < 120) {
    console.log(items[i]);
  }
}

items.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`)
})
```

### Searching in array

`indexOf/lastIndexOf and includes`

* arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
* arr.lastIndexOf(item, from) – same, but looks for from right to left.
* arr.includes(item, from) – looks for item starting from index from, returns true if found.

```js

let arr = [1, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1
console.log(arr.includes(1)); // true

```

`find and findIndex` 

```js
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});

const items = [
  { name: 'Bike', price: 100 },
  { name: 'Bike', price: 100 },
  { name: 'Car', price: 120 },
  { name: 'TV', price: 300 },
  { name: 'Book', price: 10 },
  { name: 'Computer', price: 120 },
  { name: 'Computer', price: 110 }
];


const foundItems = items.find(item => {
  return item.name === 'Computer';
});

console.log(foundItems.price) // 120
```

`filter`

The find method looks for a single (first) element that makes the function return true.

If there may be many, we can use arr.filter(fn).

The syntax is similar to find, but filter returns an array of all matching elements:

```js
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});


const items = [
  { name: 'Bike', price: 100 },
  { name: 'Bike', price: 100 },
  { name: 'Car', price: 120 },
  { name: 'TV', price: 300 },
  { name: 'Book', price: 10 },
  { name: 'Computer', price: 120 },
  { name: 'Computer', price: 110 }
];

const filterItems = items.filter(item => {
  return item.name === 'Computer';
});

console.log(filterItems.length) //2

```


`map` 

map() method is used to iterate over an array and calling function on every element of array.


```js
let results = arr.map(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});


const items = [
  { name: 'Bike', price: 100 },
  { name: 'Bike', price: 100 },
  { name: 'Car', price: 120 },
  { name: 'TV', price: 300 },
  { name: 'Book', price: 10 },
  { name: 'Computer', price: 120 },
  { name: 'Computer', price: 110 }
];

const mapItems = items.map(item => {
  return { value: item.price };
});

console.log(mapItems) // {value: 100 ...}

```


`some`

some() function check whether at least one of the elements of the array satisfies the condition checked by the argument function. It returns a Boolean value.


```js
let results = arr.some(function(item, index, array) {
});


const items = [
  { name: 'Bike', price: 100 },
  { name: 'Bike', price: 100 },
  { name: 'Car', price: 120 },
  { name: 'TV', price: 300 },
  { name: 'Book', price: 10 },
  { name: 'Computer', price: 120 },
  { name: 'Computer', price: 110 }
];

const inExpenseItems = items.some(item => {
  return item.price < 120;
});

console.log(inExpenseItems) // true,

```

`every`

every() method checks whether all the elements of the array satisfy the given condition or not that is provided by a function passed to it as the argument.

This function returns Boolean value true if all the elements of the array follow the condition implemented by the argument function. If one of the elements of the array does not satisfy the argument function, then this function returns false.


```js
let results = arr.some(function(item, index, array) {
});


const items = [
  { name: 'Bike', price: 100 },
  { name: 'Bike', price: 100 },
  { name: 'Car', price: 120 },
  { name: 'TV', price: 300 },
  { name: 'Book', price: 10 },
  { name: 'Computer', price: 120 },
  { name: 'Computer', price: 110 }
];

const inExpenseItems = items.every(item => {
  return item.price < 120;
});

console.log(inExpenseItems) // false,

```

`reduce`

reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.


```js
const numbers = [1, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum) //13

```
