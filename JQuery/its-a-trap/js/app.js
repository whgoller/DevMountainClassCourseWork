// Hide trap sign 
// When user clicks on image, reveal tap sign.

//wrapping the document. ready around all jQuery code to prevent jquery from running before the page is ready and loaded
// $('') is the universal selector for jquery //tells the browser to use jquery
// . is a class selector
// # is an id selector

//the .warning is the class of the element that is going to be manipulated. 
//the . after the $('.warning') is calling a jquey method.

//to select the warning class tag 
$(document).ready(function(){
	$('.warning').hide(); 	
	//if you want the warning to show after a little bit of time you chain.
	// try not to chain too much if you can help it.
	//example:
	$('.warning').hide().show();

	// Capture click on image
	$('.image').on('click', function(){
		console.log('sweet!');
		$('.warning').toggle('slow'); //use toggle to show and then hide te warning div
		//$('.warning').show('slow');  //slow will tell the function show to animate at 600 milliseconds, vs fast witch will render ayt 200 milliseconds.
	});	

	//this is the same as above but using the click method.
	// $('.image').click(function(){
	// 	console.log('sweet!');
	// 	$('.warning').show('slow');
	// });	


});