$(function(){
    //Cojo el boton eliminar por su id, y le paso el evento onclick
    $("#inserta" ).on( "click", function( event ) {
        var celda = document.createElement("td");
        var imagen = document.createElement("img");
        // imagen.attr(src,"https://loremflickr.com/200/200");
        celda.appendChild(imagen);
        if($("table tr:last td").length>7){
            var filaNueva = document.createElement("tr");
            filaNueva.appendChild(celda);
        }else{
            $("table tr:last").appendChild(celda);
        }//Fin Si
      });
});