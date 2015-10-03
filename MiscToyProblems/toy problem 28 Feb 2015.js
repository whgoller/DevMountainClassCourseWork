var isPalindrome = function(str){
  var booleanValue = false;
  var reverseStr = str.toLowerCase().split('').reverse().join('');
  if(reverseStr === str.toLowerCase()){
    booleanValue = true;
  } 
  return booleanValue;
};

var myStr = 'abccba';
console.log(isPalindrome(myStr));
var myStr2 = 'abcde';
console.log(isPalindrome(myStr2));
var myStr3 = 'abcdea';
console.log(isPalindrome(myStr3));

