$(document).ready(function () {
	//Подключаем для всплывашек
	$('.magnific-popup-open').magnificPopup();

	// Прикрепление файла в форме
	$('.add_file').click(function() {
		$('.file_input').click();
	 	$('.file_input').change(function(){
			var filename= $('.file_input').val();
			$('.add_file').html(filename);
			$('.add_file + span').hide();
			$('.add_file_block').addClass('filled');
	  	})
	  	return false;
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
   		$(this).attr('placeholder', "");
	});
	
	//Слайдер на главной
	$('.slider-diploms').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		arrows: true,
		dots: true,
		prevArrow: $('#prevArrow-diplom'),
		nextArrow: $('#nextArrow-diplom'),
		responsive: [
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '90px',
					slidesToShow: 1
				}
			}
		],
		customPaging: function (slider, i)
		{
			return '<span class="current-page">' + (i + 1) + '</span><span class="count-pages"> / ' + slider.slideCount + '</span>';
		},
		appendDots:$('.pagination-text')
	});

	//Слайдер в товаре
	$('.slider-for').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		fade: true,
  		asNavFor: '.slider-nav',
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

	//Переключение блоков в Каталоге
	if(!/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		if ($('.cat-group-1').hasClass('active')) {
			$('.content-cat-group-1').css('display', 'flex');
		};
	
		if ($('.cat-group-2').hasClass('active')) {
			$('.content-cat-group-2').css('display', 'flex');
		};
	
		$('.cat-group-1').click(function() {
			$(this).addClass('active');
			$('.cat-group-2').removeClass('active');
			$('.content-cat-group-1').css('display', 'flex');
			$('.content-cat-group-2').css('display', 'none');
		});
	
		$('.cat-group-2').click(function() {
			$(this).addClass('active');
			$('.cat-group-1').removeClass('active');
			$('.content-cat-group-2').css('display', 'flex');
			$('.content-cat-group-1').css('display', 'none');
		});
	}

	// Минимальная высота контента
	var heightHeader = $('header').height();
	var heightFooter = $('footer').height();
	var heightHeaderFooter = heightHeader + heightFooter + 90;
	$('main').css('min-height', 'calc(100vh - ' + heightHeaderFooter + 'px)');

	// Для видео на странице товара
	$('.video-good').click(function() {
		$(this).addClass('play');
	});
	$('.video-good:before').click(function() {
		$('.video-good').addClass('play');
	});
	$('.video-good:after').click(function() {
		$('.video-good').addClass('play');
	});

	// Для видео на странице производства
	$('.one-video-production').click(function() {
		$(this).addClass('play');
	});
	$('.one-video-production:before').click(function() {
		$('.one-video-production').addClass('play');
	});
	$('.one-video-production:after').click(function() {
		$('.one-video-production').addClass('play');
	});

	//Открытие мобильного меню
	$('.mobile-menu-button').on('click touch', function() {
    	$('.mobile-menu').fadeToggle();
	});
});