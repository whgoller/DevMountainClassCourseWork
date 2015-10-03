var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  var last = function(){
  	var lastItem = threeItems[threeItems.length -1];
  	return lastItem;
  }
  alert(last());




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

for(var i = evenArray.length; i >= 0; i--){
  if(evenArray[i] % 2 > 0){
  		evenArray.splice(i,1);
  	} 
}
evenArray;





/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. 
//Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. 
//If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var randomNumInArray = function(rArray){
	var randomNum = getRandomArbitrary();
	for(var i = 0; i < rArray.length; i++){
		if(rArray[i] === randomNum){
			return true;
		}
	}
	return false;
}

randomNumInArray(randomArray);




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

second = []; //this is here to clear out second between runs...
second.push(first.slice());
second.push(6);
second.push(7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

var longest = function(sSentence){
	var aSentence = sSentence.split(' ');
	var longestWord = '';
	for(var i = 0; i < aSentence.length; i++){
		if(aSentence[i].length > longestWord.length){
			longestWord = aSentence[i];
		}
	}
	return longestWord;
}

longest(sentence);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

//assuming they are asking for just the first letter in every word to be capitalized
var capitalize = function(poem){
	var poemArray = poem.split(' ');
	for(var i = 0; i < poemArray.length; i++){
		poemArray[i] = poemArray[i][0].toUpperCase()  + poemArray[i].slice(1);
	}
	return poemArray.join(' ');
}
capitalize(myPoem);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowelCounter = function(myString){
	var numVowels = 0;
  var newString = myString.slice().toLowerCase();
	for(var i = 0; i < myString.length; i++){
		if(newString[i] === 'a' || newString[i] === 'e' || newString[i]  ==='i' || newString[i]  ==='o' || newString[i]  ==='u'){
			numVowels++;
		}
	}
	return numVowels;
}

vowelCounter(theOdyssey);
