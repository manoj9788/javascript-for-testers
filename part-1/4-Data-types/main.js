const items = [
  { name: 'Bike', price: 100 },
  { name: 'Bike', price: 100 },
  { name: 'Car', price: 120 },
  { name: 'TV', price: 300 },
  { name: 'Book', price: 10 },
  { name: 'Computer', price: 120 },
  { name: 'Computer', price: 110 }
];

// for (let i = 0; i < items.length; i++) {
//   if(items[i].price < 120) {
//     console.log(items[i]);
//   }
// }

const filerItems = items.filter(item => {
  return item.price < 120;
});

//map to create a new array

const mapItems = items.map(item => {
  return { value: item.price };
});

// find

const foundItems = items.find(item => {
  return item.name === 'Computer';
});

//some
/* The some() method tests whether at least one element 
in the array passes the test implemented by the provided
 function. It returns a Boolean value.  */

const inExpenseItems = items.some(item => {
  console.log('----', item);
  return item.price < 120;
});

//every

/*
The every() method tests whether all elements 
in the array pass the test implemented by 
the provided function. It returns a Boolean value.
*/
const inExpenseEveryItems = items.every(item => {
  console.log('####', item);
  return item.price < 120;
});

console.log(inExpenseItems);

console.log(inExpenseEveryItems);

//reduce

/* const numbers = [1,3,4,5];
let sum = 0;
for (let n of numbers)
  sum +=n; */

const numbers = [1, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 1);

console.log(sum);

let includeNum = numbers.includes(4);
console.log(includeNum);
