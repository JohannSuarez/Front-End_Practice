const content = document.querySelector('p');

console.log(content.classList);


// This is how you add a class
// content.classList.add('error');

// This is how you remove a class
// content.classList.remove('error');


// Adding success class
//content.classList.add('success');



// --------------------------- Exercise ---------------------------------------

/* Exercise. You are tasked with gathering all of the p elements,
   and then changing its class based on whether or not it has "error" or
   "success" in its text.
*/


/* This query selector selects all of the tags you input.
 In this case, all the p tags in our html will be selected,
 and put into paras. */ 
 const paras = document.querySelectorAll('p');

 paras.forEach(para => {

    // How do you get just what's in the tags again?
    console.log(para.innerText); // Yes this is how you do it.
    
    if(para.innerText.includes("success")) {
        para.classList.add("success");
    } else if (para.innerText.includes("error")) {
        para.classList.add("error");
    }

});

//---- Toggle method. Just a different way of adding or removing a class. ----//


const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');