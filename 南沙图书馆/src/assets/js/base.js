$(document).ready(function(){
    $(function(){
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
    })
})