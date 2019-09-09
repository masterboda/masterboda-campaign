$(document).ready(function() {

	//Кнопка догори
	$('.gotop').click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$(window).scroll(function(){
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		var top = $('.gotop');
		if(scrolled > 600){
			top.show(350);
		}
		else{
			top.hide(350);
		}
	});

});
