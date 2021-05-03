const getTodos = (callback) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {

        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
           
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }

    });

    
    request.open('GET', 'todos.json');
    request.send();
}


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

        /*
            In a promise we automatically
            get access to two parameters inside
            the function. That is 'resolve', and 'reject'
        */

        resolve('some data');
        reject('some error');
        // fetch something 

    });


}

/*
console.log(1);
console.log(2);


getTodos((err, data) => {

    console.log('callback fired')
    console.log(err, data)

    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }

});

console.log(3);

console.log(4);
*/