//toy-problem
//Write a funciton that takes a string and replaces all the "x" letters with the letters "y".


var YForX = function(theString){
	var newString = theString.split('');
	for(var i = 0; i < newString.length; i++){
		if(newString[i] === 'x' || newString[i] === 'X'){
			newString[i] = 'y';
		}
	}
	return newString.join('');
}

YForX('xxgeenYyhSX');

//or

var YForX = function(theString){
	var newString = theString.split('');
	for(var i = 0; i < newString.length; i++){
		if(newString[i] === 'x' || newString[i] === 'X'){
			newString[i] = splice(i,'x','y');
		}
	}
	return newString.join('');
}

YForX('xxgeenYyhSX');

//or
//recursion is kinda like a call back but it is calling itself instead of another function
//, don't forget to put in a stop or it will become an infinite loop.
var YForX = function(theString){
	if(str.length <=1){
		if(str[0]=='x'){
			return 'y';
		}else {
			return str;
		}
	}
	if(str[0]==='x'){
		return 'y' + YForX(str.slice(1));
	}else {
		return str[0] + YForX(str.slice(1));
	}
}

YForX('xxgeenYyhSX');