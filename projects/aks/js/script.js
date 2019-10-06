$(document).ready(function () {
	// Минимальная высота контента
	var heightHeader = $('header').height();
	var heightFooter = $('footer').height();
	var heightHeaderFooter = heightHeader + heightFooter;
	$('main').css('min-height', 'calc(100vh - ' + heightHeaderFooter + 'px)');

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

	//Движение элементов на баннере
	function initParallax () {
    var $window = $(window);
    var centerOffsetX;
    var centerOffsetY;
    $(document).on('mousemove', onParallaxMove);
    function onParallaxMove (e) {
      var $parallaxItem = $(this).find('.js-parallax-item');
      centerOffsetX = e.clientX - ($window.width() / 2);
      centerOffsetY = e.clientY - ($window.height() / 2);
      $parallaxItem.each(function(_, item) {
        var parallaxOffset = $(this).data('parallax-offset');
        $(this).css({
          transform: 'translate(' + (centerOffsetX * parallaxOffset) + 'px,' + (centerOffsetY * parallaxOffset) + 'px)'
        });         
      });
    }
  }
  if ($(window).width() > 880) {
      initParallax();
  }

  //Выдвижение поиска в синей плашке
  $('nav ul .search').click(function() {
  	$(this).addClass('focus');
  	$(this).siblings().addClass('hide');
  });

  $(document).on("click", function(event) {
  	if($(event.target).parents('nav').length > 0) {
	    return false;
	  }
    $('nav ul .search').removeClass('focus');
    $('nav ul .search').siblings().removeClass('hide');
  });

  //Слайдер-баннер на главной
  $('.index-slider').slick({
	 slidesToShow: 1,
	 autoplay: 5,
	 arrows: true,
	 dots: false,
	 prevArrow: $('#prevArrow-index'),
	 nextArrow: $('#nextArrow-index')
	});

	//Слайдер брендов на главной
  $('.brands-slider').slick({
		slidesToShow: 5,
		arrows: true,
		dots: false,
		prevArrow: $('#prevArrow-brands'),
		nextArrow: $('#nextArrow-brands'),
    responsive: [
      { breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      { breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
	});

	//Слайдер в товаре
	$('.slider-for').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
  	prevArrow: $('#prevArrow-good'),
		nextArrow: $('#nextArrow-good'),
  	fade: true,
  	asNavFor: '.slider-nav',
		infinite: false
	});
	$('.slider-nav').slick({
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	asNavFor: '.slider-for',
  	dots: false,
  	focusOnSelect: true,
  	arrows: true,
		infinite: false,
		focusOnSelect: true
	});

  //Смена каталога товаров на бренды
  if ($(window).width() > 580) {
  $('.button-catalog').click(function() {
  	$('.button-catalog').addClass('active');
  	$('.button-brand').removeClass('active');
  	$('.list-menu-cat').addClass('active');
  	$('.list-menu-brand').removeClass('active');
  });

  $('.button-brand').click(function() {
  	$('.button-brand').addClass('active');
  	$('.button-catalog').removeClass('active');
  	$('.list-menu-brand').addClass('active');
  	$('.list-menu-cat').removeClass('active');
  });
  }

  //Открытие подменю
  $('.list-menu-cat li.have-submenu').click(function() {
  	$(this).toggleClass('active');
  	$(this).children('.submenu').toggleClass('active');
  	var heightSubmenu = $(this).children('.submenu').height();
  	$(this).css('height', 63 + heightSubmenu + 'px');
  	if (!$(this).hasClass('active')) {
  		$(this).css('height', 40 + 'px');
  	}
  });

  //Всплывашки корзины в трёх местах
  $(function(){
  	$('.big-display-basket').hover(function(){
  	  $('.big-display-basket .mini-cart').show();
    },
    function(){
  	  $('.big-display-basket .mini-cart').hide();
   	});
 	});

 	$(function(){
  	$('.header-fixed .basket').hover(function(){
     $('.header-fixed .basket .mini-cart').show();
   	},
   	function(){
    	$('.header-fixed .basket .mini-cart').hide();
   	});
 	});

 	$(function(){
  	$('header .mini-display-basket').hover(function(){
      $('header .mini-display-basket .mini-cart').show();
    },
   	function(){
    	$('header .mini-display-basket .mini-cart').hide();
   	});
 	});

 	//Переключение вида каталога
  if ($(window).width() > 580) {
 	  $('.one-col').click(function() {
	  	if ($(this).hasClass('active')) {
	  	} else {
	  		$(this).addClass('active');
	  		$(this).siblings('.four-col').removeClass('active');
	  		$('.good').addClass('one-col-good');
	  		$('.good').removeClass('four-col-good');
	  	}
	  });

	  $('.four-col').click(function() {
	  	if ($(this).hasClass('active')) {
	  	} else {
	  		$(this).addClass('active');
	  		$(this).siblings('.one-col').removeClass('active');
	  		$('.good').addClass('four-col-good');
	  		$('.good').removeClass('one-col-good');
	  	}
	  });
  }

  if ($(window).width() < 580) {
    $('.one-col').click(function() {
      if ($(this).hasClass('active')) {
      } else {
        $(this).addClass('active');
        $(this).siblings('.four-col').removeClass('active');
        $('.good').addClass('one-col-mobile-good');
        $('.good').removeClass('four-col-mobile-good');
      }
    });

    $('.four-col').click(function() {
      if ($(this).hasClass('active')) {
      } else {
        $(this).addClass('active');
        $(this).siblings('.one-col').removeClass('active');
        $('.good').addClass('four-col-mobile-good');
        $('.good').removeClass('one-col-mobile-good');
      }
    });
  }

	//Стилизация селектов
  $('.select-catalog').styler({
    onSelectClosed: function() {  
      console.log($(this));
      //$.cookie("catalogSort", $(this).data('value'), {path: "/"});
      //location.reload();
    }
  });
	$('.select-order').styler();

	// Для видео на странице новости
	$('.video-new').click(function() {
		$(this).addClass('play');
	});
	$('.video-new:before').click(function() {
		$('.video-good').addClass('play');
	});
	$('.video-new:after').click(function() {
		$('.video-good').addClass('play');
	});

  // Убираем класс в header для адаптива
  if ($(window).width() < 1200) {
    $('header').removeClass('header-index');
  }

  // Добавляем класс товарам на мобильниках
  if ($(window).width() < 580) {
    $('.good').addClass('one-col-mobile-good');
    $('.list-menu-cat li').removeClass('have-submenu');
    $('.view .four-col').removeClass('active');
    $('.view .one-col').addClass('active');
  }

  if ($(window).width() < 580) {
    $('.list-menu-cat').removeClass('active');
    $('.button-catalog').removeClass('active');
    $('.list-menu-brand').removeClass('active');
    $('.button-brand').removeClass('active');

    $('.button-catalog').click(function() {
      $('.button-catalog').toggleClass('active');
      $('.button-brand').removeClass('active');
      $('.list-menu-cat').toggleClass('active');
      $('.list-menu-brand').removeClass('active');
    });

    $('.button-brand').click(function() {
      $('.button-brand').toggleClass('active');
      $('.button-catalog').removeClass('active');
      $('.list-menu-brand').toggleClass('active');
      $('.list-menu-cat').removeClass('active');
    });
  }

  // Открытие меню на мобильнике
  $('.burger-mobile').click(function() {
    $(".mobile-menu").toggleClass('active');
  });

  $('.cookie_popup .button_ok').click(function(){
    $(this).parent().fadeOut();
    $.cookie("i_agree", "1", {path: "/"});
    return false;
  });

});

//Фиксированная шапка
$(window).scroll(function(){
	var top = $(document).scrollTop();
	if (top > 150) {
		$(".header-fixed").addClass('active');
    $(".mobile-header").addClass('mobile-header-fixed');
	} else {
		$(".header-fixed").removeClass('active');
    $(".mobile-header").removeClass('mobile-header-fixed');
	}
});

/*------------------ Листание цифр в инпутах в карточках товаров  -----------------------*/ 
$.fn.spinner= function() {
  this.each(function() {
    var el = $(this);
    var id = $(this).data('id');
    //el.wrap('<div class="spinner"></div>');     
    //el.before('<a class="s-down">-</a>');
    //el.after('<a class="s-up">+</a>');
    el.parent().on('click', '.s-down', function () {
      if (el.val() > 1) {
        el.val( function(i, oldval) { 
          newval = parseInt(oldval) - 1;
          //refrash_count_in_basket(id, newval);
          return newval; 
        });
      }
      /*
      else // если убрали меньше 1, тогда надо удалить из корзины
      {
        el.val( function(i, oldval) { 
          refrash_delete_in_basket(id);
          return 1; 
        });
      }
      */
      bakset_preview_update();
    });
    el.parent().on('click', '.s-up', function () {  
      el.val( function(i, oldval) { 
        newval = parseInt(oldval) + 1;
        //refrash_count_in_basket(id, newval);
        return newval; 
      });  
      bakset_preview_update();
    });
  });
};
    
  
  /*------------------Листание цифр в инпуте в корзине -----------------------*/    
$.fn.spinnerorder = function() {
  this.each(function() {
    var el = $(this);
    var id = $(this).data('id');
    //el.wrap('<div class="spinner"></div>');     
    //el.before('<a class="s-down">-</a>');
    //el.after('<a class="s-up">+</a>');
    el.parent().on('click', '.s-down', function () {
      if (el.val() > 1) {
        el.val( function(i, oldval) { 
          return --oldval; 
        });
      }
      else
      {
        $('.content-cart .item_'+id).addClass('disabled');  
        el.val(0);  
        var basket = decodeURI($.cookie("basket")); 
        basketArray = basket.split(",");
        basket = '';
        for(var i=0; i<basketArray.length-1;i++) {
          goodsId = basketArray[i].split(":");
          if ( goodsId[0]!=el.data("id")) basket+= goodsId[0] + ':' + goodsId[1] + ':' + goodsId[2] + ':' + goodsId[3] + ',';
        }
        totalCountGoods =  basketArray.length-1; 
        $.cookie("basket", basket, {path: "/"});        
      }
      basket_full_update();
      bakset_preview_update();  
    });
    el.parent().on('click', '.s-up', function () {
      if (el.val()==0) {
        basket = decodeURI($.cookie("basket"));
        basket += el.data("id") + ':1:' + el.data("price") + ':' + el.data("variant_id") + ',';
        $.cookie("basket", basket, {path: "/"});
      }
      el.val( function(i, oldval) { return ++oldval; });  
      if ($('.content-cart').length) $('.content-cart .item_'+id).removeClass('disabled');  
      basket_full_update();
      bakset_preview_update();
    });
  });
};

$('.good-button .spinner-input, .description-right .spinner-input').spinner();
$('.good-in-cart_quality .spinner-input').spinnerorder();