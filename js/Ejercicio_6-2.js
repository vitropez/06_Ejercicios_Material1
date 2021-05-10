// JavaScript Document


$(document).ready(function(){
    $("input").focus(function (){
        $(this).css({
            "background":"#E6E6E6",
            "border":"solid,2px,Blue",
            "color":"Red"
        });
    });
    $("input").blur(function (){
        $(this).css({
            "background":"#FFFFEE",
            "border":"solid,1px,Green",
            "color":"black"
        });
    });

})
