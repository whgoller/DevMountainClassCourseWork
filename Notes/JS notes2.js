// To create a deep copy to work with 
arr = [1,2];
arr3 = arr.slice();


var x = 5;
var arr = [1,2,3,4,5];
var foo = function(){
	console.log("hello!");
};

//bar is an object
var bar = {};


//xint is the key and x is the value
bar.xint = x;
//ourArray is the key and arr is the value
b.ourArray = arr;
//method is the key name and food is the value
bar.method = food;

//objects store things using key value pairs


//new key word.   Typically the new key word is used in constructors...
var myArr = new Array();
var myArr2 = []; //

var myObj = new object();
var myObj2 = {};

//example:
var myObj = {}
myObj.x = 5;
console.log(myObj.x);
myObj.foo = function(){
	console.log('hi');
};

myObj.foo();

//an object
var myObj = {}
myObj.a = 5;
myObj.b = 1;
myObj.c = 3;
myObj.d = 4;

console.log(myObj.d);

//how to loop through an object
for(var i in myObj){
	console.log(i); //prints the key names
}

for(var i in myObj){
	console.log(myObj[i]); //prints the values
}


//example create object and create key value pairs for the object
var user = {};
user.name = 'ben';
user.email = 's.benjen@adsfdf';
user.address = '401 w......';

//how to delete a key
delete user.name;


bracket notation
example
var x = "myKey";

var obj = {};
obj.myKey = "...";
obj["myKey"] = "...";
obj[x] = "...";









//read about how hashtables work....
//garbage collection
//ben neslson 