//Create an Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  var Animal = function(species, name, legs, color, food){
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
  }


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  var person = function(name, age, height, gender){
    var thePerson = {};
    thePerson.name = name;
    thePerson.age = age;
    thePerson.height = height;
    thePerson.gender = gender;
    return thePerson;
  }


//Create a animal array and a person array.

  var animalArray = [];
  var personArray = [];


//Create two instances of Animal and push those into your animal array
  var a1 = new Animal('Cat','Bamboo', 4, 'Blue', ['fish', 'meat']);
  var a2 = new Animal('Dog', 'Meika', 4, 'Black', ['grain', 'meat']);
  animalArray.push(a1, a2);


//Create two instances of person and push those into your person array.

  var p1 = new person('John',28, '7 ft', 'male');
  var p2 = new person('Kevin', 5, '3 ft', 'male');
  personArray.push(p1, p2);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  Animal.prototype.eat = function(){
    var randomIndex = Math.floor(Math.random() * (this.food.length));
    alert(randomIndex);
    alert(this.name + ' ate ' + this.food[randomIndex]);
  }


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
  //no because its not an object its a variable.



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  It creates a new instance of the class.

  2) What's a good way to describe the keyword 'this'
  this is the argument that is passed into the parameter.

  3) Can a normal function which creates an object and then returns that object use the prototype?
  yes

  4) What happens if you forget to use 'new' when calling a constructor?
  you will get an error.
*/