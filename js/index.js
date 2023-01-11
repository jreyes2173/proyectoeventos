// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var string;
var eventos2;
var eventos1=[];

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function (resultado) {

  //Guarda el resultado en variables
     eventos1=resultado.eventos;

  //Clasifica los eventos segun la fecha actual del JSON
  function eventoValido(eventos2) {
  var futuros = eventos2.filter(x => x.fecha.getTime() >
                fechaActual.getTime());
  var pasados = eventos2.filter(x => x.fecha.getTime() <=
                fechaActual.getTime());

  //Ordena los eventos segun la fecha (los mas cercanos primero)
  futuros = futuros.sort((a, b) => {
    if (a.fecha.getTime() > b.fecha.getTime()) {
        return 1;
    }
    if (a.fecha.getTime() < b.fecha.getTime()) {
        return -1;
    }
    return 0;
})

  //Extrae solo dos eventos
  
  //Ordena los eventos segun la fecha (los mas cercanos primero)
  pasados = pasados.sort((a, b) => {
    if (a.fecha.getTime() > b.fecha.getTime()) {
        return -1;
    }
    if (a.fecha.getTime() < b.fecha.getTime()) {
        return 1;
    }
    return 0;
  })
}
  //Extrae solo dos eventos

  //Crea un string que contenga el HTML que describe el detalle del evento
  var html = ""

  //Recorre el arreglo y concatena el HTML para cada evento
  for (var j = 0; j < 3; j++) {
    html += `
   <tr  >  <td class="tabla" class="d-none d-lg-table-cell">${eventos1[j].nombre}</td>
    <td>
      
    <td class="tabla" class="d-none d-lg-table-cell">${eventos1[j].fecha}"
      
      
    </td>
  </tr>
            `
  }  

  //Modifica el DOM agregando el html generado
  document.getElementById("proximos").innerHTML = html
  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

  function stringValido(string, largo){
    if (string == null || string == undefined){
    return false;
    }
    if (largo && string.trim().length < largo){
    return false;
    }
    return true;
    }
    

    function fechaValida(fecha,minimaFecha){
      if (fecha == null || fecha == undefined){
      return false;
      }
      if (minimaFecha && fecha.getTime() < minimaFecha.getTime()){
      return false;
      }
      return true;
      }
      
      var evento = {
        nombre: "Evento 1",
        descripcion: "Esto es una descripción",
        fecha: new Date(2018,10,1)
        };
        console.log(eventoValido(evento));
  })      

});
