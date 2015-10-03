//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  var inner = outer();

//Once you do that, invoke inner.

  inner();



//Next problem

var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.
  var number = '435-215-9248';
  var myfunc = callFriend();
  myfunc(number);


//Next Problem

/*
  Write a function called makeCounter that makes the following code work properly.
*/

  var makeCounter = function(){
    num = 1;
    function count(){
      console.log(num++);
    }
    return count;

  }
  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem

/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second arguments that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/
/*What the above is really trying to say with the above instructions. 
  Write a function that accepts another function as the argument and returns a new function that will invoke the original argument.
  that will allow the argument function to only be invoked once.
  Once the above function is complete. Make a copy that can be modified. Modify the outerfunction by adding a second argument that will allow the original argument to be 
  invoked N number of times. After the argument function has been called N number of times console.log('STAHHP');
*/


var outerfunction = function(callback){
  var count = 0;
  return function inner(){
    if(count < 1){      
        callback();  
    }
    count++;
  }
}


var outerfunction = function(callback, nTimes){
  var count = 0;
  var maxCall = nTimes;
  if(maxCall > count){
    return function inner(){
      if(count < maxCall){      
        callback();  
      }
      count++;
      if(maxCall+1 === count){
        console.log('STAHHP');
      }
    }; 
  }
}

var mycall = outerfunction(function(){console.log("Hello World!")}, 5);
mycall();
mycall();
mycall();
mycall();
mycall();
mycall();






//additional solution
var fn = function(cb, n){
  return cb(n);
}

var callbackFn = function(n){
  return function(){
    n--;
    if(n >= 1){  //the if could also be (n > 0)
      console.log('weeee');
    } else {
      console.log('stop');
    }
  }
}

var inner = fn(callbackFn,3);
inner();
inner();
inner();
inner();

