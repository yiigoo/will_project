$(document).ready(function(){
    $(function(){
        var globalHeight = $('.header').height() + $('.page-banner').height() + $('.footer').height()
        $('.aside').css( { minHeight : ( $(window).height() - globalHeight )+ 'px' } )
        $(window).resize(function(){
            $('.aside').css( { minHeight : ( $(window).height() - globalHeight )+ 'px' } )
        })
    })
})