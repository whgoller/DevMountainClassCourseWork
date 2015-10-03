/*write a function using closure that takes in a callback function. 
if the function has the same arguments passed in then don't run the function again just pass back the values previously saved.

mencashe */

var myMemcache = function(callbackFunction){
	var PreviousArguments = [];
	var cashedReturnValues = [];
	return function something(valueEntered){
		for(var i = 0; i < PreviousArguments.length; i++){
			if(PreviousArguments[i] === valueEntered){
				return cashedReturnValues[i];
			}
		}
		PreviousArguments.push(valueEntered);
		var answer = callbackFunction(valueEntered);
		cashedReturnValues.push(answer);
		return answer;
	}
}

var hi = function(v){
	return v + 2
};

var bb = myMemcache(hi);

bb(9);


//try to manipulate to accomodate an unlimited number of arguments.

