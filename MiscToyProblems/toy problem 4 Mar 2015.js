var exoh = function(str){
  var strArray = str.split('');
  var xCount = 0;
  var yCount = 0;
  for(var i = 0; i < strArray.length; i++){
    if(strArray[i] === 'x'){
      xCount++;
    }else if(strArray[i]=== 'o'){
      yCount++
    }
  }
  if(yCount === xCount){
    return true;
  }
  
  return false;
}


var myStr = 'xxxxxooo';
exoh(myStr);
var myStr2 = 'xxoo';
exoh(myStr2);



var exoh = function(str){
  var xCount = 0;
  var yCount = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] === 'x'){
      xCount++;
    }else if(str[i]=== 'o'){
      yCount++
    }
  }
  if(yCount === xCount){
    return true;
  }
  
  return false;
}