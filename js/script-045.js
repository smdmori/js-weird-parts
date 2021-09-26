// IIFE and Safe code

// global variable
var greeting = 'Hello';

// IIFE
(function(global, name) {
    var greeting = 'Salam';

    // mutate global variable intentially and safe
    global.greeting = 'Hallo';

    console.log(greeting + ' ' + name);

}(window, 'World'));

// Global
console.log(greeting);