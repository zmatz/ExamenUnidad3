$(document).ready(function() {
		//Regulas Expresions Objects
		//patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto.
		var bfRegex;
		var $panelChats = $('.barraChat').isotope({
		  filter: function() {
		    return bfRegex ? $(this).text().match( bfRegex ) : true;
		  }
		});

		var $buscaFiltra = $('.buscaFiltra').keyup( debounce( function() {
		  bfRegex = new RegExp( $buscaFiltra.val(), 'gi' ); 
		  $panelChats.isotope();
		}, 200 ) );

		function debounce( fn, threshold ) {
		  var timeout;
		  return function debounced() {
		    if ( timeout ) {
		      clearTimeout( timeout );
		    }
		    function delayed() {
		      fn();
		      timeout = null;
		    }
		    timeout = setTimeout( delayed, threshold || 100 );
		  }
		}

		textarea_Usuario.value = "";

		//al hacer click en un otro chat se limpia la ventana de conversacion
		$( '.barraChat' ).click(function() {		
		var ventana = document.getElementById("idContactChat");
		
		while (ventana.firstChild) {
    	ventana.removeChild(ventana.firstChild);
		}

		//aqui se haria un show del objeto guardado
 
		});//termina .click


			var d = new Date()
	    	var hr = d.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

	    //cuando presiono la tecla enter/return inicia 
		$("#nuevo_Mensaje").keypress(function(e) {
    	if(e.which == 13) {
    		var message = $('input').val();

    	$('.contactChat').append('<div class="user_Msj" id="idUser_Msj">' + '<p>' + message + '</p>'+ '<p class="hrjs">' + hr + '</p>' + '</div>');

  		nuevo_Mensaje.value = ""; //borrar el input

		$(".contactChat").scrollTop($(".contactChat")[0].scrollHeight); //scroll to the pixel 0 del contenedor

    }


	});

	

}); //termina document ready

/*
/de aqui para abajo puro borrador y apuntes


//esto va fuera del $(document)ready

//en donde guarda las conversaciones para que al hacer remove no se pierdan, se guardan en un arreglo

conversaciones.push(mensaje)

var mensajes = [
	{
		persona: "";
		mensaje: "";
		hora: "";
	},
	{
		persona: "";
		mensaje: "";
		hora
	},
	{
		persona: "";
		mensaje: "";
		hora: "";
	}
	
]

var conversacion = 'raymy '; //esto es el header de la ventana de conversacion, 
//el header lo vamos a cambiar con query:
//el header es un parrafo con el nombre del contacto por ejempo
$('#nuevo_Msj').text();

//esto va dentro del ready
for (var  i = 0; i < mensajes.length; i++) {
	var temp = mensajes [i];

	if (conversacion ==temp.persona) {
		$('#contenedor').append(temp.persona);
		$('#contenedor').append(temp.mensaje);

	}
}

*/
