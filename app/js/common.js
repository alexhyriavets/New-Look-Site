$(function() {


	$('.gallery__wrap').imagesLoaded( function() {
   		$('.gallery__wrap').masonry({
   			collumnWidth: 200,
	  		itemSelector: '.gallery__item',
	  		percentPosition: true,
	  		horizontalOrder: true,
	  		gutter: 19
		});
	});

});
