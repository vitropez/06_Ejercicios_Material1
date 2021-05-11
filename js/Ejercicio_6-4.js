// JavaScript Document
$(document).ready(function() {
    $("#nav li ul").hide(600);
    $('#nav li').hover(function (){
            $(this).find('ul').slideDown(1000);
            $(this).css("background-color", "blue");
            },
        function (){
        $(this).find('ul').slideUp();
        $(this).css("background-color", "#555555");
        });
})





