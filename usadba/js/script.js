$(document).ready(function () {

// Слайдер на главной странице
	$('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: $('#prevArrow'),
		nextArrow: $('#nextArrow'),
		customPaging: function (slider, i)
		{
			return (i + 1) + ' / ' + slider.slideCount;
		},
		appendDots:$('.pagination')
	});

// Высота фона и карта в "Контактах" и на главной
	var heightContact = $('.section-contacts .contact-info').height();
	$('.green-background').innerHeight(heightContact + 40);
	$('.wrapper-map').innerHeight(heightContact + 40);

// Стили для header и footer на второстепенных страницах
	if ($('main').hasClass('second-page')) {
		$('header').css('border-bottom', '1px solid #000000');
		$('footer').css({'border-top':'1px solid #000000', 'background-color': '#ffffff'});
	}

// Минимальная высота контента
	var heightHeader = $('header').height();
	var heightFooter = $('footer').height();
	var heightHeaderFooter = heightHeader + heightFooter + 53;
	$('main').css('min-height', 'calc(100vh - ' + heightHeaderFooter + 'px)');
	
// Ширина зелёной линии в заголовках
	var widthTitle = $('.section-title h2').width();
	$('.section-title .green-line').innerWidth(1100 - widthTitle - 36 - 24);

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

//Переключение блоков "Экспозиции" и "Выставки"
	if ($('.exposition').hasClass('active')) {
		$('.exposition-content').css('display', 'flex');
	};

	if ($('.exhibition').hasClass('active')) {
		$('.exhibition-content').css('display', 'flex');
	};

	$('.exposition').click(function() {
		$(this).addClass('active');
		$('.exhibition').removeClass('active');
		$('.exposition-content').css('display', 'flex');
		$('.exhibition-content').css('display', 'none');
		if ($(window).width() < 576) {
			var centerEvent = $('.exposition-content .center-event').height();
			$('.exposition-content').css('padding-bottom', centerEvent + 80);
		}
	});

	$('.exhibition').click(function() {
		$(this).addClass('active');
		$('.exposition').removeClass('active');
		$('.exhibition-content').css('display', 'flex');
		$('.exposition-content').css('display', 'none');
		if ($(window).width() < 576) {
			var centerEvent = $('.exhibition-content .center-event').height();
			$('.exhibition-content').css('padding-bottom', centerEvent + 80);
		}
	});

//Рассчёт отступа для центральной экспозиции в мобильной версии
	if ($(window).width() < 576) {
		var centerEvent = $('.exposition-content .center-event').height();
		$('.exposition-content').css('padding-bottom', centerEvent + 80);
	}

	if ($(window).width() < 576) {
		var centerEvent = $('.exhibition-content .center-event').height();
		$('.exhibition-content').css('padding-bottom', centerEvent + 80);
	}

//Открытие меню
	$('.button-menu').on('click touch', function() {
    	$('.menu-desc').fadeIn();
	});
	  
  	$('.close-menu').on('click touch', function() {
    	$('.menu-desc').fadeOut();
  	});

  	$('.buttom-mobile-menu').on('click touch', function() {
		$('.menu-mobile').fadeIn();
	});
	  
  	$('.close-menu-mobile').on('click touch', function() {
    	$('.menu-mobile').fadeOut();
  	});

//-----------------Версия для слабовидящих---------------------

$('.vision_version').click(function(){
	if (!($('body').hasClass('impaired_version'))) $('body').addClass('impaired_version');
	else $('body').attr('class','');
	$(window).trigger('resize');
	return false;
})

$('#image_trigger').click(function(){
	$(window).trigger('resize');
    if (this.checked) {
        $('.impaired_version').addClass('no_pics');
    }
	else  $('.impaired_version').removeClass('no_pics');
}) 

$('.fontsize_selection li').click(function(){
	if ($(this).hasClass('font_size_large')) {
		$('body').removeClass('font_medium').addClass('font_large');
	}
	if ($(this).hasClass('font_size_medium')) {
		$('body').removeClass('font_large').addClass('font_medium');
	}
	
	if ($(this).hasClass('font_size_small')) {
		$('body').removeClass('font_large font_medium');
	}
});
	
});