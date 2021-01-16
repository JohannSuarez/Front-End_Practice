const article = document.querySelector('article');

/* There's an article element in the document
   Inside it are 3 p tags, an h2, and a div.
   This is how we access those tags without explicitly knowing 
   what elements they are.
*/ 

// ----------- Accessing The Children ------- //
console.log(article.children); 

/*  Upon printing you will notice that article is an HTMLCollection
    and not an array. We can't use forEach on it.

    We have to convert it into an array
*/

// It is worth mentioning that this operation is not destructive.
// The real Article object is untouched.
console.log(Array.from(article.children));

// Using the array.

Array.from(article.children).forEach(child => {
    /* Cycling through the children 
       and giving each of them a class. */
    child.classList.add('article-element');
})


// ----------- Doing The Opposite; accessing the parent ------- //
const title = document.querySelector('h2');

// h2's parent.
console.log(title.parentElement);


// You can chain parentElement to go further up the node tree.
console.log(title.parentElement.parentElement);


// ----------- The sibling relationship ----------------//

// Looking at h2's sibling, the very next sibling is a p tag.
console.log(title.nextElementSibling);

// Looking at h2's previous sibling. There isn't one.
console.log(title.previousElementSibling);