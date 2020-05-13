// Function Declarations
function addTwoIntegers(argument1, argument2) {
	var sum = argument1 + argument2;
	return sum;
}

// Calling Functions

var number1 = 10;
var number2 = 20;

var output = addTwoIntegers(number1, number2);

console.log(output);


// Function Expressions
var sum = function (argument1, argument2) {
	sum = argument1 + argument2;
}

sum(20, 30);

console.log(sum);


// Arrow Functions
var sum = (argument1, argument2) => argument1 + argument2;

console.log(sum(10, 20));