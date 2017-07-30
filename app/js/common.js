$(function() {


	// $('.gallery__wrap').imagesLoaded( function() {
 //   		$('.gallery__wrap').masonry({
 //   			collumnWidth: 200,
	//   		itemSelector: '.gallery__item',
	//   		percentPosition: true,
	//   		horizontalOrder: true,
	//   		gutter: 19
	// 	});
	// });


	$('.collection__slider').slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  prevArrow: '<img class="left-arrow" src="../img/slider/arrow-left.png"/>',
	  nextArrow: '<img class="right-arrow" src="../img/slider/arrow-right.png"/>',
	  autoplay: true,
	  autoplaySpeed: 2000
	});

	$(".sandwich, .nav__list").click(function() {
    	$(".sandwich").toggleClass("active");
    	$('.nav__list').slideToggle();

    	$(window).resize(function() {
    		var windowWidth = $(window).width();
    		if (windowWidth > 767 && $('.nav__list').is(':hidden')) {
    			$('.nav__list').removeAttr('style');
    		}
    	});
	});

});
