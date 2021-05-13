// JavaScript Document
//como siempre ejecutamos el codigo jQuery cuando la página este cargada

$(document).ready(function(){
    //el selector es una etiqueta input y aplicamos el evento focus es decir cunado
    // el foco este sobre el selector, cambiamos las propiedades de css que queramos
    //sobre el objeto tis que en este caso es input.
    //hacemos los mismo cuando pierde el foco blur para reestablecer las propiedades css
    //que teniamos al principio
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
