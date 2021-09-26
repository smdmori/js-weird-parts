// FRAMEWORK ASIDE: Faking Namespaces
// Cause JS doesn't have namespaces, we use objects to fake them
var greet = 'Hello'
var greet = 'Halo'

console.log(greet);

var english = {}
var persian = { greetings: { basic: 'Dorood'}}

persian.greetings.greet = 'Salam'

console.log(persian.greetings.basic);
console.log(persian);