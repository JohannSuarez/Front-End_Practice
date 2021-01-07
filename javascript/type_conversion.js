// type conversion
let score = '100';


score = Number(score);
console.log(score + 1);
console.log(typeof score);


let result = Number('hello');
console.log(result);

let result2 = String('50');
console.log(result2, typeof result2);


// Any string literal that isn't empty is True.
let result3 = Boolean('0');

console.log(result3);