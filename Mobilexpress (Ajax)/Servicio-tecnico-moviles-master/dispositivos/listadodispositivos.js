$("#divfrmlistadodispositivos").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmListadoDispositivos")[0].reset();
		
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

document.getElementById("listadoDispositivos").addEventListener("click",comprobarListadoDispositivos,false);
document.frmListadoDispositivos.volver.addEventListener("click",volverListadoDispositivos,false);

function volverListadoDispositivos(){
	$("#divfrmlistadodispositivos").dialog("close");
	volverListado();
}

function reiniciarValidacionesListadoDispositivos(){
	document.frmListadoDispositivos.reset();
	document.frmListadoDispositivos.garantiaDispositivo.style.background = "white";
}

function comprobarListadoDispositivos(){
    //guardo el parametro del filtro    
	var sDatos = document.frmListadoDispositivos.garantiaDispositivo.value;

	
	//llamadaAjaxListadoParametros("dispositivos/listadoDispositivos.php",sDatos);
	// $.post("clientes/altacliente.php", sDatos, respuestaAltaCliente, 'json');
	

	if(sDatos == "S" || sDatos == "s"){
		$("#listados").load("dispositivos/listadoDispositivos0.php");
	}
	else{
		if(sDatos == "N" || sDatos == "n"){
			$("#listados").load("dispositivos/listadoDispositivos1.php");
		}
		else{
			$("#listados").load("dispositivos/listadoDispositivos2.php");
		}
	}
	$("#divfrmlistadodispositivos").dialog("close");
}
	
	
