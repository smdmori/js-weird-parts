// Everything is an object or a primitive

/**
 * a : object
 */
var a = {};

/**
 * b : Empty function
 */
var b = function () { }

/**
 * c : array
 */
var c = [];


console.log(a);
console.log(a.__proto__);
console.log(a.__proto__.__proto__);
console.log('***************');

console.log(b);
console.log(b.__proto__);
console.log(b.__proto__.__proto__);
console.log(b.__proto__.__proto__.__proto__);
console.log('***************');

console.log(c);
console.log(c.__proto__);
console.log(c.__proto__.__proto__);
console.log(c.__proto__.__proto__.__proto__);
console.log('***************');
