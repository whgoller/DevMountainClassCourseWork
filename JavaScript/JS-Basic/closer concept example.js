//concept of closures 
// writing this way will allow the ability to call a function outside the scope without changing things
// the acct variable can not be changed but it can be "read" 
// this is not a realistic example....
var bank = function() {
	var acct = 42948;
	var insideFunction = function(){
	  console.log(acct);
	}
	return insideFunction;
}
var getAcct = bank();
getAcct();



//concept of closures 
// writing this way will allow the ability to call a function outside the scope without changing things
// the acct variable can not be changed but it can be "read" 
// this is a more realistic example....
// the user object would have been grabbed before.
var bank = function() {
	var acct = user.acctNumber;
	var insideFunction = function(){
	  console.log(acct);
	}
	return insideFunction;
}
var getAcct = bank();
getAcct();


//concept of closures 
// writing this way will allow the ability to call a function outside the scope without changing things
// the acct variable can not be changed but it can be "read" 
// this is a more realistic example....
// the user object would have been grabbed before.
var bank = function() {
	var acct = 428998;
	var address = 12321 W. Street Dr.;
	this.getAcct = function(){
	  console.log(acct);
	}
	this.getaddress = function(){
	  console.log(address);
	}
}
var getAcct = bank();
getAcct(); 
