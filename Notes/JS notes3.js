//contstructor path

example 
var makerFunction = function(name){
	var returnObject = {};
	returnObject.name = name;
	returnObject.sayName = function(){
		console.log(returnObject.name);
	};
	return returnObject;
};

var ben = makerFunction("Ben");
var tyler = makerFunction("Tyler");

console.log(ben, tyler


//Look up closure **


//contstructor function //when you use the new key word you don't have to use the return statement.
//example of pseudoclassical instantiation
//capitalize class names.
//the new keyword is creating a new instance of the class.
//object can be anything in javascript

var Person = function(){
	this.name = name;
	this.email = email;
	this.address = address;
	this.sayName = function(){
		console.log(this.name);
	};
};


var ben = new Person('Ben','email','address');
ben.sayName();
var tyler = new Person('Tyler','hisemail','hisaddress');
tyler.sayName();
var mike = new Person();

console.log(mike);

//chain of inharitence works like scope
var outer = function(){
	var x = true;
	var middle = function(){
		var y = true;
		var inner = function(){
			var z = true;

			console.log(z);
			console.log(y);
			console.log(x);
		}
	}
};

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





//example 1 //prototype
var b = function(){
	var bObj = {};
	return bObj;
};

b.prototype.b = "X";

var c = function(){
	var cObj = Object.create(b.prototype);
	cObj.c = "Y";
	return cObj;
};

var d = c();

alert(d.c);
alert(d.b);

//example
var parentObject = function(){
	var whatever = {};
	return whatever;
};

parentObject.prototype.someValue = "X";

var childObject = function(){
	var cObj = Object.create(parentObject.prototype);
	cObj.c = "Y";
	return cObj;
};

var d = childObject();

alert(d.c);
alert(d.someValue);



//example 





// //example 
// var personObject = function(){
// 	var personObject = {};
// }
// personObject.prototype.sayName = function(){
// 	alert(this.name);
// };



// var PoliceOfficerCandidate = function(name, age, homeState){
// 	var policeOfficer = Object.create();
// 	policeOfficer.name = name;
// 	policeOfficer.age = age;
// 	policeOfficer.homeState = homeState;
// 	return policeOfficer;
// }

// PoliceOfficer.prototype.validateAge = function(){
// 	if (this.age > 18) {
// 		alert('old enough');
// 	};
// };

// var bob = PoliceOfficerCandidate('Bob', 30, 'Utah');

// bob.validateAge();





// var Person = function(name, age){
// 	var personObject = {};
// 	personObject.name = name;
// 	personObject.age = age;
// 	personObject.validateAge = function(){
// 		if(personObject.age > 18){
// 			alert('They\'re old enough');
// 		}
// 	}
// }


// var PoliceOfficerCandidate = function(homeState){
// 	var police = Object.create(Person.prototype);
// 	police.homeState = homeState;
// }

// var bob = PoliceOfficerCandidate();



