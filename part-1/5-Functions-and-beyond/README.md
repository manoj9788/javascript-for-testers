# Functions

Function is a block of code which performs a particular task and it is reusable. Functions can be called when necessary without implementing it again.  

In Javascript functions can be created in three ways

* Function Declarations
* Function Expressions
* Arrow Functions

## Function Declarations

In Javascript function is created with the keyword `function` followed by function name

```javascript
function addTwoIntegers(argument1, argument2) {
	var sum = argument1 + argument2;
	return sum;
}
```
Here the function name is `addTwoIntegers` and is  performing addition of two integers. It takes two parameters `argument1`, `argument2` and returns the output `sum`. Any code after the `return` statment will not be executed.

Function will not be executed until it is called. Above function can be called by the function name.

```javascript
var number1 = 10;
var number2 = 20;

var output = addTwoIntegers(number1, number2);

console.log(output); // prints 30
```

### Function Scope

#### Local Variables
Variables created inside the functions can not be accessed outside the function. Variables created inside the function have the scope limit within the function.

```javascript
function addTwoIntegers(argument1, argument2) {
	var sum = argument1 + argument2;
	return sum;
}

addTwoIntegers(20, 30);

console.log(sum); // Uncaught ReferenceError: sum is not defined
```

#### Global Variables
Variables defined outside the functions can be accessed inside the functions. This helps to reuse the variables.

```javascript
var sum = 0;

function addTwoIntegers(argument1, argument2) {
	sum = argument1 + argument2;
	return sum;
}

addTwoIntegers(20, 30);

console.log(sum); // prints 50
```

#### Default values for Parameters

If the parameters for the functions are not passed, it will throw an error. Missing parameter is considered as `undefined`

```javascript
var sum = 0;

function addTwoIntegers(argument1, argument2) {
	sum = argument1 + argument2;
	return sum;
}

addTwoIntegers(20);

console.log(sum); // prints NaN
```

In Javascript we can assign a default value to a parameter.

```javascript
var sum = 0;

function addTwoIntegers(argument1, argument2 = 0) {
	sum = argument1 + argument2;
	return sum;
}

addTwoIntegers(20);

console.log(sum); // prints 20
```

## Function Expressions
The above Function Declaration is synatically correct, functions can also be created by a function expression.

```javascript
var sum = function (argument1, argument2) {
	sum = argument1 + argument2;
}

sum(20, 30);

console.log(sum); // prints 50
```

Function name also can be provided to the expression, It helps in identifying and debugging function.

```javascript 
var sum = function addTwoIntegers(argument1, argument2) {
	sum = argument1 + argument2;
}

sum(20, 30);

console.log(sum); // prints 50
```

## Arrow Functions
Arrow Functions are introduced in ES6 to simplify function scope and making `this` keyword straight forward.

```javascript
var sum = (argument1, argument2) => argument1 + argument2;

console.log(sum(10, 20)); // prints 30
```

Arrow function can be used for functions having multi line

```javascript
var sum = (argument1, argument2) => {
	var result = argument1 + argument2;
	return result // prints 30
}
```

These are user defined functions. Javascript itself has top level built in function, populary known as built in functions

## Built in functions

Javascript has many built in functions which can be used without implementing again.

Examples: 

`eval()` - Method evaluates the javascript code represented as string

`isNaN()` - checks if value is `NaN`

`parseInt()` - parses a first argument string and returns Integer.

`encodeURI()` - Encodes special charactes in the URI