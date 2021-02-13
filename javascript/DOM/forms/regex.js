// For creating regular expressions.
// https://regex101.com/

/* Video tutorial here. This is really valuable.
    https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/learn/lecture/14174961#notes
*/

/*
    Example: /^[a-zA-Z0-9]{6,10}$/gm

    ^ AND $
    means the input must follow the pattern from the beginning ( ^ ) 
    to the end ( $ qwdq) 

    Any combination of uppercase and lowercase word with numbers
    that are 6 to 10 characters long.


    Example: /^.{6,10}$/gm

    A dot means "any character". So this is any-character
    string of length 6-10.
*/

const form = document.querySelector('.signup-form');


//-- HOW TO USE A REGEX IN JS --//

/* 
    A regular expression is always
    between two forward slashes.

*/


/*
    I just learned that any value that isn't 0
    evaluates to TRUE in javascript (even if it's negative!!)
*/


form.addEventListener('submit', e => {

    e.preventDefault();
    // A nice quick way we can get fields from a form.
    // You can do this with id's and name attributes

    let input = form.username.value;
    console.log(input);

    let re = /^[a-z]{6,}$/;
    result3 = re.test(input);

    if (result3) { 
        console.log('This entry passes regex check.');
    } else {
    
        console.log('No, not this one.');
    }
});
