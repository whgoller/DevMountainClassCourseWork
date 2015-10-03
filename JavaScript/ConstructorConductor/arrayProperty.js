//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  String.prototype.reverse = function (){
  	var newString = "";
  	for (var i = this.length - 1; i >= 0; i--) {
  		newString = newString + this[i];
  	};
  	return newString;
  }

  var name = "This is a String.";
  name.reverse();

//or

  String.prototype.Reverse = function (){
  	return this.split('').reverse().join('');
  }

  var name = "This is a String.";
  name.Reverse();