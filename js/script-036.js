// Assign by value
var a = 3

var b = a

console.log('b >> ', b);

b = 4

console.log('b >> ', b);
console.log('a >> ',a);


// Assign by Reference
var x = [1]

var y = x

console.log('y >> ', y);
y.push(2)

console.log('y >> ', y);
console.log('x >> ', x);

console.log(typeof(y))

// Assign by reference
var english = { greet: 'Hi' }
var farsi = english

console.log(english);
console.log(farsi);

farsi.greet = 'salam'

console.log(english);
console.log(farsi);

function changeObj(obj) {
    obj.greet = 'Hallo'
}

var german = english
changeObj(german)

console.log(english);
console.log(farsi);
console.log(german);

// equal operator sets up new memory space
farsi = { greet: 'salam' }

console.log(english);
console.log(farsi);
console.log(german);