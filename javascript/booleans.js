// booleans & comparisons
console.log(true, false, "true", "false");


// methods can return booleans
let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];
let result = names.includes('luigi');

console.log(result);


// comparison operators
let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 25);
console.log(age > 24);

let some_name = 'shaun';
console.log(some_name > 'Srystal');


// loose comparison (different types can still be equal)
console.log('25' == 25);

// strict comparison (different types cannot be equal)
console.log(age === 25);

console.log('25' === 25);