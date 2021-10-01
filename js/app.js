// gets a new object (the architecture allows us to not have to use the 'new' keyword here) 
var g = G$('Mori', 'Sami');


$('#login').click(function () {

    g.setLang($('#lang').val()).HTMLGreeting('#greeting', false).log();

    if ($('#lang').val() === 'fa') {
        $('body').css('direction', 'rtl');
    }
    else {
        $('body').css('direction', 'ltr');
    }

})