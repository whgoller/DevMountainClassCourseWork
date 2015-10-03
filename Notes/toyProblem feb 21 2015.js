var longestWord = function(inputStr){
    var strArray = inputStr.split(' ');
    var longestWord = '';
    var longestWordLength = 0;
    for(var i = 0; i < strArray.length; i++){
        if (longestWordLength <= strArray[i].length){
            longestWord = strArray[i];
            longestWordLength = strArray[i].length;
        }
    }
    return longestWord;
    
};


console.log(longestWord('This is a sentence of long words'));

console.log(longestWord('How is everyone doing today?'));




//this will return an array that when there are ties will return 
var longestWord = function(inputStr){
    var arr = [];
    var result = [];
    arr = str.split(' ');
    
    arr.map(function(item){
        var subArr = [];
        if(result[item.length]=== undefined){
            subArr.push(item);
            result[item.length] = subArr;
        } else {
            result[item.length].push(item);
        }
    });
    return result[result.length-1]
};
