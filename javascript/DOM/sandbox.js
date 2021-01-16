const button = document.querySelector('button');

// -- Adding an event listener to a button.

button.addEventListener('click', () => {
    console.log('You clicked me');
});



// This will get us a nodelist of all the tags.
const items = document.querySelectorAll('li');

/* A forEach loop that adds an event listener to
   each of the li tag.
*/
items.forEach(item => {

    // Giving each <li> tag a click event
    item.addEventListener('click', e => {

        /* Inside this callback function,
           the browser automatically gives us a parameter
           called e or event (but you can call it whatever).
           It's an event object, contain information about the
           event that happened.
        */


        //console.log('item clicked');
        //console.log(e); // Reveals all the properties of the event object.
        console.log(e.target); // Tells us which element we clicked on.
        e.target.style.textDecoration = 'line-through';
    });
});