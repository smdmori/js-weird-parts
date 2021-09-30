// Properties and Chainable Methods
var g = G$('Mori', 'Sami');

console.log(g);

// g.greet().setLang('es').greet(true).setLang('en').greet(true).log().setLang('es').log();

$('#login').click(function () {

    var grtr = G$('Mori', 'Sami');

    $('#logindiv').hide();

    grtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});