const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    /* Prevents the default action of a 
       particular event.
    */
    e.preventDefault();
    //console.log(username.value);


    // A nice quick way we can get fields from a form.
    // You can do this with id's and name attributes
    console.log(form.username.value);
});