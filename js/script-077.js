// Properties and Chainable Methods
// gets a new object (the architecture allows us to not have to use the 'new' keyword here) 
var g = G$('Mori', 'Sami');

console.log(g);

// use our chainable methods
g.greet().setLang('es').greet(true).setLang('en').greet(true).log().setLang('es').log();

// let's use our object on the click of the login button
$('#login').click(function () {

    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var grtr = G$('Mori', 'Sami');

    // hides the login on the screen
    $('#logindiv').hide();

    // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
    grtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});