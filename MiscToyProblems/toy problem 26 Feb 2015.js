var vowelCount = function(str){
  var count = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i].toLowerCase === 'a'| str[i] === 'e'| str[i] === 'i'|str[i] === 'o'|str[i] === 'u'){
      count++
    }
  }
  return count;
}

var myString = 'Hello World!'
vowelCount(myString); //prints 3



//
//var vowelCount = function(str){
//  
//  var count = 0;
//  var reg = /[aeiou]/gi;
//  for(var i = 0; i < str.length; i++){
//    if(str[i].match(reg){
//      count++
//    }
//  }
//  return count;
//}
//
//var myString = 'Hello World!'
//vowelCount(myString); //prints 3


