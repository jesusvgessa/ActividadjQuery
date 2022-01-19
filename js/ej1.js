$(document).ready(function() {
    //Cojo todos los parrafos de los elementos de la lista
    $("ul li label").hide();

    //Animaciones cuando entro en el elemento
    $("ul li").mouseover(function(event) {
        $(this).stop();
        $(this).clearQueue();
        $(this).children("label").show(1000);
        //Cojo el elemento que tiene el puntero encima, y sus hermanos
        $(this).animate({
            marginLeft: "2em"
        }, 1000);
    });

    //Animaciones cuando salgo del elemento
    $("ul li").mouseout(function(event) {
        $(this).finish();
        $(this).clearQueue();
        $(this).children("label").hide(1000);
        //Le pongo en su posicion inicial
        $(this).animate({
            marginLeft: "1em"
        }, 1000);
    });
});