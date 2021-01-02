// template strings
const title = 'Best reads of 2019';
const author = 'Viktor';
const likes = 30;


// concatenation way
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result);

// template string way

/* Note that we had to use backticks around the literal instead of quotes or apostrophes */
let result2 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result2);


// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes </span>
`;

console.log(html);