// JavaScript Document
//hacemos que el desarrollo de jQuery se ejecute cuando la pagina estea cargada
$(document).ready(function(){
    //cojemos como selector la imagen con id DONALD y aplicamos el evento click
    //en el objeto this que es la imagen y cambiamos su atributo src por otra imagen
    //hacemos lo mismo en los sucesibos eventos dbclick,mouseover y mouseout
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



