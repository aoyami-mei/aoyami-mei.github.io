$(document).ready(function () {
	// Минимальная высота контента
	var heightHeader = $('header').height();
	var heightFooter = $('footer').height();
	var heightHeaderFooter = heightHeader + heightFooter + 1;
	$('main').css('min-height', 'calc(100vh - ' + heightHeaderFooter + 'px)');

	// Подключаем для всплывашек
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

	// Маска телефона
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

	// Всплывашки в шапке
	$('header .wrap-phone:not(a)').click(function() {
		$('header .phone').toggleClass('active');
		$('.hide-phone').toggleClass('active');
		$('.hide-basket').removeClass('active');
  	});

  	$('header .basket').click(function() {
		$(this).toggleClass('active');
		$('.hide-basket').toggleClass('active');
		$('.hide-phone').removeClass('active');
  	});

  	// Слайдер на главной
  	$('.index-slider').slick({
	 	slidesToShow: 1,
	 	autoplay: false,
	 	arrows: true,
	 	dots: true,
	 	prevArrow: $('#prevArrow-index'),
	 	nextArrow: $('#nextArrow-index'),
	 	appendDots:$('.pagination-main-slider')
	});

	// Слайдер акций на главной
  	$('.sale-slider').slick({
	 	slidesToShow: 3,
	 	slidesToScroll: 1,
	 	arrows: true,
	 	dots: false,
	 	prevArrow: $('#prevArrow-sale'),
	 	nextArrow: $('#nextArrow-sale'),
	 	centerMode: true,
	 	centerPadding: 0,
	 	responsive: [
	 		{ breakpoint: 900,
	 		  settings: {
	 		  	slidesToShow: 2,
	 		  	centerMode: false
	 		  }
	 		},
	 		{ breakpoint: 750,
	 		  settings: {
	 		  	slidesToShow: 1,
	 		  	arrows: false,
	 		  	centerMode: false
	 		  }
	 		}
	 	]
	});

	// Слайдер готовых букетов на главной
  	$('.bouquets-slider').slick({
	 	slidesToShow: 3,
	 	slidesToScroll: 3,
	 	arrows: true,
	 	dots: true,
	 	prevArrow: $('#prevArrow-bouquets'),
	 	nextArrow: $('#nextArrow-bouquets'),
	 	appendDots:$('.pagination-bouquets-slider'),
	 	responsive: [
	 		{ breakpoint: 900,
	 		  settings: {
	 		  	slidesToShow: 2,
	 		  	slidesToScroll: 1,
	 		  	centerMode: false
	 		  }
	 		},
	 		{ breakpoint: 750,
	 		  settings: {
	 		  	slidesToShow: 1,
	 		  	slidesToScroll: 1,
	 		  }
	 		}
	 	]
	});

	//Слайдер в товаре
	$('.slider-for').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		fade: true,
  		asNavFor: '.slider-nav',
		infinite: false
	});
	$('.slider-nav').slick({
  		slidesToShow: 5,
  		slidesToScroll: 1,
  		asNavFor: '.slider-for',
  		dots: false,
  		focusOnSelect: true,
  		arrows: false,
		infinite: false,
		focusOnSelect: true
	});

	// Открытие главного меню
	$('.btn-menu').click(function() {
		$('body').addClass('opacity');
		$('.opacity-all').addClass('active');
		$('.main-menu').addClass('active');
	});

	$('.close-main-menu').click(function() {
		$('body').removeClass('opacity');
		$('.opacity-all').removeClass('active');
		$('.main-menu').removeClass('active');
	});

	// Всплывашки фильтров
	$('.button-filter').click(function() {
		$(this).siblings('.list-filter').fadeToggle();
		$(this).toggleClass('active');
	});

	// Переключение вида в "Собери букет"
	$('.link-category-cat').click(function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('.variant-addition').addClass('active');
		$('.cat-addition').addClass('active');
	});

	// Стилизация селектов
	$('.select-order').styler();
	$('.select-flower').styler({
		onFormStyled: function () {
			$('.select-flower .jq-selectbox__dropdown li').each(function () {
				$(this).css({"background-image": 'url(' + $(this).data('img') + ') '});
			})
		}
	});
	$('.select-color').styler({
		onFormStyled: function () {
			$('.select-color .jq-selectbox__dropdown li').each(function () {
				$(this).css({"background-image": 'url(' + $(this).data('img') + ') '});
			})
		}
	});

	$('select.select-flower').change(function () {
		$('#photo-flower img').attr('src', $(this).find('option:selected').data('photo-flower'));
	})

	// Ползунок
	var $range = $("#quantity-range");
	$range.ionRangeSlider({
        min: 1,
        max: 201,
        from: 51,
        skin: false,
        onChange: function (data) {
            $('#quantity-number').val(data.from);
        }
    });

    let range = $range.data("ionRangeSlider");

    $('#quantity-number').change(function (event) {
    	range.update({
    		from: $(this).val()
    	});
    });

    // Для адаптива
    if ($(window).width() < 750) {
    	$('.good').removeClass('mini-good');
  	}
});