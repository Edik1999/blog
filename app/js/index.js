$("#menuBtn").click(function(){
    $(".menu").toggleClass("menu_active");
    $("#menuBtn").removeClass("menu_active");
    $(".content").toggleClass("content_active");
});
