// For creating regular expressions.
// https://regex101.com/

/* Video tutorial here. This is really valuable.
    https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/learn/lecture/14174961#notes
*/

/*
    Example: /^[a-zA-Z0-9]{6,10}$/gm

    Any combination of uppercase and lowercase word with numbers
    that are 6 to 10 characters long.


    Example: /^.{6,10}$/gm

    A dot means "any character". So this is any-character
    string of length 6-10.
*/

const form = document.querySelector('.signup-form');


form.addEventListener('submit', e => {

    e.preventDefault();
    // A nice quick way we can get fields from a form.
    // You can do this with id's and name attributes
    console.log(form.username.value);
});

//-- HOW TO USE A REGEX IN JS --//

const username = 'johann';
const pattern = /[a-z]{6,}/;

/* 
    Regex data types have a method called 'test'
    Feed it an input string, and it will return a boolean.
*/
let result = pattern.test(username);
console.log(result);

// Now we're making a little check

if(result){
    console.log('regex test passed ;)')
} else console.log('regex token failed.');

/* This is the opposite of pattern.test(username);
   This returns an integer where it finds a pattern match
   in the string.
*/
let result2 = username.search(pattern);
console.log(result2);

/* If it's negative, it didn't have a match.
   We can use that as a boolean check.
*/