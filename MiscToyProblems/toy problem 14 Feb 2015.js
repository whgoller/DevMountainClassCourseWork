//Find the only item that occurs an even number of times in an array. 
//If there is more than one item that occurs an even number of times, Just return one of them. 
//if tere are not items that occur an even number of times, return null.

var evenOccurence = function (numArray){
    for(var i = 0; i < numArray.length; i++){
        var occuranceCount = 0;
        for(var t = 0; t < numArray.length; t++){
            if(numArray[i] === numArray[t]){
                occuranceCount++;
            }
        }
        if(occuranceCount % 2 === 0){
            return numArray[i];
        }
    }
    return null;
    
};

var onlyEven = evenOccurence([1, 6, 2, 4, 4, 5, 6, 8, 9, 6]);
console.log(onlyEven);

var onlyEven = evenOccurence([1,1,3,4,1]);
console.log(onlyEven);



//OR
//instructor solution


var evenOccurence = function (numArray){
    var i = numArray.length;
    var results = {};
    while(i--){
        results[numArray[i]] = (results[numArray[i]] || 0) + 1; 
        //the (results[numArray[i]] || 0) is saying that if there is a number in the array that 
        //already exists then assign the results[numArray[i]] otherwise return 0 . 
    }
    var keys = Object.keys(results);
    var j = keys.length;
    while(j--){
        if(results[keys[j]] % 2 === 0){
            return parseInt(keys[j]);
        }
    }    
    return null;
};

var onlyEven = evenOccurence([1, 6, 2, 4, 4, 5, 6, 8, 9, 6]);
console.log(onlyEven);

var onlyEven = evenOccurence([1,1,3,4,1]);
console.log(onlyEven);


//OR
//Eric's Solution
var evenOccurence = function (arr){
    var returnObj = {};
    for(str in arr){
        if(returnObj.hasOwnProperty(arr[str])){
            returnObj [arr[str]] = returnObj[arr[str]] +1 ;
        } else {
            returnObj [arr[str]] = 1;
        }
    }
    console.log(returnObj);
    for(obj in returnObj){
        if(!(returnObj[obj] % 2)){
            return obj;
        }
    }
    return null;
};


var onlyEven = evenOccurence([1, 6, 2, 4, 4, 5, 6, 8, 9, 6]);
console.log(onlyEven);

var onlyEven = evenOccurence([1,1,3,4,1]);
console.log(onlyEven);
