/* Declare and Define the functions here that will make the function calls below work properly */
var first = function(namesArray, callBackFunction){
  var fName = namesArray[0];
  callBackFunction(fName);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var last = function(namesArray, callBackFunction){
  var lName = namesArray[namesArray.length -1];
  callBackFunction(lName);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.
var contains = function(name, namesArray, callBackFunction){
  var inArray = false;
  for(var i = 0; i < namesArray.length; i++){
    if(name === namesArray[i]){
      inArray = true;
    }
  }
  callBackFunction(inArray);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var map = function(numArray, callBackFunction){
  var newArray = [];
  for(var i = 0; i < numArray.length; i++){
    newArray.push(callBackFunction(numArray[i]));
  }
  return newArray;
}

var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var uniq = function(namesArray, callBackFunction){
  var myObj = {};
  var myArray = [];
  for (var i = 0; i < namesArray.length; i++) {
    if(namesArray[i] !== 'undefined'){
      myObj[namesArray[i]] = null;
    }
  }
  for(var key in myObj){
    myArray.push(key);
  }
  callBackFunction(myArray);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var each = function(namesArray, callBackFunction){
  for(var i = 0; i < namesArray.length; i++){
    callBackFunction(namesArray[i], i);
  }
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var getUserById = function(neededId, usersArray, callBackFunction){
  for(var i = 0; i < usersArray.length; i++){
    if(usersArray[i].id === neededId){
      callBackFunction(usersArray[i]);
    }
  }
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
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var find = function(numArray, callBackFunction){
  var count = 0;
  var num = 0;
  for(var i = 0; i < numArray.length; i++){
    if(count < 1){
      if(numArray[i] % 2 === 0){
        num = numArray[i];
        count++;
      }
    }
  }
  callBackFunction(num);
}

//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
// find(numbers, function(num){ 

//   return num; //should return 2
// })
console.log(find(numbers, function(num){ 
  console.log(num);
  return num; //should return 2
})
);




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var find = function(numArray, callBackFunction){
  for(var i = 0; i < numArray.length; i++){
    if(callBackFunction(numArray[i])){
      return numArray[i];
    }
  }
}

//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
});

