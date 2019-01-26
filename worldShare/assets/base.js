$.showLoading = function(){
    var html ='<div id="loading-md">' + 
        '<div class="bg-shadow"></div>' + 
        '<div class="img loading-img"><img src="images/gif-loading.gif" alt=""></div>' + 
        '</div>';
    $("body").append(html)
}
$.hideLoading = function(){
    $("#loading-md").remove()
}