var color = 'white';



$(document).ready(function(){
	$('.box').on('click', function(e){
		e.preventDefault();
		$(this).addClass(color);
	});

	$('.box').on('dblclick', function(e){
		e.preventDefault();
		$(this).removeClass(color);
	});

	$('#reset').on('click', function(e){
		e.preventDefault();
		$('.box').removeClass('white' 'red');
	});

	$('#red').on('click', function(e){
		e.preventDefault();
		color = 'red';
	});

	$('#green').on('click', function(e){
		e.preventDefault();
		color = 'green';
	});

});