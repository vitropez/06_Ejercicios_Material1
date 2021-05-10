// JavaScript Document
$(document).ready(function() {
    $(".answer").hide();

    $(".main h2").click(function () {
        if( $(this).next(".answer").is(":hidden")){
            $(this).next('.answer').slideDown();
            $(this).find("img").attr("src", "img/close.png");

        } else {
            $(this).next('.answer').hide();
            $(this).find("img").attr("src", "img/open.png");

        }
    });
});





