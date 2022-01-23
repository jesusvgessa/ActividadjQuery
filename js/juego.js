//Variables globales
var turno = 0; //Contador de turnos

$(function() {
    //Reinicio los marcadores
    $("#wJug1").value = 0;
    $("#wJug2").value = 0;

    /* Cojo todas las celdas de la tabla, que serian las casillas
    y le añado el evento onClick, que cambiara el fondo de la casilla */
    $("table td").each(function() {
        $(this).on("click", function() {
            //Compruebo si la celda tiene imagen
            if ($(this).children("img").length == 0) {
                //Depende de si es turno par o impar
                if (turno % 2 == 0) {
                    //Añado la foto
                    $(this).append("<img src='../../img/" + $('input:radio[name=avatar1]:checked').val() + ".jpg' style='opacity:0;width:0'>");
                    $(this).children().animate({
                        opacity: "1",
                        width: "1.8em"
                    }, 1000);
                    $("#turnoJug1").css("background", "white");
                    $("#turnoJug2").css("background", "#333");
                } else {
                    $(this).append("<img src='../../img/" + $('input:radio[name=avatar2]:checked').val() + ".jpg' style='opacity:0;width:0'>");
                    $(this).children().animate({
                        opacity: "1",
                        width: "1.8em"
                    }, 1000);
                    $("#turnoJug2").css("background", "white");
                    $("#turnoJug1").css("background", "#333");
                } //Fin Si

                //Compruebo si termina la partida
                if (victoria()) {
                    $("#finPartida").show();
                    if (turno % 2 == 0) {
                        $("#resultado").text("Enhorabuena. Gana " + $('input:radio[name=avatar1]:checked').val());
                    } else {
                        $("#resultado").text("Enhorabuena. Gana " + $('input:radio[name=avatar2]:checked').val());
                    }
                    $("#resultado").css("background", "green");
                } else if (turno > 8) {
                    $("#finPartida").show();
                    $("#resultado").text("EMPATE");
                    $("#resultado").css("background", "grey");
                }

                //Sumo turno
                turno++;
            } //Fin Si
        });
    });

    function victoria() {
        //Compruebo las casillas, comprobando el tres en raya, y si el primero de estos esta definido.
        if ($("table td").eq(0).children("img").attr("src") == $("table td").eq(1).children("img").attr("src") && $("table td").eq(0).children("img").attr("src") == $("table td").eq(2).children("img").attr("src") && $("table td").eq(0).children("img").attr("src")) {
            return true;
        } else if (
            $("table td").eq(3).children("img").attr("src") == $("table td").eq(4).children("img").attr("src") && $("table td").eq(3).children("img").attr("src") == $("table td").eq(5).children("img").attr("src") && $("table td").eq(3).children("img").attr("src")) {
            return true;
        } else if (
            $("table td").eq(6).children("img").attr("src") == $("table td").eq(7).children("img").attr("src") && $("table td").eq(6).children("img").attr("src") == $("table td").eq(8).children("img").attr("src") && $("table td").eq(6).children("img").attr("src")) {
            return true;
        } else if ($("table td").eq(0).children("img").attr("src") == $("table td").eq(3).children("img").attr("src") && $("table td").eq(0).children("img").attr("src") == $("table td").eq(6).children("img").attr("src") && $("table td").eq(0).children("img").attr("src")) {
            return true;
        } else if (
            $("table td").eq(1).children("img").attr("src") == $("table td").eq(4).children("img").attr("src") && $("table td").eq(1).children("img").attr("src") == $("table td").eq(7).children("img").attr("src") && $("table td").eq(1).children("img").attr("src")) {
            return true;
        } else if (
            $("table td").eq(2).children("img").attr("src") == $("table td").eq(5).children("img").attr("src") && $("table td").eq(2).children("img").attr("src") == $("table td").eq(8).children("img").attr("src") && $("table td").eq(2).children("img").attr("src")) {
            return true;
        } else if (
            $("table td").eq(0).children("img").attr("src") == $("table td").eq(4).children("img").attr("src") && $("table td").eq(0).children("img").attr("src") == $("table td").eq(8).children("img").attr("src") && $("table td").eq(0).children("img").attr("src")) {
            return true;
        } else if (
            $("table td").eq(2).children("img").attr("src") == $("table td").eq(4).children("img").attr("src") && $("table td").eq(2).children("img").attr("src") == $("table td").eq(6).children("img").attr("src") && $("table td").eq(2).children("img").attr("src")) {
            return true;
        } else {
            return false;
        } //Fin Si
    }

    //Le doy la funcion de resetear al boton revancha
    $("#otraPartida").on("click", function() {
        //Cambio marcador:
        if ((turno - 1) % 2 == 0) {
            $("#wJug1").text(Number($("#wJug1").text()) + 1);
        } else {
            $("#wJug2").text(Number($("#wJug2").text()) + 1);
        }

        //Vuelvo a ocultar el fin de partida
        $("#finPartida").hide();

        //Reinicio los marcadores de las celdas y las variables
        turno = 0;
        $("table td").each(function() {
            $(this).children().remove();
        });
    });
});