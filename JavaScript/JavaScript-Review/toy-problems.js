/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/
var plusOneSum = function (numArray){
	var total = 0;
	for(var i = 0; i < numArray.length; i++){
		total  = total + (numArray[i] + 1);
	}
	return total;
}
plusOneSum([1, 2, 3, 4]); 




/*
Write a function that accepts a multi dimensional array and returns a flattened version.
flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]
*/

var flatten = function (multiDimenArray){
	var flatArray = [];
	for(var count1 = 0; count1 < multiDimenArray.length; count1++){
		if(!Array.isArray(multiDimenArray[count1])){
			flatArray.push(multiDimenArray[count1]);
		}else {
			for(var count2 = 0; count2 < multiDimenArray[count1].length; count2++){
				if(!Array.isArray(multiDimenArray[count1][count2])){
					flatArray.push(multiDimenArray[count1][count2]);
				} else {
					for(var count3 = 0; count3 < multiDimenArray[count1][count2].length; count3++){
						if(!Array.isArray(multiDimenArray[count1][count2][count3])){
							flatArray.push(multiDimenArray[count1][count2][count3]);
						}
					}
				}
			}
		}
	}
	console.log(flatArray);
}
flatten([1, 2, [3, [4], 5, 6], 7]);

//or
//solution by Matt
var makeOne = function (uhray){
	var newString = uhray.join();
	var flattened = [];
	for(var i = 0; i < newString.length; i++){
		if(newString[i] !== ','){
			flattened.push(newString.slice(i, i +1));
		}
	}
	return flattened
}

flatten([1, 2, [3, [4], 5, 6], 7]);


var flatten = function (multiDimenArray){
	var flatArray = [];
	var tempArray = [];
	var retrever = function (innerArray){
		for(var c1 = 0; c1 < innerArray.length; c1++){
			if(Array.isArray(innerArray[c1])){
				for(var c2 = 0; c2 < innerArray[c1].length; c2++){
					tempArray.push(innerArray[c1][c2]);
				}
			}	else{
				tempArray.push(innerArray[c1]);
			}
		}
		return tempArray;
	}
	for(var counter = 0; counter < multiDimenArray.length; counter++){
		if(Array.isArray(multiDimenArray[counter])){
			retrever(multiDimenArray[counter]);
			if(tempArray.length > 0){
				for(var i = 0; i < tempArray.length; i++){
					flatArray.push(tempArray[i]);
				}
			}
		}	else{
			flatArray.push(multiDimenArray[counter]);
		}
	}
	return flatArray;
}
flatten([1, 2, [3, [4], 5, 6], 7]);






/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/
//NOT COMPLETE
// var abcOrderArray = ['a1', 'a2', 'a3', 'a4', 'a5', 'aN', 'b1', 'b2', 'b3', 'b4', 'b5', 'bN', 'c1', 'c2', 'c3', 'c4', 'c5', 'cN'];
// var numOrderArray = [];
// var tempArray = [];
// for(var i = 0; i < abcOrderArray.length; i++){
// 	for(var ii = 0; ii < abcOrderArray.length; ii++)
// 		if(abcOrderArray[i].charAt(1) === abcOrderArray[ii].charAt(1)){
// 			tempArray.push(abcOrderArray[i];)
// 			tempArray.sort();
// 		}		
// 	}

// }
// var sortByNumberThenLetter = function()








/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/





/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]
*/

var longestWords = function(sentence){
  var stringArray = sentence.split(' ');
  var returnStringArray = []
  var longestWordLength = 0;
  for(var i = 0; i < stringArray.length; i++){
    wordlength = stringArray[i].length;
    // if(stringArray[i].search((\.$))){
    //   wordlength = wordlength -1;
    //   alert(wordlength);
    // }
    if(wordlength === longestWordLength){
      returnStringArray.push(stringArray[i]);
    }else if (wordlength > longestWordLength){
      longestWordLength = wordlength;
      returnStringArray = [];
      returnStringArray.push(stringArray[i]);
    }
  }
  // console.log(returnStringArray);
  return returnStringArray;
}
longestWords("You are just an old antidisestablishmentarian"); // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents"); // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"); // ["buffalo"] or ["Buffalo"]




/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/


/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
