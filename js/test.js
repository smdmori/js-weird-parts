Array.prototype.addingnewchert = 'cool!'

// TODO: see difference between 'for ... in' and 'for ... of '
var arr = [4, 1, 0, 8, 9];

for (i in arr) {
    console.log(i, arr[i]);
}

console.log('***********');

for (o of arr) {
    console.log(o, arr[o]);
}


// var i = Infinity

// console.log(i);
// console.log(typeof i);


// *********************************************
// var list = [0,3,4,7,1,7,0]

// var answer = list.sort(function (a,b) {
//     return b-a
// })

// console.log(answer[3])
