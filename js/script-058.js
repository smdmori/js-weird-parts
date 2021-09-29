// Function Constructors and .prototype
function Person(firstname, lastname) {
    console.log('************');

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;

    // FIXME: DON'T USE THIS
    // this type of adding methods, consumes memory, but the latter one doesn't.
    this.getformalfullname = function () {
        return this.lastname + ', ' + this.firstname;
    }
    console.log(this.firstname + ' ' + this.lastname);

}

var mori = new Person('Mori', 'Sami');
console.log(mori);

var linus = new Person('Linus', 'Torvalds');
console.log(linus);

// TODO: USE THIS ONE
// this type of adding methods is more efficient than one added in function statement.
Person.prototype.getfullname = function () {
    return 'Dr.' + this.firstname + ' ' + this.lastname;
}

console.log(mori.getformalfullname());