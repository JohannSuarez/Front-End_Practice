// function declaration

function greet() {
    console.log("Hello!");
}

// function expression
const speak = function() {
    console.log('good day!');
}

// function expression2, has parameters
const speak_two = function(time, name) {
    console.log(`good ${time} ${name}`);
};


// function expression3, has default parameters
const speak_three = function(time = 'evening',name = 'Walker') {
    console.log(`good ${time} ${name}`);
}

const calc_area = function (radius) {
    return 3.1415926 * radius**2;
}


// arrow function
// You should only use an arrow function
// if the function can be as short as one line.

const calc_area2 = radius => { return 3.1415926 * radius**2 };


greet();
speak();

speak_two('Afternoon','Walker');

speak_three();
speak_three('Morning', 'Marcus');

let area = calc_area(5);

console.log(area);
console.log(calc_area2(5));



// Callbacks and foreach
// A callback function is just a function that 
// we pass to another function as an argument.

// Arrays have a forEach method

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// Using a callback
/*
people.forEach(function(person) {
    console.log(person);
} );
*/

// Callback, Arrow function version

// The function is actually what you see between
// the curly brackets. It's made on the fly.
people.forEach((person) => {
    console.log(person);
} );


// Callback, Arrow function with index.

people.forEach((person, index) => {
    console.log(person, index);
} );

// Writing the callback function externally.
// toUpperCase is used to distinguish this in the console.
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person.toUpperCase()}`);
}


people.forEach(logPerson);