$(function() {
    //Cojo el boton insertar por su id, y le paso el evento onclick
    $("#inserta").on("click", function(event) {
        //Pregunto el numero de celdas que hay en la fila, para ver si tengo que añadir una nueva
        //Añado la foto con una opacidad 0, y luego le añado animacion
        if ($("table tr:last td").length > 6) {
            $("table").append("<tr><td><img src='https://loremflickr.com/200/200' style='opacity:0'></td></tr>");
        } else if ($("table tr:last td").length == 0) {
            $("<td><img src='https://loremflickr.com/200/200' style='opacity:0'></td>").appendTo("tr");
        } else {
            $("<td><img src='https://loremflickr.com/200/200' style='opacity:0'></td>").insertAfter("td:last");
        } //Fin Si
        $("img:last").animate({
            opacity: "1"
        }, 1000);
    });

    //Cojo el boton eliminar por su id, y le paso el evento onclick
    $("#elimina").on("click", function(event) {
        //Le meto la animacion para que desaparezca lentamente
        $("img:last").animate({
            opacity: 0
        }, 1000, function() {
            // La funcion se realiza cuando termina la animacion
            if ($("table tr:last td").length == 1) {
                $("td:last").remove();
                if ($("table tr").length > 1) {
                    $("tr:last").remove();
                } //Fin Si
            } else {
                $("td:last").remove();
            } //Fin Si
        });
    });
});