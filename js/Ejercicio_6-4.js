// JavaScript Document
$(document).ready(function() {
    // cuando se cargue la pagina se ocultara la lista a una velocidad de 600 milisegundos
    $("#nav li ul").hide(600);
    //el selector es la lista con el id nav y al pasar el raton sobre ella se ejucutaran la primera
    //funcion de este evento en este caso se mostrara la lista no ordenada con un efecto
    //de bajada y sobre cada item de la lista se cambiara su color de fondo
    $('#nav li').hover(function (){
            $(this).find('ul').slideDown(1000);
            $(this).css("background-color", "blue");
            },
     //cuando no este el raton sobre la lista se ejecutara la segunda funcion de este evento
     // en este caso la funcion ocultara la lista desordenada con un efecto de subida slideup
     // y mantendra su color de fondo original de la hoja de estilos
        function (){
        $(this).find('ul').slideUp();
        $(this).css("background-color", "#555555");
        });
})
     //he relenizado los metodos para hacerlos mas visibles




