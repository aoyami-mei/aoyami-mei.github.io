
$(".bottom-form, .right-calc form").submit(function (event) {
    var $this = $(this);
    if ($this.find('input[name="name"]').val() == "")
    {
			$.noticeAdd({
				text: 'Представьтесь, пожалуйста',
				stay: false
			});
    } 
	else if ($this.find('input[name="phone"]').val() == "")
    {
         $.noticeAdd({
				text: 'Как с вами связаться?',
				stay: false
			});
    } 
	else
    {
		$this.find('input[name="name"]').removeClass("error_input");
        $this.find('input[name="phone"]').removeClass("error_input");
        var postForm = {
            'name': $this.find('input[name="name"]').val(), //Имя
            'phone': $this.find('input[name="phone"]').val(), //Телефон
            'email': $this.find('input[name="email"]').val(), //Робот
            'area': $this.find('input[name="area"]').val(), //прощадь помещения
            'hight': $this.find('input[name="hight"]').val() //средняя высота пола
        };
		$this.fadeIn(1000).html('<center><img src="/images/loader.gif" alt=""></center>');
		
        $.post("/feedback.php", {'value': postForm}, function (data) {
			$this.fadeIn(1000).html('');
            $this.html('<p class="success">Заявка принята, мы свяжемся с Вами в ближайшее время!</p>');
        });
    }
    event.preventDefault();
});