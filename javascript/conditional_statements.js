// for loops


for(let i = 0; i < 5; i++){
    console.log(i);
}


const names = ['emily', 'lise', 'jeurissen'];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


// Create a snippet for each name that
// we could then output to the browser.
for(let i = 0; i < names.length; i++) {
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// While loop version for name iteration.

let i = 0;

while(i < names.length) {
    console.log(names[i]);
    i++;
}

// do while loops
// .. for when you want your code to run
// at least once.

let j = 5;

do {
    console.log('val of i is: ', j);
    j++;
}
while(j < 5);


const age = 20;

if(age > 20) {
    console.log('Over 20 yearso old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 3) {

    // Note use a double quote
    // if your message contains a single quote.
    console.log("More than 3 ninjas.");
}

// Else statement

const password = 'pss@2222222w2w2w2';

if(password.length >= 8) {
    console.log('that password is long enough!');
} else {
    console.log('password is not long enough');
}

// Logical operators (AND, OR, NOT)

if(password.length >= 12 &&  password.includes('@')) {
    console.log('that password is long enough!');
} else {
    console.log('password is not long enough');
    console.log("..or doesn't have @.");
}


// switch statements

const grade = 'C';

switch (grade) {
    case 'A':
        console.log('You got A');
        break;
    case 'B':
        console.log('You got B');
        break;
    case 'C':
        console.log('You got C');
        break;
    default:
        console.log('Not a valid grade.')
}