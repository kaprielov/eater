
$(document).ready(function() {
	$(".gallery__item").fancybox();
	$.datepicker.regional['ru'] = {
    	closeText: 'Закрыть',
    	prevText: '&#x3c;Пред',
    	nextText: 'След&#x3e;',
    	currentText: 'Сегодня',
    	monthNames: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    	monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    	dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    	dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    	dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    	firstDay: 1,
    	isRTL: false
	};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
	$(".reservation-form__item--date").datepicker({
		dateFormat: "dd-mm-yy"
	});
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $(".reservation-form__item--select").selectmenu();
	$(".reservation-form__item--phone").mask("+7 (999) 999-9999", {placeholder: "_" });

	$(".personal-area__ico").click(function(){
        if($(".personal-area__menu").hasClass("active")){
            $(".personal-area__menu").removeClass("active")
        }
        else{
            $(".personal-area__menu").addClass("active");
        }
	});

	$('.page-up__ico').click( function(){
        $('html, body').animate({ scrollTop: $('.top-menu').offset().top }, 500);
        return false;
    });

    $('.nav_button').click(function(){
        $('#burger').toggleClass('active-sandwich');
        if($('#burger').hasClass('active-sandwich')){
            $('.nav-menu__list').addClass('active');
        }
        else{
            $('.nav-menu__list').removeClass('active');
        }
    });
});
