/* Primitive types in JavaScript
are near synonymous to primitives in C++ */

/* Reference types are complex(composite)/struct data types */

/* Reference types are shallow copied. If you set object_a = object_b,
  modifying object_a will also modify object_b. In other words, only the poiner
  is copied.
*/

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo ${scoreTwo}`);


// Changing scoreOne.
scoreOne = 30;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo ${scoreTwo}`);


const userOne = { name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 24;
userOne.name = 'Birdy';
console.log(userOne, userTwo);