// Query selectors are used to pick out elements or even entire sections
// of HTML code from the Document Object Model through JavaScript.

const para = document.querySelector('p');
const class_err = document.querySelector('div.error');
// Remember this again! CSS selectors for classes begin with a dot '.'


/* This is the same line as above.
   When you "Copy selector" from the browser debugger,
   They give out selectors that look like this, with the > symbol.
*/
const class_err2 = document.querySelector('body > div.error');



console.log(para);
console.log(class_err);
console.log(class_err2); 

/* This query selector selects all of the tags you input.
 In this case, all the p tags in our html will be selected,
 and put into paras. */ 
const paras = document.querySelectorAll('p');

console.log(paras);
console.log(paras[0]);


// Cycling through each element.
paras.forEach(para => {
   console.log(para);
})

const paras_err = document.querySelectorAll('.error');

console.log("Logging all elements with class error.");

paras_err.forEach(para => {
   console.log(para);
})


/* ---- End of QuerySelector and QuerySelectorAll demonstrations -- */

