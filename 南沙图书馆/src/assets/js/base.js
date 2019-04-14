$(document).ready(function(){
    $(function(){
        // 设置左边导航高度
        var globalHeight = $('.header').height() + $('.page-banner').height() + $('.footer').height()
        var mainHeight = $('.main').height()
        if ( mainHeight > $(window).height() - globalHeight ){
            $('.aside').css( { minHeight :mainHeight + 'px' } )
        }else{
            $('.aside').css( { minHeight : ( $(window).height() - globalHeight )+ 'px' } )
        }
        
        $(window).resize(function(){
            var mainHeight = $('.main').height()
            if ( mainHeight > $(window).height() - globalHeight ){
                $('.aside').css( { minHeight :mainHeight + 'px' } )
            }else{
                $('.aside').css( { minHeight : ( $(window).height() - globalHeight )+ 'px' } )
            }
        })

        // 设置tabs
        if( $(".site-tabs").length ){
             var next = $(".site-tabs").next()
             next.find(".panel").eq(0).show()
             $(".site-tabs li").on("click",function(){
                $(this).addClass("active").siblings().removeClass("active")
                next.find(".panel").hide().eq($(this).index()).show()
             })
        }

        // 左侧导航二级显示
        $('.aside li>a').on("click",function(){
            var next = $(this).next()
            if( next.length ){
                debugger
                if(next.eq(0).css("display") == 'none'){
                    next.eq(0).slideDown()
                }else{
                    next.eq(0).slideUp()
                }
            }
        })
    })
})