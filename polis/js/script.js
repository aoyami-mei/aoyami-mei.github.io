$(document).ready(function () {
	// Высчитываем высоту тени в шапке
	var heightHeader = $('header').height();
	$('.shadow-block').height(heightHeader);

	$('.slider-diplomas').slick({
		slidesToShow: 7,
		slidesToScroll: 7,
		infinite: false,
		dots: true,
		arrows: true,
		prevArrow: $('#prevArrow-diplom'),
		nextArrow: $('#nextArrow-diplom'),
		responsive: [ 
			{ breakpoint: 770,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{ breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	});

 	$('.slider-for').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		fade: true,
  		asNavFor: '.slider-nav',
  		prevArrow: $('#prevArrow-good'),
		nextArrow: $('#nextArrow-good'),
		infinite: false
	});
	$('.slider-nav').slick({
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		asNavFor: '.slider-for',
  		dots: false,
  		focusOnSelect: true,
  		arrows: false,
		infinite: false,
		focusOnSelect: true
	});
});

//Открытие меню
	$('.item-cart').on('click touch', function() {
		$( ".block-cart" ).toggle( "fast", function() {});
	});

//Маска телефона
  	$("input[type='phone']").mask("+7 (000) 000-00-00");

  	$("input[type='phone']").focus(function() {
    	if (!$(this).val()) {
    		$(this).val("+7 (");
    	}
	}).blur(function() {
		if ($(this).val() == "+7 (") {
			$(this).val('');
		}
   		$(this).attr('placeholder', "+7 ( _ _ _ ) _ _ _ – _ _ – _ _ ");
	});