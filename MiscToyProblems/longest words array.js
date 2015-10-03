// create an array of the longest words in the sentence.
var sentence1 = "I had to present several moments in time.";
var sentence2 = "I had to present one present that I got in the present moments.";

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
  console.log(returnStringArray);
}
longestWords(sentence1);

longestWords(sentence2);