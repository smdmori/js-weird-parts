// Everything is an object or a primitive
var a = {};
var b = function () { }
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
