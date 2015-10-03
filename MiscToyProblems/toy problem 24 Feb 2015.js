var capitalize = function(str){
  var myStr = str.split(' ');
  for(var i = 0; i < myStr.length; i++){
    //var word = myStr[i];
    //myStr[i] = word[0].toUpperCase() + word.substr(1);
    myStr[i] = myStr[i].charAt(0).toUpperCase() + myStr[i].substr(1); //.slice(1); can be used instead of substr(1)
  }
  str = myStr.join(' ');
  return str;
}

var myString = 'hello world';
capitalize(myString);