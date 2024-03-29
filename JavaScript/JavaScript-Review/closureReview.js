var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var myFriend = callFriend();
myFriend('435-215-9248');



/*

Write a function that accepts a function as it's first argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');

*/

var outerFunction = function(callBackFunction){
	var canCall = true;
	return function(){
		if(canCall){
			callBackFunction();
			canCall = false;
		}
	}
}

var inner = outerFunction(function(){
	console.log("hi");
});

inner();
inner();


//Part two.
var outerFunction = function(callBackFunction, nTimes){
	var count = 0;
	var canCall = true;
	return function(){
		if(count < nTimes){
			callBackFunction();
		}else {
			console.log('STAHHP');
		}
		count++;
	}
}

var inner = outerFunction(function(){
	console.log("hi");
}, 3);

inner();
inner();
inner();
inner();
inner();
