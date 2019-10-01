$(document).ready(function () {
	//Поэкранная прокрутка
	if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $('div').is('#fullPage')) {
		$('#fullPage').fullpage({
		    sectionSelector: '.vertical-scrolling',
		    controlArrows: false,
		    onLeave: function(index, nextIndex, direction) {
		    	$('.number-screen').removeClass('number-screen-1 number-screen-2 number-screen-3 number-screen-4').addClass('number-screen-' + nextIndex);
		    }
		});
	}

	//Открытие меню
	$('.menu').on('click touch', function() {
    	$('article.full-menu').fadeIn();
  	});
  	$('.close-menu').on('click touch', function() {
    	$('article.full-menu').fadeOut();
  	});

  	$('.service-item').on('click touch', function() {
    	$('.sub-items').slideToggle();
    	$('.service-item').toggleClass('open');
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

	//Для анимации в инпутах
	[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
	  	// in case the input is already filled..
	  	if( inputEl.value.trim() !== '' ) {
	  	    classie.add( inputEl.parentNode, 'input--filled' );
	  	}
	
	  	// events:
	  	inputEl.addEventListener( 'focus', onInputFocus );
	  	inputEl.addEventListener( 'blur', onInputBlur );
	});
	function onInputFocus( ev ) {
	  	classie.add( ev.target.parentNode, 'input--filled' );
	}

	function onInputBlur( ev ) {
	  	if( ev.target.value.trim() === '' ) {
	  		classie.remove( ev.target.parentNode, 'input--filled' );
	  	}
	}

	//Для поля "Описание заказа"
	$("textarea").focus(function() {
		$(this).attr('placeholder', "");
	}).blur(function() {
		if ($(this).val() == "") {
			$(this).attr('placeholder', "Описание заказа");
		}
	});
});