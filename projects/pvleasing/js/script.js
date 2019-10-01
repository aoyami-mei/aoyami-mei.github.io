window.hashName = window.location.hash;
window.location.hash = '';
$(window).on('load', function () {
  if (window.hashName) {
    $('html, body').animate({scrollTop: $(window.hashName).offset().top}, 1500, function () {
      window.location.hash = window.hashName;
    });
  }
  
  $(".truck").addClass("after-load");
  var time = 0;
  $(".wrapper-h1 h1, p.semibold").each(function () {
  	setTimeout ( () => {
  		$(this).addClass("animated slideInUp");
  	}, time);
  	time += 300;
  });
  setTimeout(() => {
  	$('body').removeClass('introducing').addClass('introduced');
  }, 2000);
  var body = $('body');
  var menu = $('#menu');
  $('#burger').mouseover(function () {
    $('#burger, li.menu').addClass('hovered');
  });
  $('li.menu').mouseover(function () {
    $('#burger, li.menu').addClass('hovered');
  });
  $('#burger, li.menu').mouseout( function () {
    $('#burger, li.menu').removeClass('hovered');
  });
  $('#burger, li.menu').click(function () {
  	if (body.hasClass('nav-open')) {
  		body.removeClass('nav-open').addClass('nav-closing')
  		//menu.removeClass('opened-menu').addClass('closed-menu');
  		menu.fadeOut(500);
  		setTimeout(() => {
  			body.removeClass('nav-closing').addClass('nav-closed');
  		}, 2000);
  	} else if (body.hasClass('nav-closed')) {
  		body.removeClass('nav-closed').addClass('nav-opening')
  		setTimeout(() => {
  			body.removeClass('nav-opening').addClass('nav-open');
  			menu.fadeIn(500);
  			//menu.removeClass('closed-menu').addClass('opened-menu');
  		}, 1200);
  	}
  });

});

$(window).on('load resize', function() {
  if ($(window).width() < 640) {
    $('.slider-progr-for-mobile:not(.slick-initialized)').slick({
      dots: false,
      infinite: true,
	    slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: $('.prevArrow-progr'),
			nextArrow: $('.nextArrow-progr')
    });
  } else {
    $(".slider-progr-for-mobile.slick-initialized").slick("unslick");
  }

  $('.content-in-ornament').each(function( index ) {
    var heightOrnament = $(this).outerHeight();
    $(this).parents('.ornament-text').find('.ornament').height(heightOrnament);
  });

  $('.caption-category').each(function() {
    $('#menu').css({ position: "absolute", visibility: "hidden", display: "block" });
    var width = $(this).outerWidth() + 5;
    $('#menu').css({ position: "", visibility: "", display: "" });
    $(this).parent().width(width);
  });


});

$(document).ready(function () {
  var heightTruck = $(".maps").height();
  $(".main-block").innerHeight(heightTruck - 48);

	let offset = $('#pseudo-burger').offset();
	$('#burger').offset(offset);

	$('.slider-fractions').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		dots: false,
		arrows: true,
		prevArrow: $('.prevArrow'),
		nextArrow: $('.nextArrow'),
    asNavFor: '.slider-nav'
	});
	$('.slider-fractions-mobile').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		dots: false,
		arrows: true,
		prevArrow: $('.prevArrow-mobile'),
		nextArrow: $('.nextArrow-mobile')
	});

  $('.slider-index').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    dots: false,
    arrows: true
  });

  var heightTruck = $(".slider-index .slick-slide.slick-current").height();
  $(".main-block").innerHeight(heightTruck - 48);

	$("input[name='phone']").mask("+7 (000) 000-00-00");

  $(".file-upload input[type=file]").change(function(){
    var filename = $(this).val().replace(/.*\\/, "");
    $("#filename").val(filename);
  });

  if (!String.prototype.trim) {
    (function() {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
          return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
    // in case the input is already filled..
    if( inputEl.value.trim() !== '' ) {
        classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--filled' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input--filled' );
    }
  }

  $(".button-mobile-menu").click(function() {
    $("article.mobile-menu").toggleClass("mobile-closed-menu");
    
    $("body").toggleClass("not-scroll");
  });

  $(".button-close").click(function() {
    $("article.mobile-menu").toggleClass("mobile-closed-menu");
    $("body").toggleClass("not-scroll");
  });

  $(".one-frequently-asked").click(function() {
    $(this).toggleClass("opened");
    var heightOrnament = $(this).parent().outerHeight();
    $(this).parents('.ornament-text').find('.ornament').height(heightOrnament);
  });

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('div.tabs-content ul').find('li.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  $(`ul.tabs__caption li a[href="#one"]`).click();
  if (this.location.hash) {
    $(`ul.tabs__caption li a[href="${this.location.hash}"]`).click();
  }

  $('.what-face select').change(function () {
    let index = $(this).find(':selected').data('index');
    $('#label-name span').addClass('hide');
    $('#label-name span').eq(index).removeClass('hide');
  });

  $('select.styled').styler();

  $('.magnific-popup-open').magnificPopup();

  $('#radio-choice-1').click(function () {
    $('#for-radio-choice-1').removeClass('hide');
    $('#for-radio-choice-1').hide();
    $('#for-radio-choice-2').show();
  });
  $('#radio-choice-2').click(function () {
    $('#for-radio-choice-1').removeClass('hide');
    $('#for-radio-choice-2').hide();
    $('#for-radio-choice-1').show();
  });

  $('.scroll-pane').jScrollPane();

  $(".hash-clicked").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.parallax-change').mouseover(function () {
    $('.parallax-mirror').eq(0).find('img:not(:eq(0))').remove();
    let original = $('.parallax-mirror').eq(0).find('img');
    let clone = $('.parallax-mirror').eq(0).find('img').clone();
    clone.attr('src', original.data('image-src'));
    clone.appendTo($('.parallax-mirror').eq(0));
    original.attr('src', $(this).data('image-src'));
    clone.animate({opacity: 0});
  });

});