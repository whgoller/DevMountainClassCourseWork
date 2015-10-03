//Higher Order Functions
	//functions are First Class Objects
	//Defined: 

//JQuery use of Callbacks example
$("#btnn_1").on('click',function(){
	alert("Btn 1 Clicked");
});



//Variable Hoisting
	//js is defining all variables then functions.
	//with JS there is not really a compile phase most of the time.
	//js when running takes all the variables and pulls them to the top of the page in the order they are found.

var doThis = function(){ 

}

function doThis(){

}


//WTF is 'this'?
//'this' is bound to one of three things
//1. left of the Dot at Run time
//2. If a class has been instantiated using 'new', 'this' is bound to the newly created object.
//3. If a function is being called with .call() or .apply(), 'this' is bound to whatever context is passed in.

* If 'this' is not specified, 'this' will default to the window object.

Closures
Allow you to refer to variables that were defined outside of the current function.

Functions can refer to variables defined in outer functions even after those outer functions have returned.

example:
var callFriend = function(number){
	var friend = 'jake';
	function callF(){
		return 'Calling ' + friend + ' at ' + number;
	}
	return callF;
}

var fn = callFriend('20282153211');
fn();


//or
//example:
var callFriend = function(){
	var friend = 'jake';
	function callF(number){
		return 'Calling ' + friend + ' at ' + number;
	}
	return callF;
}

var fn = callFriend();
fn('20282153211');