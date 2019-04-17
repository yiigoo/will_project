$(document).ready(function(){
    // 第一屏tabs 切换
    $('.dir-select').selectpicker();

    // 第二屏滚动
    new Swiper('.swiper-container-page-2', {
        slidesPerView: 3,
        spaceBetween: 16,
        autoplay: true ,
        loop: true ,
        navigation: {
            nextEl: '.icon-swiper-arrow-right',
            prevEl: '.icon-swiper-arrow-left',
        },
    });

    // 第三屏滚动
    new Swiper('.swiper-container-page-3', {
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: true ,
        loop: true ,
        pagination: {
            el: '.swiper-pagination-page-3',
            clickable: true,
        },
    });

    // 首页滚动屏
    $(function(){
        $(".index-footer").hide()
        var pageSize = $(".full-page-item").length
        
        var currentIndex = 0
        var isScroll = false
        function reset(){
            if ( currentIndex == pageSize - 1 ){
                $(".index-footer").fadeIn()
                $(".global-scroll").fadeOut()
            }else{
                $(".index-footer").fadeOut()
                $(".global-scroll").fadeIn()
            }
            isScroll = true
            setTimeout(function(){
                isScroll = false
            },900)
            if ( currentIndex >= pageSize ){
                currentIndex = 0;
            }
            $(".full-page-item").removeClass("is-current").removeClass("is-before").removeClass("is-after").addClass("page-tanstion")
            $(".full-page-item").addClass("page-tanstion")
            for (let index = 0; index < pageSize; index++) {
                if( index < currentIndex){
                    $(".full-page-item").eq(index).addClass("is-before")
                }else if ( index == currentIndex ){
                    $(".full-page-item").eq(index).addClass("is-current")
                }else{
                    $(".full-page-item").eq(index).addClass("is-after")
                }
            }
            $(".full-page-nav span").removeClass("active").eq(currentIndex).addClass("active")
            setTimeout(function(){
                $(".full-page-item").eq(currentIndex).removeClass("page-tanstion")
                
            } ,400)
        }
        $(".is-current").removeClass("page-tanstion")

        $("#global-scroll-arrow").on("click", function(){
            if ( !isScroll ){
                currentIndex ++;
                reset(currentIndex)
            }
        })
        $(".full-page-nav span").on("click", function(){
            if ( $(this).hasClass("active") ){
                return false ;
            }
            if ( !isScroll ){
                currentIndex = $(this).index()
                reset(currentIndex)
                
            }
        })
        $(".home-pager").on('mousewheel', function(event, delta) {
            if ( !isScroll ){
                if ( delta > 0 ){ // 向上滚动
                    if ( currentIndex > 0 ){
                        currentIndex -- ;
                        reset(currentIndex)
                    }
                }else{ // 向下滚动
                    if ( currentIndex < pageSize - 1 ){
                        currentIndex ++ ;
                        reset(currentIndex)
                    }else{
                        currentIndex = 0;
                        reset(currentIndex)
                    }
                }
            }
            return false;  
        });
    })
})