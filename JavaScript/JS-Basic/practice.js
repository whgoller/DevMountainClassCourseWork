//Once you complete a problem, open up Chrome and check the answer in the console.

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var name = 'Tyler';
var isTyler= function(name){
	if(name === 'Tyler') {
	 	return 'true';
	} else {
		return 'false';
	}
}
isTyler();

//Next problem

//Create a function called getName that uses prompt() to prompt the user for their name, 
//  then returns the name.


   //  var getName = function(){
	 // var username = prompt('Enter your name', '');
	 // return username;
  //  }
  // or 
  var getName = function(){
	return prompt('Enter your name', '');
  }
  getName();


//Next Problem

//Create a function called welcome that uses your getName function you created 
//in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  // var Welcome = function(){
  // 	var theName = getName();
  // 	alert("Welcome " + theName);
  // }
  // or
  var Welcome = function(){
  	alert("Welcome " + getName());
  }

  Welcome();

//Next problem

//What is the difference between arguments and parameters?

  //A parameter is used to define something that will be passed into the function.
  //An argument is an actual value that is passed into the function.


//Next problem

//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //falsy values are undefined, 0, '', null, false, NaN
  if(falsy){

  }



//Next Problem

//Create a function called myName that returns your name

  var myName = function(){
  	return 'Wendy';
  }

//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName();

//Now alert the result of invoking newMyName
  alert(newMyName);


//Next problem

//Create a function called outerFn which returns an anonymous function which returns your name.

  var outerFn = function(){
  	return function(){
  		return 'Wendy'
  	}
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
  innerFn();
