//write two functions: one called getName that prompts the user for their name 
//and the other called sayName that prints the name to the console.

var getName = function(){
	var name = prompt("Enter your name", "");
	return name;
}


var sayName = function(name){
	console.log("Your name is " + name);
}

var name = getName();
sayName(name);


// or to combine the following would work ...

var getName = function(){
	var name = prompt("Enter your name", "");
	return name;
};
var sayName = function(){
	var name = getName();
	console.log("Your name is " + name);
};

sayName();