$(function() {
    //Cojo el boton insertar por su id, y le paso el evento onclick
    $("#inserta").on("click", function(event) {
        console.log($("table tr:last td").length);
        if ($("table tr:last td").length > 6) {
            $("table").append("<tr><td><img src='https://loremflickr.com/200/200'></td></tr>");
        } else if ($("table tr:last td").length == 0) {
            $("<td><img src='https://loremflickr.com/200/200'></td>").appendTo("tr");
        } else {
            $("<td><img src='https://loremflickr.com/200/200'></td>").insertAfter("td:last");
        } //Fin Si
    });

    //Cojo el boton eliminar por su id, y le paso el evento onclick
    $("#elimina").on("click", function(event) {
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