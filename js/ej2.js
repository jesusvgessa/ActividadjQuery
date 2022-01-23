$(function() {
    //Cojo el boton eliminar por su id, y le paso el evento onclick
    $("#inserta").on("click", function(event) {
        if ($("table tr:last td").length > 7) {
            $("table").append("<tr><td><img src='https://loremflickr.com/200/200'></td></tr>");
            console.log("nueva fila");
        } else if ($("table tr:last td").length == 0) {
            $("<td><img src='https://loremflickr.com/200/200'></td>").appendTo("tr");
            console.log("primera celda");
        } else {
            $("<td><img src='https://loremflickr.com/200/200'></td>").insertAfter("td:last");
            console.log("seguimos");
        } //Fin Si
    });
});