$(function(){
	$(document).ready( function() {
		//enabling stickUp on the '.navbar-wrapper' class
		if($('.side-nav').length){
			$('.side-nav').stickUp();
		}
		
		// footer 常用链接 显示更多
		$(".links").hover(function(){
			$(".links .icon-arrow-up").addClass("icon-arrow-down");
			$(".links .modal-show").show();
		},function(){
			$(".links .icon-arrow-up").removeClass("icon-arrow-down");
			$(".links .modal-show").hide();
		})

		var headerSearchVisible = false;
		// 搜索显示隐藏
		$("#search-toggle").on("click",function(){
			$(this).hide()
			$("#search-md").show();
			$("#search-md .header-search").addClass("search-header-active")
			setTimeout(function(){
				headerSearchVisible = true
			},300)
			$("#search-md input").focus();
		})

		// 点击其他地方隐藏搜索框
		$(document).on("click", function(ev) {
			var h = $(ev.target);
			if(headerSearchVisible){
				if (h.closest("#search-md .header-search").length == 0 && h.closest("#search-md .header-search").length != 1) {
					$("#search-toggle").show()
					$("#search-md").hide();
					$("#search-md .header-search").removeClass("search-header-active")
					headerSearchVisible = false
				}
			}
			
		});
	});
})
