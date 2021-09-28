// Understanding the prototype
var person = {
    firstname: 'default',
    lastname: 'default',
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
}

var mori = {
    firstname: 'Mori',
    lastname: 'Sami'
}

// TODO:
// Don't do this EVER! for demo purposes ONLY!
mori.__proto__ = person;

console.log(mori.getFullName());

console.log('***************');


for (var prop in mori) {
    console.log(prop + ': ' + mori[prop]);
}

console.log('***************');


// Reflection and extend
for (var prop in mori) {
    if (mori.hasOwnProperty(prop)) {
        console.log(prop + ': ' + mori[prop]);
    }
}

console.log('***************');


var mehdi = {
    address: 'GitiName',
    getFormalName: function () {
        return 'Dr.' + this.firstname + ' ' + this.lastname;
    }
}

var masood = {
    getfirstname: function () {
        return this.firstname;
    }
}

_.extend(mori, mehdi, masood);

console.log(mori);