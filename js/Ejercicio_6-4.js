// JavaScript Document
$(document).ready(function() {
    $("#nav li ul").hide();
    $('#nav li').hover(function (){
            $(this).find('ul').slideDown();
            $(this).css("background-color", "blue");

    },
        function (){
        $(this).find('ul').hide();
        $(this).css("background-color", "#555555");
        });
})





