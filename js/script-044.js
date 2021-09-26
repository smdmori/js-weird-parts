// IIFE EXPLAINED

var myName = 'Mori'
// function statement
function greet(name) {
    console.log('Hi '+ name);
}

greet(myName);

// function expression
var greetFunc = function(name) {
    console.log('inside func : Hi ' + name);
}

greetFunc(myName);



// Immidiately Invoked Function Expression (IIFE)
var greeting = function(name) {
    console.log('Inside IIFE : Hi ' + name);
}(myName);


// IIFE
(function(name) {
    console.log('Hello : ' + name);
})(myName)