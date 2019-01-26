$(function(){
	FastClick.attach(document.body);
	var nav = $("#global-nav");
	$("#global-header-dir").on("click",function(){
		$(this).hide()
		$("#global-header-closed").show();
		nav.find(".bg").show();
		nav.find(".wrap").slideDown();
	})
	$("#global-header-closed,#global-nav .bg").on("click",function(){
		$("#global-header-dir").show();
		$(this).hide();
		$("#global-header-closed").hide();
		nav.find(".bg").hide();
		nav.find(".wrap").slideUp();
	})
	if($("#global-sub-nav").length){
		var sub_nav = $("#global-sub-nav");
		sub_nav.find(".more").on("click",function(){
			if($(this).hasClass("active")){
				sub_nav.find(".wrap").slideUp()
				$(this).removeClass("active")
			}else{
				sub_nav.find(".wrap").slideDown()
				$(this).addClass("active")
			}
		})
	}
})