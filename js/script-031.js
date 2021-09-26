// Object and object literals

var Mobi = {
    firstname: 'Mobi',
    lastname: 'Samadi',
    address: {
        city: 'Saveh',
        street: 'Shahrak e Fajr',
        country: 'Iran',
    }
}

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Mobi)

greet( { firstname: 'Mori'})

Mobi.university = {
    name: 'Boo Ali',
    city: 'Hamedan'
}

console.log(Mobi);