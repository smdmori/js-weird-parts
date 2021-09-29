// Object.create and Pure prototypal Inheritance

// Polyfill
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implemention only accepts the first parameter.');
        }

        function F() { }
        F.prototype = o;
        return new F();
    }
}

var person = {

    firstname: 'default',
    lastname: 'default',
    greet: function () {
        return 'Hi ' + this.firstname + ' ' + this.lastname;
    }
}

// TODO: Use this in newer browsers
var mori = Object.create(person)

console.log(mori);

mori.firstname = 'Mori'

console.log(mori.firstname);
console.log(mori.lastname);
console.log(mori.greet());
