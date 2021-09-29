# Javascript BIG Words Explained

## **Reflection**
An object can look at itself, listing and chenging its properties and methods.Javascript BIG Words Explained  

&nbsp;  

## **Function Constructors**
A normal function that is used to construct objects.  
The 'this' variable points a new empty object, and that object is returned from the function automatically.

&nbsp;  

## **Polyfill**
Code that adds a feature which the engine *may* lack (063.js)

&nbsp;  

## **Syntactic Sugar**
A different way to *type* something that doesn't change how it works under the hood. (064.js)

&nbsp;  

## **Method Chaining**
Calling one method after another and each method affects the parent object.
So obj.method1().method2() where both methods end up with a 'this' variable pointing at 'obj'.  

&nbsp;  

# New learnings  

### USE THIS APPROACH  
Define properties in function statement, but define methods in function prototype.  
in this way, you save some memory space by not adding methods to every object that is a child of first function onject. (058.js)  

&nbsp;  

## **.prototype**
every function you create in JS has this property. it starts as a empty object and ots always there, but you can add on to it. (058.js)

&nbsp;  

## **Dangerous Aside**
use Capital letter for any function that you are gonna use as function constructor.  

&nbsp;  
