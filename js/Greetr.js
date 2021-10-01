; (function (global, $) {
    // added ; to above for make sure other code does'nt change out code behaviour

    // 'new' an object
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    }

    // hidden within the scope if the IIFE and never directly accessible
    var supportedLanguages = ['en', 'es', 'fa'];

    // informal greetings
    var greetings = {
        en: 'Hello ',
        es: 'Hola',
        fa: 'سلام'
    };

    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        fa: 'خوش آمدید'
    };

    // logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'inició sesión',
        fa: 'کاربر'
    }

    // prototypes holds methods (to save memory space)
    Greetr.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },


        validate: function () {
            // check that is a valid language
            // references the extrernally inaccessible 'supportedLanguages' within the closure
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw 'Invalid Language';
            }
        },

        // retrieves messages from object by referring to properties using [] syntax
        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ', ' + this.fullName() + '!';
        },

        // chainable methods return their own containing object
        greet: function (formal) {

            var msg;

            // if undefined of null it will be coerced to false
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            // makes chainable
            return this;
        },

        setLang: function (lang) {

            // set the language
            this.language = lang;

            // validate
            this.validate();

            // make chainable
            return this;
        },

        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw 'jQuery not loaded.';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            // determine the message
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            // inject the message in the chosen place in the DOM
            $(selector).html(msg);

            // make chainable
            return this;
        }

    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function (firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    // attach out Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Greetr = global.G$ = Greetr;

    return Greetr;

}(window, jQuery))