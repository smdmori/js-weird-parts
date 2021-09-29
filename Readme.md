# Javascript BIG Words Explained



****

**Reflection** :  
An object can look at itself, listing and chenging its properties and methods.Javascript BIG Words Explained  

****  

**Function Constructors** :  
A normal function that is used to construct objects.  
The 'this' variable points a new empty object, and that object is returned from the function automatically.






****  
# New learnings  

USE THIS APPROACH:  
Define properties in function statement, but define methods in function prototype.  
in this way, you save some memory space by not adding methods to every object that is a child of first function onject. (058.js)  

****

**.prototype** :  
every function you create in JS has this property. it starts as a empty object and ots always there, but you can add on to it. (058.js)

****

**Dangerous Aside** :  
use Capital letter for any function that you are gonna use as function constructor.  