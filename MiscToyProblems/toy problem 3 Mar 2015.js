var isStringScrambled = function(str1, str2){

  
};

var mystr1 = 'Hello';
var mystr2 = 'ellHo';
console.log(isStringScrambled(mystr1,mystr2)); //true

var myStr3 = 'asdf';
var myStr4 = 'fdsaa';
isStringScrambled(myStr3,myStr4); //false




//Matt's solution
var isStringScrambled = function(str1, str2){
  var sort1 = str1.split('').sort();
  var sort2 = str2.split('').sort();
  var bool;

  if(str1.length === str2.length){
    for(var i = 0; i < str1.length; i++){
      if(sort1[i]=== sort2[i]){
        bool = true;
      } else if (sort1[i] !== sort2[i]){
        return false;
      }
    }
    return bool;
  }
  else {
    return false;
  }
};

var mystr1 = 'Hello';
var mystr2 = 'ellHo';
console.log(isStringScrambled(mystr1,mystr2)); //true

var myStr3 = 'asdf';
var myStr4 = 'fdsaa';
isStringScrambled(myStr3,myStr4); //false



