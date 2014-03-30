$('#jumpdown-about').click(function(e){
	e.preventDefault();
	console.log('test');
    $('html, body').animate({
    	 scrollTop: $('#jumpto-about').offset().top -90
        }, 500);
});

$('#jumpdown-work').click(function(e){
	e.preventDefault();
	console.log('test');
    $('html, body').animate({
    	 scrollTop: $('#jumpto-work').offset().top -90
        }, 500);
});

$('#jumpdown-work2').click(function(e){
	e.preventDefault();
	console.log('test');
    $('html, body').animate({
    	 scrollTop: $('#jumpto-work').offset().top -90
        }, 500);
});

$('#jumpup-intro').click(function(e){
	e.preventDefault();
	console.log('test');
    $('html, body').animate({
    	 scrollTop: $('#jumpto-intro').offset().top -90
        }, 500);
});