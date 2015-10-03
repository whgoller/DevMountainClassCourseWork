ConstructorConductor
====================
##### Fork this repo, clone your fork, then do all of the tasks in the following order.
1. instanceArray.js
2. sayName.js
3. arrayProperty.js
4. quizApp.js


### Learning Objectives
  - the difference between the maker pattern and constructor pattern
  - what the ‘this’ keyword does and be able to use it
  - what the ‘new’ keyword does and what the JavaScript compiler does when a function is called with the ‘new’ keyword
  - what prototypes are in JavaScript and be able to add a method on a functions prototype and create instances of that function that invoke the prototypes method


Notes: 
chrome browser hotkeys:
cmd + [
cmd + ]
cmd + op + j
cmd + l


The difference between the maker pattern and the constructor pattern
maker pattern makes an object and returns the object.
the contructor pattern uses the new and this keyword.
both patterns under the hood do the same thing, they just look different.

Prototype allow the ability to create or add additional methods onto the parent class so when the parent class is then called the new method can be called from the object "type".



//example of a Maker
var maker = function(){
	var obj = {};
	obj.property = true;
	return obj;
}

var instance = maker();
alert(instance.property);

//example basic constructor
var contstructor = function(){
	this.myProperty = 'Hello';
	this.alertMyProperty = function(){
		alert(this.myProperty);
	};
};

var myInstance = new contstructor();
myInstance.alertMyProperty();



//example of prototype using array
Array.prototype.myName = "Ben Nelson";
var myArray = [];
myArray.push('a');
myArray.myName;


//another prototype example
var grub = function() {
	this.name = "grub";
	this.age = 0;
	this.color = 'pink';
};

grub.prototype.eat = function(){
	alert(this.name + " is eating");
}


var bee = function() {
	this.name = "bee";
	this.age = 1;
	this.color = 'yellow';
}

bee.prototype = Object.create(grub.prototype);
var myBee = new bee();
myBee.eat();