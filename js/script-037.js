// Objects, functions, this

// global environment
console.log(this);

function a() {
    console.log(this);
    this.newVar = 'hi'
}

a()

var b = function() {
    console.log(this);
    console.log(newVar);
}

b()



var c = {
    name: 'c Obj',
    log: function() {
        var self = this

        console.log(self);

        self.name = 'log c obj'
        console.log(self);

        var setname = function(newname) {
            self.name = newname
        }
        setname('Updated')
        console.log(self);
    }
}

c.log()