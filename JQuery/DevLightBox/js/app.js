//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

 //declare a jquery variable to store an element  
//this is just an example because you would never really want to do this for the body.
//var $body = $('body');
//this can be thought of as "him or her..." it is refering to what we just called.


$(document).ready(function(){

	// Capture click event on image
	// Prevent new page from opening onclick //we want to prevent the default behavior of the a tag.
	var $overlay = $('<div id="overlay"> </div>');
	var $image = $('<img />');
	var $caption = $('<p> </p>');

	$('body').append($overlay);  //adding the overlay to the body. it currently wont show because the css says display none for the overlay id.
	$overlay.append($image);  //add image to the overlay.
	$overlay.append($caption); //add caption to image.

	// Shows overlay when user clicks on image
	$('#imageGallery a').on('click', function(event) {
		event.preventDefault();
		console.log('event prevented, yo.'); //use to test if the function worked.

		var imageLocation = $(this).attr('href');
		console.log(imageLocation); //see if getting the href worked.

		$($image).attr('src', imageLocation);  //this can also be written like this $image.attr('src', imageLocation); because the $image is a variable.

		var captionText = $(this).children('img').attr('alt');
		console.log(captionText); //see if the img alt attribute is grabbed.

		$caption.text(captionText);

		$($overlay).show(); //this call will modify the overlay css to display: show.


	});

	// Hides overlay when user clicks on it
	$($overlay).on('click', function(){
		$($overlay).hide();

	});















});





