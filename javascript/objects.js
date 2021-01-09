
let user = {
    name: 'matthew',
    age: 30,
    email: 'matthew@thenetninja.co.uk',
    blog: [ { title: 'Why Mac & Cheese rules', likes: 30},
            { title: '10 Things to Make With Marmite', likes: 50}
    ],
    // methods
    /* Methods are defined as 
    functions in an object (Duh)
    */
    login: function(){
        console.log('The user logged in');
    },

    logout: function() {
        console.log('The user logged out.');
    },

    /* Note: Don't use arrow functions for writing
    methods. It won't work. Stick to regular functions.
    */

    /* A cleaner way of writing methods is to get rid of
    the semicolon and "function" word, just leaving out
    the round brackets.
    */
    logBlogs() {
        console.log('This user has written the following blogs: ');
        /* The forEach method continuously spits out
        strings. The callback function catches it. */ 
        this.blog.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    },

    

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
user.logBlogs();