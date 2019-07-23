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
});