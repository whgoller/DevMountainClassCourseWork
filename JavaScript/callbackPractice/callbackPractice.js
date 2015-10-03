/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



//Code Here for first
var first = function(namesArray,callbackFunction){
  callbackFunction(namesArray[0]);
}
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

//Code Here for last
var last = function (namesArray, callbackFunction){
  callbackFunction(namesArray[namesArray.length-1]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

  //Code Here for multiply
var multiply = function(num,num2,callbackFunction){
  callbackFunction(num * num2);
}

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

  //Code Here for contains
  var contains = function(namesArray, nameInQuestion, callbackFunction){
    var result = false;
    for(var i = 0; i < namesArray.length; i++){
      if(namesArray[i] === nameInQuestion){
        result = true;
      }
    }
    callbackFunction(result);
  }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

    //Code Here for uniq
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var uniq = function (namesArray, callbackFunction) { 
 for (var i = namesArray.length - 1; i >= 0; i--) {
   if (namesArray.lastIndexOf(namesArray[i], -1) !== i) {
     namesArray.splice(i, 1);
   }
 }
 callbackFunction(namesArray);
}

uniq(names, function(uniqArr){
 console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

//or

var uniq = function(namesArray, callbackFunction){
  for (var i = namesArray.length - 1; i >= 0; i--) {
    var count = 0;
    for (var ii = namesArray.length - 1; ii >= 0; ii--) {
      if(namesArray[ii] === namesArray[i]){
        count++;
      }
    };
    if(count > 1){
      namesArray.splice(i,1);
    }
  };
  callbackFunction(namesArray);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

//or

var uniq = function(namesArray, callbackFunction){
  var uniqueObject = {};
  var returnArray = [];
  for (var i = 0; i < namesArray.length; i++){
    if (namesArray[i] !== undefined) {
      uniqueObject[namesArray[i]] = namesArray[i]; //this could also be null;
    }
  }
  for(var key in uniqueObject){
    returnArray.push(key);
  }
  callbackFunction(returnArray);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

    //Code Here for each
var each = function(namesArray, callbackFunction){
  for (var i = namesArray.length - 1; i >= 0; i--) {
    callbackFunction(namesArray[i], i);
  };
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

 //code here for getUserById
 var getUserById = function(userArray, userId, callbackFunction){
    for (var i = userArray.length - 1; i >= 0; i--) {
      if(userArray[i].id === userId){
        callbackFunction(userArray[i]);
      }
    };
 }

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
