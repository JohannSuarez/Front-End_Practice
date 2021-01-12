// Get an element by ID
const title = document.getElementById('page-title');
// Note: We didn't need the hash symbol as we did in query selector (#page-title).
// It's already implied to be an ID by using this method.

console.log(title);

// Get elements by their class name
const errors = document.getElementsByClassName('error');
// Note: We didn't need the dot as we did in query selector (.error).
// It's already implied to be a class by using this method.
console.log(errors);
console.log(errors[0]);

/* Notice that errors contains a HTMLCollection object,
   instead of a NodeList from QuerySelector. 
   
   Like NodeList we can still use square bracket notation to 
   get an element from HTMLCollection. But we can't use forEach.
*/



// Get elements by their tag name

const paras = document.getElementsByTagName('p');
// We're grabbing the paragraph elements.
console.log(paras);
console.log(paras[1]);