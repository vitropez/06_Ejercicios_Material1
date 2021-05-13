// JavaScript Document
$(document).ready(function() {
    //el selector es la etiqueta HTML con clase answer y se ocutara tan pronto se cargue la
    // pagina aplicando el metodo hide
    $(".answer").hide();
    //seleccionamos los elementos h2 y sobre ellos aplicamos el evento click.
    //si este elemnto esta oculto is:hidden la funcion aplicara el metos slidedown
    //que lo hara visible con un efecto de bajada y cambiara el atributo de this que es
    // el signo de la respuesta por un (-)
    $(".main h2").click(function () {
        if( $(this).next(".answer").is(":hidden")){
            $(this).next('.answer').slideDown(600);
            $(this).find("img").attr("src", "img/close.png");
   // si el objeto this esta visible lo ocultar con el metodo hiden y cambiara el atributo
   // de la imagen con signo(-) por el signo(+)
        } else {
            $(this).next('.answer').hide(600);
            $(this).find("img").attr("src", "img/open.png");

        }
    });
});

//he relentizado los metodos slideDown y hide a 600 milisegundos



