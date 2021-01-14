// This will save the first p tag of the Document.
const para = document.querySelector('p');

// The innerText property removes the tags.
// Recall: We know it's a property because we don't have parenthesis.
console.log(para.innerText);

// Changing the text
para.innerText = "Hallo ;-;";

// Adding to the text
para.innerText += " additional";

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += " New text";
})

// Changing actual HTML content.
const content = document.querySelector('.content');

console.log(content.innerHTML);

// Appending content
content.innerHTML += '<h2>This is a new h2</h2>';

const people = ['bill', 'francis', 'zoey', 'louis'];

people.forEach(person => {
    content.innerHTML += `<p> ${person} </p>`;
})