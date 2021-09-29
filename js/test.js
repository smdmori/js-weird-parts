// checking typeof and instnceof
var a = {};
console.log(typeof a);

var b = [];
console.log(typeof b);

var c = 3;
console.log(typeof c);

var d = 'string';
console.log(typeof d);


console.log(Object.prototype.toString.call(a));
console.log(Object.prototype.toString.call(b));
console.log(Object.prototype.toString.call(c));
console.log(Object.prototype.toString.call(d));

console.log('**********');

function Person(name) {
    this.name = name;
}

console.log(typeof Person);

var e = new Person();
console.log(typeof e);
console.log(e instanceof Person);

// *********************************************

// Array.prototype.addingnewchert = 'cool!'

// // TODO: see difference between 'for ... in' and 'for ... of '
// var arr = [4, 1, 0, 8, 9];

// for (i in arr) {
//     console.log(i, arr[i]);
// }

// console.log('***********');

// for (o of arr) {
//     console.log(o, arr[o]);
// }

// *********************************************

// var i = Infinity

// console.log(i);
// console.log(typeof i);


// *********************************************
// var list = [0,3,4,7,1,7,0]

// var answer = list.sort(function (a,b) {
//     return b-a
// })

// console.log(answer[3])
