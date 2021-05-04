// fetch api

/*
    In this function we pass in an argument 
    which is a resource that we want to fetch

    Fetch returns a promise.
    A promise is basically saying

    " Look at some point, I will either resolve
      if we have a success or reject if there's an error"


    Since it returns a promise we can tack on 
    a then method to fire a function when we have 
    a success case when the promise is resolved.

*/

// This is what you'll be using to fetch JSONS
// Standard issue way.

fetch('todo/todo.json').then((response) => {
  console.log('resolved', response);
  return response.json(); // This returns a promise.
}).then(data => {
  console.log(data);
}).catch((err) => {
  console.log('rejected', err);
});