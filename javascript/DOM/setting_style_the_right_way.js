const title = document.querySelector('h1');


/*
    Drawback with setAttribute is it overwrites any of the
    old styles you provided before. For instance, if it had a
    color style, it's now gone once the line below is ran.

    title.setAttribute('style', 'margin: 50px');
*/

/* 
   If you don't know what a certain style property is,
   title.style lists everything.
*/


console.log(title.style);
console.log(title.style.color);

/* 
   This is how you set HTML attributes
   without overwriting issues.
*/

title.style.color = 'green';
title.style.margin = '50px';
title.style.fontSize = '60px';

title.style.margin = ''; // This is how to delete style. Just blank.