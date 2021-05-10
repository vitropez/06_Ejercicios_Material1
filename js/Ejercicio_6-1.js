// JavaScript Document
$(document).ready(function(){
    $("#Donald").click(function (){
        $(this).attr("src","img/Goofi_1.png");
    });
    $("#Donald").dblclick(function (){
        $(this).attr("src","img/Goofi_2.png");
    });
    $("#Donald").mouseover(function (){
        $(this).attr("src","img/Donald_2.png");
    });
    $("#Donald").mouseout(function (){
        $(this).attr("src","img/Donald_1.png");
    });
});



