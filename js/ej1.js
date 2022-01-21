$(document).ready(function() {
    //Cojo todos los parrafos de los elementos de la lista
    $("p").hide();

    //Animaciones cuando entro en el elemento
    $("li").mouseover(function(event) {
        // $(this).stop();
        // $(this).clearQueue();
        $(this).children("p").show(1000);
        //Cojo el elemento que tiene el puntero encima
        $(this).animate({
            marginLeft: "6em"
        }, 1000);
    });

    //Animaciones cuando salgo del elemento
    $("li").mouseout(function(event) {
        $(this).children("p").hide(1000);
        //Le pongo en su posicion inicial
        $(this).animate({
            marginLeft: "4em"
        }, 1000);
    });
});