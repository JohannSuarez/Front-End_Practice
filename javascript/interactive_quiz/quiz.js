const correctAnswers = ['B','B','B','B'];

const form = document.querySelector('.quiz-form');
const score_show = document.querySelector('.result');

form.addEventListener('submit', e => {

    /* 
       The default action is to refresh
       the page, we don't want that.
    */
    e.preventDefault();



    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // Check answers

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });


    // show result on page 
    
    /*
        Invoking a query selector on score_show, which we acquired the
        handle of using query selector too. In this case, we're looking
        for a span tag inside score_show. Then we change
        its text content to the calculated score.
    */
    score_show.querySelector('span').textContent = `${score}%`;
    /*
        Remember that the "result" class has d-none class too, and that
        keeps it from being displayed. If we remove d-none, result shows in 
        the page.
    */
    score_show.classList.remove('d-none');  
    
    /*
        We don't need to write window because it's inferred
        (See comments bottom of page.)
    */
    
    scrollTo(0,0);

    let output = 0;
    
    const timer = setInterval( () => {
    score_show.querySelector('span').textContent = `${output}%`;

        if(output === score ) {
            clearInterval(timer);
        } else {
            output++;
        }

    }, 10 );


});

// window object (global object)

/* 
    The window object is the global
    object in front end JS. It's the  
    mother of all objects.

    
    We don't need to write "window" because
    it's inferred. It's a global object.
*/

// Demonstration: 
console.log('hello');
window.console.log('hello');    // Same thing

// Another example

// This:
console.log(document.querySelector('form'));
// is the same as...
console.log(window.document.querySelector('form'));

/*

//    A five second timer
//    to demonstrate intervals.

let i = 0;
const timer = setInterval( () => {
    console.log('hello.');
    i++;
    if(i == 5) {
        clearInterval(timer);
    };
}, 1000);
*/