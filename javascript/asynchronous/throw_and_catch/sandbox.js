// async and await

const getTodos = async() => {

    const response = await fetch('todos/toddos.json');


    if(response.status !== 200) {
        throw new Error('Cannot fetch data');
    }

    const data = await response.json();


    return data;

};

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message));