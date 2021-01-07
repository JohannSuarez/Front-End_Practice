let ninjas = ['shaun', 'ryu', 'chun-li'];

console.log(ninjas[2]);

ninjas[2] = 'ken';
console.log(ninjas[2]);


let ages = [20,25,30,26];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random[2]);


console.log(ninjas.length);

/*
let result = ninjas.join(',');
console.log(result);
*/

let result2 = ninjas.indexOf('ken');
console.log(result2);


ninjas = ninjas.concat(random,);
console.log(ninjas);

ninjas = ninjas.push('embrz');
console.log(ninjas);

result3 = random.pop(); 
// ninjas won't pop at this point
// because it became an int, taking the return of push.

console.log(result3);