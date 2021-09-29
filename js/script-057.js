// Function Constructors new and the History of Javascript
function Person(firstname, lastname) {
    console.log('************');

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log(this.firstname + ' ' + this.lastname);

}

var mori = new Person('Mori', 'Sami');
console.log(mori);

var linus = new Person('Linus', 'Torvalds');
console.log(linus);