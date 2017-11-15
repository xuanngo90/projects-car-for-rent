var main_slider = function() {
 $('.slide-item').slick({
		dots: true,
		speed: 2000,
		autoplay: true,
		arrows: false
	});


 $('.main-list').slick({
	infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		// autoplay: true,
		speed: 2000,
		slickPrev: true,
		slickNext: true
	});
};

var btnseearch = function(){
	var abc = $('.searchform');
		var swidth = $(document).width();
		if (swidth > 768) {
				if (abc.hasClass('active')) {} else {
						abc.click(function(event) {
								event.stopPropagation();
								$(this).addClass('active');
								$('.searchform.active .btnsearch').click(function() {
										return false;
								});
								$(this).parents('body').addClass('formact');
						});
						$(document).click(function() {
								abc.removeClass('active');
								$('body').removeClass('formact');
						});
				};
		}
};

var temp  = function(){
	$('.ksg .input-group').click(function(){
		$(this).find('select').focus();
		// console.log( $(this).next('select') );
	})
}

$(document).ready(function(){
	main_slider();
	btnseearch();
	temp();
})