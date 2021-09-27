// call() - apply() - bind()
var person = {
    
    firstname: 'Mori',
    lastname: 'Sami',

    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;

    }
}

var logname = function(lang1, lang2) {
    
    console.log('Logged : ', this.getFullName());
    console.log('Arguments : ', lang1, lang2);
    console.log('---------------');

}
// Bind : Creates a copy of the function but doesn't execute it
// First way to use bind
// }.bind(person)
// logname();

// Second way to use bind
var logPersonName = logname.bind(person);
logPersonName('en', 'es');

// binding person on the fly and invoking function on the same time
logname.call(person, 'en', 'fa');

// just like call method, but it accepts array as its arguments. arrays are more useful on some circumstances like dealing with numbers
logname.apply(person, ['en']);


// using apple ind IIFE together on the same time
(function(lang1, lang2) {
    
    console.log('Logged : ', this.getFullName());
    console.log('Arguments : ', lang1, lang2);
    console.log('---------------');

}).apply(person, ['fa', 'de']);


// function borrowing
var person2 = {

    firstname: 'Linus',
    lastname: 'Torvalds'

}

console.log(person.getFullName.apply(person2));


// function currying
// Function Currying is creating a copy of a function but with preset parameters
// its very useful in mathematical situations
function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2, 16);

console.log(multiplyByTwo());