
let user = {
    name: 'matthew',
    age: 30,
    email: 'matthew@thenetninja.co.uk',
    location: 'berlin',
    blog: ['why mac & cheese rules', 'my favorite music'],
    // methods
    /* Methods are defined as 
    functions in an object (Duh)
    */
    login: function(){
        console.log('the user logged in');
    }

};


console.log(user);
console.log(user.name);
console.log(user.age);


user.age = 35;
console.log(user.age);

// You can also use square bracket notation
// to access object properties.

console.log(user.name);

console.log(user['name']);
user['name'] = 'dr. house';
console.log(user['name']);

console.log(typeof user);
console.log(typeof user.name);

user.login();