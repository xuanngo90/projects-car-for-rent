var main_slider = function () {
	if($('.slide-item').length>0){
		$('.slide-item').slick({
			dots: true,
			speed: 2000,
			autoplay: true,
			arrows: false
		});
	};

	if($('.main-list').length>0){
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
	

	if($('#imageGallery').length>0){
		$('#imageGallery').lightSlider({
			gallery:true,
			item:1,
			loop:true,
			thumbItem:18,
			slideMargin:0,
			enableDrag: false,
			currentPagerPosition:'left',
			onSliderLoad: function(el) {
				el.lightGallery({
					selector: '#imageGallery .lslide'
				});
			}   
		});  
	};
};

var btnseearch = function () {
	var abc = $('.searchform');
	var swidth = $(document).width();
	if (swidth > 768) {
		if (abc.hasClass('active')) { } else {
			abc.click(function (event) {
				event.stopPropagation();
				$(this).addClass('active');
				$('.searchform.active .btnsearch').click(function () {
					return false;
				});
				$(this).parents('body').addClass('formact');
			});
			$(document).click(function () {
				abc.removeClass('active');
				$('body').removeClass('formact');
			});
		};
	}
};

var temp = function () {
	$('.ksg .input-group').click(function () {
		$(this).find('select').focus();
		// console.log( $(this).next('select') );
	})
}

$(document).ready(function () {
	main_slider();
	btnseearch();
	temp();
})