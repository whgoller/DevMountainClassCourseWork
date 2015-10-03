//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

  var favoriteThings = {
    band: 'Imagine Dragons',
    food: 'Pizza',
    person: 'Merlin',
    book: 'Angels and Demons',
    movie: 'LOTR',
    holiday: 'Christmas'
  };

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  favoriteThings.car = 'Escape';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

  favoriteThings.food = 'Lettuce';
  favoriteThings.book = '50 Shades of Gray';

//Now, alert your favorite person, then alert your favorite book.

  alert(favoriteThings.person);
  alert(favoriteThings.book);




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. 
//If it's not truthy, remove it from the object. hint: 'delete'.

  for(var key in user){
    if(!user[key]){
      delete user[key];
    }
  }

//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  user.name = 'Wendy';
  user.username = 'whgoller'

//Now console.log your object and make sure it looks right.

  console.log(user);




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//create an empty object called methodCollection. 

  var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. 
//One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

  methodCollection.alertHello = function(){
    alert('hello');
  }

  methodCollection.logHello = function(){
    console.log('hello');
  }

//Now call your alertHello and logHello methods. 

  methodCollection.alertHello();
  methodCollection.logHello();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string,
// and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

var voweler = function(myString){
  var myObject = {};
  var aNum = 0;
  var eNum = 0;
  var iNum = 0;
  var oNum = 0;
  var uNum = 0;
  for(var count = 0; count < myString.length; count++){
    switch(myString[count]){
      case 'a': 
        aNum++;
        myObject.a = aNum;
        break;
      case 'e': 
        eNum++;
        myObject.e = eNum;
        break;
      case 'i': 
        iNum++;
        myObject.i = iNum;
        break;
      case 'o':
        oNum++;
        myObject.o = oNum;
        break;
      case 'u': 
        uNum++;
        myObject.u = uNum;
        break;
    }
  }

  return myObject;
}


voweler("This is a test");


//or 
var voweler = function(myString){
  var vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }
  var counter = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  }
  for(var i = 0; i < myString.length; i++){
    if(vowels[myString[i]]){
      counter[myString[i]]++;
    }
  }
  return counter;
}

voweler("This is a test");
