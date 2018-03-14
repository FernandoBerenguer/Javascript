// Creacion del dialogo
$("#divfrmaltadispositivo").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmAltaDispositivo")[0].reset();
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
document.getElementById("altaDispositivo").addEventListener("click",validarAltaDispositivo,false);
document.frmAltaDispositivo.volver.addEventListener("click",volverAltaDispositivo,false);

function volverAltaDispositivo(){
	$("#divfrmaltadispositivo").dialog("close");    	
}

function reiniciarValidacionesAltaDispositivo(){
	document.frmAltaDispositivo.reset();
    document.frmAltaDispositivo.idDispositivo.style.background = "white";
	document.frmAltaDispositivo.fechaSalidaDispositivo.style.background = "white";
	document.frmAltaDispositivo.fechaEntradaDispositivo.style.background = "white";
	document.frmAltaDispositivo.modeloDispositivo.style.background = "white";
	document.frmAltaDispositivo.marcaDispositivo.style.background = "white";	
}

function validarAltaDispositivo(){
    var id = document.frmAltaDispositivo.idDispositivo.value.trim();
	var marca = document.frmAltaDispositivo.marcaDispositivo.value.trim();
	var modelo = document.frmAltaDispositivo.modeloDispositivo.value.trim();
	var fechaEntrada = document.frmAltaDispositivo.fechaEntradaDispositivo.value.trim();
	var fechaSalida = document.frmAltaDispositivo.fechaSalidaDispositivo.value.trim();
	
    var rGarantia = document.frmAltaDispositivo.rbtGarantia.value;
	
	var errores = false;

	var expRegId = /^[a-zA-Z0-9]{4}$/;
	var expRegMarca = /^[a-zA-Z\s]{3,10}$/;
	var expRegModelo = /^[a-zA-Z0-9]{3,20}$/;
	var expRegFecha = /^\d{4}\-\d{2}\-\d{2}$/

	
	
	//validaciones
	var sErrores = "";

    //ID
	if (expRegId.test(id) == false){
		errores = true;
		document.frmAltaDispositivo.idDispositivo.focus();	//Este campo obtiene el foco
		sErrores += "El id debe contener 4 caracteres \n";
		document.frmAltaDispositivo.idDispositivo.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error
		document.frmAltaDispositivo.idDispositivo.style.background = "white";
	}

	//Marca
	if (expRegMarca.test(marca) == false){	
		errores = true;				
		document.frmAltaDispositivo.marcaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Marca debe contener entre 3 y 10 letras\n";				
		document.frmAltaDispositivo.marcaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaDispositivo.marcaDispositivo.style.background = "white";	
	}
	
	//Modelo
	if (expRegModelo.test(modelo) == false){	
		errores = true;				
		document.frmAltaDispositivo.modeloDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Modelo debe contener entre 3 y 20 letras o números\n";
		document.frmAltaDispositivo.modeloDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaDispositivo.modeloDispositivo.style.background = "white";
	}
	
	//Fecha Entrada
	if (expRegFecha.test(fechaEntrada) == false){	
		errores = true;				
		document.frmAltaDispositivo.fechaEntradaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Entrada  debe tener el sig formato AAAA-MM-DD\n";				
		document.frmAltaDispositivo.fechaEntradaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaDispositivo.fechaEntradaDispositivo.style.background = "white";		
	}
	
	//Fecha salida
	if (expRegFecha.test(fechaSalida) == false){	
		errores = true;				
		document.frmAltaDispositivo.fechaSalidaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Salida debe tener el sig formato AAAA-MM-DD\n";				
		document.frmAltaDispositivo.fechaSalidaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaDispositivo.fechaSalidaDispositivo.style.background = "white";			
	}
	
	if(!errores){
	 if(fechaEntrada>=fechaSalida){
		 errores = true;
		 sErrores += "La fecha de entrada no puede ser posterior a la fecha de salida";	
		document.frmAltaDispositivo.fechaSalidaDispositivo.style.background = "yellow"; //Marcar error	
		document.frmAltaDispositivo.fechaEntradaDispositivo.style.background = "yellow"; //Marcar error		
	 }
	}
	
	if(errores)
		alert(sErrores);
	else{
		//altaispositivo
        var oDispositivo = new Dispositivo(id, marca, modelo, rGarantia, fechaEntrada, fechaSalida);
    var sDatos = "datos=" + JSON.stringify(oDispositivo);

    $.post("dispositivos/altadispositivo.php", sDatos, respuestaAltaDispositivo, 'json');

		}
    function respuestaAltaDispositivo(oDatosDevueltos, sStatus, oAjax) {

    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) {
        // Mensaje
        alert(oDatosDevueltos[1]);

        // Como ha ido bien cierro el formulario
        $("#divfrmaltadispositivo").dialog("close");

    } else {
        alert(oDatosDevueltos[1]);
    }


}
}
