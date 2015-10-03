
//synchronous vs asynchronous programming
//synchronous - code that executes in order.
//asynchronous - code that executes out of order.
//callback function is basically saying when this other code is done executing then execute this code...
//cb is shorthand for callback
//synchronousthe first function would run then the second function would run
//example
(function(){
	var username;
	submit username();//sends request out
	console.log(success); //recieves response from request 
	});


//asynchronous example
(function(){
	var usename;
	submitUsername(function(x){
		console.log(x);
	});
	console.log('success'); //success
							// then x is logged
});

//callback function is taking another function and passing it in as the parameter of the function.



/*understand the use cases of callbacks and be able to identify and use callbacks */

//before using callback function...toy problem...
var sayName = function(inputName){
	console.log(inputName);
}

var getName = function(){
	var name = prompt('What is your name?');
		sayName(name);
}


//the toy problem using a callback functions...
var  logValue = function(cb){
	console.log(cb());
};

var getName = function(){
	return prompt('What is your name?');
}

logValue(getName);

//generic template for above toy problem....
var  logValue = function(x){
	console.log(x());
};

logValue(function(){
	return prompt('What is your name?');
});




//example
var sayHi = function(str, cb){
	cb(str);
}

sayHi('Hi Ben', function(thingToSay){
	alert(thingToSay); //should alert 'Hi Ben'
}); // in this call backfunction. thingToSay will be the string passed in...



//example
//setTimeout function takes a callback and time in milliseconds
(function(){
	setTimeout(function(){
		alert('hello');
	}, 5000);
	alert('What\'s up?');
})();
//what's up will show first then after 5000 milliseconds it will alert hello.


//psuedo code for how this functions
sayHi(str = 'Hi Ben', cb=function){
	cb(str); //function('hi ben')
}