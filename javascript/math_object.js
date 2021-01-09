// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

// Rounds a number to the nearest integer.
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));

// Removes the decimal value.
// Slightly different from round, floor, and ceil.
console.log(Math.trunc(area));

// Generate random numbers.

// By default, the random function
// will give you a random number between 0 and 1.
const random = Math.random();
console.log(random);

// You can use this for random True or False values.
console.log(Math.round(random));

// To generate between 0-100
console.log(Math.round(random* 100) );
