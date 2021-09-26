greet()

// function statement
function greet() {
    console.log('hi');
}

// anonymousGreet()

// function expression
// Expression: a unit code that results in a value. it doesn't have to save to a variable
// does NOT hoist
var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet()

function log(a) {
    a();
}

log(function() {
    console.log('Hi');
})