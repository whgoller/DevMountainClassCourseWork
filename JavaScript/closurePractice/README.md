closurePractice
===============
##### Fork this repo, clone your fork, then open practice.js and complete all the activities. 
* COMMIT AND PUSH YOUR CODE OFTEN!

### Learning Objectives
  - be able to define what a closure is
  - be able to identify when a closure is being used


  when a function returns a function then it retains access to the original scope.

  example:
  var outerFunction = function(){
	  var x = "Hello World!";
	  return function(){
	  	console.log(x);
	  }
  }


	var inner = outerFunction();
	inner is just the function that is returned. 

	the following two are basically doing the same thing...
	var foo = function(){}
	var foo = outerFunction();


	//another example
	var outer = function(){
		var x = "Hello World!";
		return function(){
			alert(x);
		}
	}
	//when outer is called it will return the function definition and can be called at a later time.
	var inner = outer(); 



	//another example
	var outer = function(){
		var x = "Hello World!";
		return (function(){
			alert(x);
		})();
	}
	//when outer is called it will run the return function before it returns.
	var inner = outer(); 