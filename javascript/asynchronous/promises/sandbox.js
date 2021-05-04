const getTodos = (resource, callback) => {

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
    
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);

            } else if (request.readyState === 4) {
                reject('error getting resource');

            }
    
        });
    
        request.open('GET', resource);
        request.send();

    });
   
}

getTodos('todos/todos.json').then( data => {
    console.log('promise resolved!', data);
}).catch(err => {
    console.log('promise rejected', err);
});


// getSomething is a variable,
// and it's initialized as an arrow function.

const getSomething = () => {

    /* 

        A promise is basically something
        that's going to take some time to do

        A promise will lead to one or two outcomes
        Either a promise will be resolved, or it will 
        be rejected.

        A promise takes as a parameter a function.
        
    */

    return new Promise( (resolve, reject) => {

        // fetch something 

        /*
            In a promise we automatically
            get access to two parameters inside
            the function. That is 'resolve', and 'reject'
        */

        resolve('some data');
        //reject('some error');

    });


};

// Adding two functions to the then method is messy.
// The code block below is just a demonstration. There's a cleaner implementation.
   
/*
    getSomething().then((data) => {
        console.log(data);
    }, (err) => {

        console.log(err);

    });
*/

/*
getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/