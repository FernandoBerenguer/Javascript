// Creacion del dialogo
$("#divfrmmodificarreparacion").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmModificarReparacion")[0].reset();
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
cargarComboModificarReparaciones();

document.getElementById("modificarReparacion").addEventListener("click",validarModificarReparacion,false);
document.frmModificarReparacion.volver.addEventListener("click",volverModificarReparacion,false);

function volverModificarReparacion(){
	$("#divfrmmodificarreparacion").dialog("close");    	
}

function reiniciarValidacionesModificarReparacion(){
	document.frmModificarReparacion.reset();
	document.frmModificarReparacion.averiaReparacion.style.background = "white";	
	document.frmModificarReparacion.comentarioReparacion.style.background = "white";	
	document.frmModificarReparacion.repararDispositivoModificar.style.background = "white";
}

function validarModificarReparacion(){
	var averia = document.frmModificarReparacion.averiaReparacion.value.trim();	
	var comentarios = document.frmModificarReparacion.comentarioReparacion.value.trim();
	var id = document.frmModificarReparacion.repararDispositivoModificar.value;
	
	var errores = false;
	
	var expRegAveria = /^[a-zA-Z\s]{3,10}$/;
	var expRegImporte = /^\d*[.]?\d{1,3}[€]$/;
	var expRegComentarios =  /^.{3,500}$/;
	
	
	//validaciones
	var sErrores = "";
	
	if(document.frmModificarReparacion.repararDispositivoModificar.value =="Lista de dispositivos en reparación"){
		sErrores += "Debe seleccionar 1 reparacion\n";
		document.frmModificarReparacion.repararDispositivoModificar.style.background = "yellow";
	}
	else{
		document.frmModificarReparacion.repararDispositivoModificar.style.background = "white";
	}
	
	//Marca
	if (expRegAveria.test(averia) == false){	
		errores = true;				
		document.frmModificarReparacion.averiaReparacion.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Averia debe contener entre 3 y 10 letras\n";				
		document.frmModificarReparacion.averiaReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarReparacion.averiaReparacion.style.background = "white";	
	}
	
	//Comentarios
	if (expRegComentarios.test(comentarios) == false){	
		errores = true;				
		document.frmModificarReparacion.comentarioReparacion.focus(); //Este campo obtiene el foco		
		sErrores += 'El campo Comentario debe contener entre 3 y 500 caracteres\n';				
		document.frmModificarReparacion.comentarioReparacion.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarReparacion.comentarioReparacion.style.background = "white";	
	}	
	
	if(errores)
		alert(sErrores);
	else{
		//modificarReparacion
		var sDatos = $("#frmModificarReparacion").serialize();

        $.post("reparaciones/modificarReparacion.php", sDatos, respuestaModificarReparacion, 'json');

    }
}
    function respuestaModificarReparacion(oDatosDevueltos, sStatus, oAjax) {

    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) 
        {
            // Mensaje
            alert(oDatosDevueltos[1]);  
		// Como ha ido bien cierro el formulario
          volverModificarReparacion();			

        } 
    else 
        {
            alert(oDatosDevueltos[1]);
        }


    }				



function cargarComboModificarReparaciones(){
//con load
$("#repararDispositivoModificar").load("reparaciones/cargarComboModificarReparaciones.php");
}



function vaciarComboModificarReparaciones(){
$('#repararDispositivoModificar').each(function(){
          $('#repararDispositivoModificar option').remove();
      });
}
