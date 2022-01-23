$(function() {
    //Cojo todos los p del article y los oculto
    $("article p").hide();

    //Le cambio el puntero a los titulos, para reflejar al usuario que puede pulsar.
    $("article h3").css("cursor", "pointer");

    //Ahora a cada titulo le añado un efecto distinto
    //Primer h3
    $("article h3").eq(0).on("click", function(event) {
        //El metodo toggle, que muestra si esta oculto, y viceversa
        $(this).siblings("p").toggle();
    })

    //Segundo h3
    $("article h3").eq(1).on("click", function(event) {
        //El metodo fadeToggle, que va apareciendo, y desapareciendo
        $(this).siblings("p").fadeToggle(1000);
        // $(this).siblings("p").fadeOut(3000);
    })

    //Tercer h3
    $("article h3").eq(2).on("click", function(event) {
        //El metodo slideToggle, con un movimiento de deslizamiento vertical
        $(this).siblings("p").slideToggle(1000);
    })

    //Cuarto h3
    $("article h3").eq(3).on("click", function(event) {
        //Pregunto si el primer parrafo esta oculto
        if ($(this).siblings("p:first").is(':visible')) {
            $(this).siblings("p").fadeOut();
        } else {
            $(this).siblings("p").slideDown();
        } //Fin Si
    })

    //Quinto h3
    $("article h3").eq(4).on("click", function(event) {
        //El metodo toggle, que muestra si esta oculto, y viceversa
        $(this).siblings("p").toggle(2000);
    })
})