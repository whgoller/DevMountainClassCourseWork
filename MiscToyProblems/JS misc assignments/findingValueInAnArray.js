// Create a funtion that takes 2 parameters (an array and a string). 
//The function will return true if the string is in the array provided and false if it is not.

var stringFinder = function(aToSearch, stringValue){
	for(var i=0; i < aToSearch.length; i++){
		if(aToSearch[i] === stringValue){
			return true;
		} 			
	}
	return false;
}


var myArray = ["Some", "one", "is", "here"];
var myString = "Some";

console.log(stringFinder(myArray, "here"));


//one solution that is also correct
var stringSearch = function (arr, str){
	if (arr.indexOf(str) !== -1) {
		return true;
	} else {
		return false;
	}
}

//the above in a one line solution. //need to check if this is correct.
var stringFinder = function(aToSearch, stringValue){
	return aToSearch.indexOf(stringValue) !== -1 ? true: false;
}