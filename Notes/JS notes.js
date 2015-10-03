//function expressions 
//the variable is being assigned an anonymous function.
var foo = function(){
	
}

//function declaration
function foo(){
	
}

var arr = ['a','b','c']
arr[0]; //this will give us 'a'

//loops
/*
for loop
while loop
do..while loop


foreach****???
forin ***???



*/

//for loop
/* for loop. 
three parts to a for loop. the iterator (count), the true or false statement, the incrementor 

*/
for(var i = 0; i > arr.length; i++){

}

//while loop
var b = 0;
while(b < 5){
	console.log('hi');
	b++;
}



//when you assign an array to another variable both variables point to the array.
var arr = [1,2,3,4,5]
arr.pop(); //removes and returns the last item from the array
arr.push(###); //adds to the end of the array
arr.shift(); //adds to the front of the array
arr.unshift(); //removes from the front of the array
arr.slice();  //allows you to make a copy of the array or you can copy part of the array.(does not modify the original array)
var arr2 = arr.slice(0,1); //slice will start at 0 and 1 is the number of items that you are removing
var arr3 = arr2.splice(0,1) //splice takes from the arr2 and inserts into arr3 

arr.indexOf(3) //indexOf returns the index of the item if the item doesn't exist then it returns -1