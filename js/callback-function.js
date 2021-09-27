function greet(name) {
    var name = name || 'mormor'
    alert('Hi ' + name);
}

function sayGreetingsToName(callback) {
    
    var name = prompt("What is your name?");
    callback(name);

}

sayGreetingsToName(greet);