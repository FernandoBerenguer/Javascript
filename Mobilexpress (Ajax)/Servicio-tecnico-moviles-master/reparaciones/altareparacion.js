// Creacion del dialogo
$("#divfrmaltareparacion").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmAltaReparacion")[0].reset();
		mostrarMenu();
    },
    closeOnEscape: false, // No se cierra con ESCAPE
    hide: {
        effect: "fold",
        duration: 1000
    },
	modal: true,
    show: "fold",
    width:"765px"
  /* buttons: [{
        text: "Aceptar",
        click: validar
    }, {
        text: "Volver",
        click: function() {
            $(this).dialog("close");
        }
    }]*/
});

cargarComboAltaReparaciones();
cargarComboAltaSolicitante();


document.getElementById("altaReparacion").addEventListener("click",validarAltaReparacion,false);
document.frmAltaReparacion.volver.addEventListener("click",volverAltaReparacion,false);

function volverAltaReparacion(){
	$("#divfrmaltareparacion").dialog("close");    	
}

function reiniciarValidacionesAltaReparacion(){
	document.frmAltaReparacion.reset();
	document.frmAltaReparacion.averiaReparacion.style.background = "white";	
	document.frmAltaReparacion.estadoReparacion.style.background = "white";	
	document.frmAltaReparacion.comentarioReparacion.style.background = "white";	
	document.frmAltaReparacion.repararDispositivoAlta.style.background = "white";
	document.frmAltaReparacion.solicitanteAlta.style.background = "white";
	document.frmAltaReparacion.idReparacion.style.background = "white";
}

function validarAltaReparacion(){
	var idReparacion = document.frmAltaReparacion.idReparacion.value.trim();
	var solicitante = document.frmAltaReparacion.solicitanteAlta.value.trim();
	var dispositivo = document.frmAltaReparacion.repararDispositivoAlta.value.trim();
	var averia = document.frmAltaReparacion.averiaReparacion.value.trim();	
	var estado = document.frmAltaReparacion.estadoReparacion.value.trim();	
	var comentarios = document.frmAltaReparacion.comentarioReparacion.value.trim();
	
	var errores = false;
	
	var expRegAveria = /^[a-zA-Z\s]{3,10}$/;
	var expRegEstado = /^[a-zA-Z\s]{3,10}$/;
	var expRegidReparacion = /^[0-9]{4}/;
	var expRegComentarios =  /^.{3,500}$/;
	
	
	//validaciones
	var sErrores = "";
	
	//Marca
	if (expRegidReparacion.test(idReparacion) == false){	
		errores = true;				
		document.frmAltaReparacion.idReparacion.focus(); //Este campo obtiene el foco		
		sErrores += "El campo ID reparacion debe contener entre 4 numeros\n";				
		document.frmAltaReparacion.idReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaReparacion.idReparacion.style.background = "white";	
	}
	
	if(document.frmAltaReparacion.repararDispositivoAlta.value ==""){
		sErrores += "Debe seleccionar 1 dispositivo\n";
		document.frmAltaReparacion.repararDispositivoAlta.style.background = "yellow";
	}
	else{
		document.frmAltaReparacion.repararDispositivoAlta.style.background = "white";
	}
	
	if(document.frmAltaReparacion.solicitanteAlta.value ==""){
		sErrores += "Debe seleccionar 1 solicitante\n";
		document.frmAltaReparacion.solicitanteAlta.style.background = "yellow";
	}
	else{
		document.frmAltaReparacion.solicitanteAlta.style.background = "white";
	}
	
	//Marca
	if (expRegAveria.test(averia) == false){	
		errores = true;				
		document.frmAltaReparacion.averiaReparacion.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Averia debe contener entre 3 y 10 letras\n";				
		document.frmAltaReparacion.averiaReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaReparacion.averiaReparacion.style.background = "white";	
	}
	
	//Estado
	if (expRegEstado.test(estado) == false){	
		errores = true;				
		document.frmAltaReparacion.estadoReparacion.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Estado debe contener entre 3 y 10 letras\n";				
		document.frmAltaReparacion.estadoReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaReparacion.estadoReparacion.style.background = "white";	
	}	
	
	//Comentarios
	if (expRegComentarios.test(comentarios) == false){	
		errores = true;				
		document.frmAltaReparacion.comentarioReparacion.focus(); //Este campo obtiene el foco		
		sErrores += 'El campo Comentario debe contener entre 3 y 500 caracteres\n';				
		document.frmAltaReparacion.comentarioReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaReparacion.comentarioReparacion.style.background = "white";	
	}		
	
	if(errores)
		alert(sErrores);
	else{
		//alta reparacion
	var sDatos = $("#frmAltaReparacion").serialize();

        $.post("reparaciones/altaReparacion.php", sDatos, respuestaAltaReparacion, 'json');

    }
}
    function respuestaAltaReparacion(oDatosDevueltos, sStatus, oAjax) {

    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) 
        {
            // Mensaje
            alert(oDatosDevueltos[1]);  
		// Como ha ido bien cierro el formulario
            volverAltaReparacion(); 			

        } 
    else 
        {
            alert(oDatosDevueltos[1]);
        }


    }		



function cargarComboAltaReparaciones(){
//con load
$("#repararDispositivoAlta").load("reparaciones/cargarComboAltaReparaciones.php");

}

function vaciarComboAltaReparaciones(){
$('#repararDispositivoAlta').each(function(){
          $('#repararDispositivoAlta option').remove();
      });
}


function cargarComboAltaSolicitante(){
//con load
$("#solicitanteAlta").load("reparaciones/cargarComboAltaSolicitante.php");

}

function vaciarComboAltaSolicitante(){
$('#solicitanteAlta').each(function(){
          $('#solicitanteAlta option').remove();
      });
}

