$(function() {
    //A cada imagen le añado el evento on blur
    $("li img").each(function() {
        $(this).on("mouseover", function() {
            console.log($(this).attr("src"));
            //Aumento el tamaño de la misma
            $(this).animate({
                width: "+=10px"
            }, 500);

            //Cambio la imagen principal
            $("#principal").animate({
                opacity: "0",
                width: "0"
            }, 1000);

            //Nueva src
            $("#principal").attr("src", $(this).attr("src"));

            /*Se cambia la foto antes de desaparecer, por lo que pruebo borrar la foto
            y añadirl despues con la src nueva, pero no me funciona */
            // $("#cuadroPrincipal").append("<img src='" + $(this).attr("src") + "' id='principal' style='opacity:0;width:0'>");

            $("#principal").animate({
                opacity: "1",
                width: "20em"
            }, 1000)
        });
        $(this).on("mouseout", function() {
            //le devuelvo el tamaño de la misma
            $(this).animate({
                width: "-=10px"
            }, 500);
        });
    });
});