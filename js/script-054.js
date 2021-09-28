// Understanding the prototype
var person = {
    firstname: 'default',
    lastname: 'default',
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
}

var mori = {
    firstname: 'Mori',
    lastname: 'Sami'
}

// TODO:
// Don't do this EVER! for demo purposes ONLY!
mori.__proto__ = person;

console.log(mori.getFullName());

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;

console.log(jane.getFullName());

var john = {
    lastname: 'Johnny'
}

john.__proto__ = person;

console.log(john.getFullName());