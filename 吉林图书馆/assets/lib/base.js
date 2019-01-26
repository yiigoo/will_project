$(document).ready(function(){
	if($(".side-menu").length){
		$(window).scroll(function(){
			var scrollTop = $(this).scrollTop();
			if(scrollTop > 80){
				$(".side-menu").css({
					position:'fixed',
					top: 0
				})
			}else{
				$(".side-menu").css({
					position:'absolute',
					top: 80
				})
			}
		})
	}
})