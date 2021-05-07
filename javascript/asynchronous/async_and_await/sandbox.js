const getTodos = async () => {


    /* 
        Await stalls the browser
        But remember we're inside an async function
        This async function in itself is non-blocking.

        So all of this work will be handled somewhere else in
        the browser, so the code here could carry on if it wanted to.
    */


    /*
        When we get a response object back from using fetch,
        we have to use the json method to get it
    */
    const response = await fetch('todos/luigi.json');
    const data = await response.json();
    return data;

};


// Remember, any async function returns a promise.
// We tack in the then method because everything inside getTodos
// first must be executed

console.log(1);
console.log(2);

getTodos()
    .then(data =>  console.log('resolved', data)); // More readable when written like this
    // You can tack the catch method here

console.log(3);
console.log(4);
