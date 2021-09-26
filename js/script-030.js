// Objects and the dots

var person = new Object()

// First way to set properties
person['firstname'] = 'Mori'
person['lastname'] = 'Samadi'

var firstNameProperty = 'firstname'

console.log(person);
console.log(person[firstNameProperty]);

person.address = new Object()

// Second way to set properties
person.address.street = 'GitiNama'
person.address.city = 'Tehran'
person.address.country = 'Iran'

// different ways for calling properties
console.log(person.address.city);
console.log(person['address']['country']);