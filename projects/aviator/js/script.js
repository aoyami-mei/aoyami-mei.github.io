$(document).ready(function(){
  	$('.slider-main').slick({
		slidesToShow: 1.2,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		arrows: true,
		prevArrow: $('#prevArrow'),
		nextArrow: $('#nextArrow'),
		autoplay: false,
		autoplaySpeed: 5000,
		responsive: [
    		{
    		  breakpoint: 576,
    		  settings: {
    		    arrows: false
    		  }
    		}
    	],
		customPaging: function (slider, i)
		{
			return '-   ' + (i + 1) + ' / ' + slider.slideCount + '   -';
		},
		appendDots:$('.pagination')
	});
	$('.slider-row').height($('.slider-main').height());

	$('.double-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		arrows: true,
		prevArrow: $('#prevArrow-double'),
		nextArrow: $('#nextArrow-double'),
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
    		{
    		  breakpoint: 1024,
    		  settings: {
    		    slidesToShow: 1,
    		    slidesToScroll: 1
    		  }
    		}
    	]
	});

	$('.slider-photo').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		arrows: true,
		prevArrow: $('#prevArrow-working'),
		nextArrow: $('#nextArrow-working'),
		autoplay: true,
		autoplaySpeed: 5000,
		asNavFor: '.slider-for'
	});

	$('.slider-text').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: true,
		prevArrow: $('#prevArrow-working'),
		nextArrow: $('#nextArrow-working'),
		asNavFor: '.slider-nav',
		customPaging: function (slider, i)
		{
			return '<span class="current-page">0' + (i + 1) + '</span><span class="count-pages"> / 0' + slider.slideCount + '</span>';
		},
		appendDots:$('.pagination-text')
	});

	new WOW().init();

	$(".scroll-menu").on("click", function() {
    	var elementClick = $(this).attr("href"), destination = $(elementClick).offset().top;
    	$("html,body").animate({
    	    scrollTop: destination
    	}, 1000);
    return false;
	});

	$(".scroll-top").on("click", function() {
	    $("html, body").animate({
	        scrollTop: 0
	    }, 1e3);
	    return false;
	});

	$("input[name='phone']").mask("+7 (000) 000-00-00");

	if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		var onTop = 'no';
		var screed_top = $('.screed').offset().top;
		var screed_height = $('.screed').height();
		var image_height = $('.image-fix img').height();
		$('.place-screed').height(image_height + (image_height - $('.screed-content').height()) );
		$('.place-screed').css({paddingBottom: image_height - $('.screed-content').height()});
		var screed_content_height = $('.screed-content').height();
		$('.screed-content').css({top: ($('.image-fix').height() - $('.screed-content').height())});
	}
	$(window).on("scroll", function() {
	    if ($(window).height() / 2 < $(window).scrollTop()) {
	        $(".scroll-top").addClass("active");
	    } else {
	        $(".scroll-top").removeClass("active");
	    }
	    if ($(window).scrollTop() > 0 ) {
	        $(".fix-menu").addClass("fix");
	    } else {
	        $(".fix-menu").removeClass("fix");
	    }
	    if ($(window).scrollTop() > 0 ) {
	        $(".logo").addClass("fix");
	    } else {
	        $(".logo").removeClass("fix");
	    }
	    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			if ($(window).scrollTop() >= screed_top && $(window).scrollTop() <= (screed_top + screed_height - screed_content_height)) {
		    	$('.image-fix').addClass('fixed');
		    } else {
		    	$('.image-fix').removeClass('fixed');
		    }
		    if ($(window).scrollTop() <= (screed_top + screed_height - screed_height)) {
		    	$('.image-fix img').css({position: 'absolute', top: screed_top, left: '50%'});
		    }
		    if ($(window).scrollTop() >= screed_top) {
		    	$('.image-fix img').css({position: 'absolute', top: screed_top + screed_height - screed_content_height, left: '50%'});
		    }
	  	}
	});

	$('#semi-dry-bg').css({top: $('#semi-dry').offset().top}).height($('#semi-dry').height());

	$('.open-slidebar-left').click(function(e) {
		$('.slidebar-left').toggleClass('open');
	})
	$('.button-close-slidebar-left').click(function(e) {
		$('.slidebar-left').removeClass('open');
	})

	$('.open-slidebar-right').click(function(e) {
		$('.slidebar-right').toggleClass('open');
	})
	$('.button-close-slidebar-right').click(function(e) {
		$('.slidebar-right').removeClass('open');
	})

	$('.gray-block').height($('.gray-block').width() * 0.9);

});