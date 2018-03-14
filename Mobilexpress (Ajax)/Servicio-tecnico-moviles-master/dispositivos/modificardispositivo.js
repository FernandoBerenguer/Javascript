// Creacion del dialogo
$("#divfrmmodificardispositivo").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmModificarDispositivo")[0].reset();
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
document.getElementById("modificarDispositivo").addEventListener("click",validarModificarDispositivo,false);
document.frmModificarDispositivo.volver.addEventListener("click",volverModificarDispositivo,false);

function volverModificarDispositivo(){
	$("#divfrmmodificardispositivo").dialog("close");    	
}

function reiniciarValidacionesModificarDispositivo(){
	document.frmModificarDispositivo.reset();
     document.frmModificarDispositivo.idDispositivo.style.background = "white";
	document.frmModificarDispositivo.fechaSalidaDispositivo.style.background = "white";
	document.frmModificarDispositivo.fechaEntradaDispositivo.style.background = "white";
	document.frmModificarDispositivo.modeloDispositivo.style.background = "white";
	document.frmModificarDispositivo.marcaDispositivo.style.background = "white";
}

function validarModificarDispositivo(){
    var id = document.frmModificarDispositivo.idDispositivo.value.trim();
	var marca = document.frmModificarDispositivo.marcaDispositivo.value.trim();
	var modelo = document.frmModificarDispositivo.modeloDispositivo.value.trim();
	var fechaEntrada = document.frmModificarDispositivo.fechaEntradaDispositivo.value.trim();
	var fechaSalida = document.frmModificarDispositivo.fechaSalidaDispositivo.value.trim();
    
    var rGarantia = document.frmAltaDispositivo.rbtGarantia.value;
	
	
	var errores = false;
	
    var expRegId = /^[a-zA-Z0-9]{4}$/;
	var expRegMarca = /^[a-zA-Z\s]{3,10}$/;
	var expRegModelo = /^[a-zA-Z0-9]{3,20}$/;
	var expRegFecha = /^\d{4}\-\d{2}\-\d{2}$/;

	
	
	//validaciones
	var sErrores = "";

     //ID
	if (expRegId.test(id) == false){		
		errores = true;					
		document.frmModificarDispositivo.idDispositivo.focus();	//Este campo obtiene el foco			
		sErrores += "El id debe contener 4 caracteres \n";			
		document.frmModificarDispositivo.idDispositivo.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarDispositivo.idDispositivo.style.background = "white";	
	}
    
	//Marca
	if (expRegMarca.test(marca) == false){	
		errores = true;				
		document.frmModificarDispositivo.marcaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Marca debe contener entre 3 y 10 letras\n";				
		document.frmModificarDispositivo.marcaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarDispositivo.marcaDispositivo.style.background = "white";	
	}
	
	//Modelo
	if (expRegModelo.test(modelo) == false){	
		errores = true;				
		document.frmModificarDispositivo.modeloDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Modelo debe contener entre 3 y 20 letras o números\n";
		document.frmModificarDispositivo.modeloDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarDispositivo.modeloDispositivo.style.background = "white";
	}
	
	//Fecha Entrada
	if (expRegFecha.test(fechaEntrada) == false){	
		errores = true;				
		document.frmModificarDispositivo.fechaEntradaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Entrada  debe tener el sig formato AAAA-MM-DD\n";				
		document.frmModificarDispositivo.fechaEntradaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarDispositivo.fechaEntradaDispositivo.style.background = "white";		
	}
	
	//Fecha salida
	if (expRegFecha.test(fechaSalida) == false){	
		errores = true;				
		document.frmModificarDispositivo.fechaSalidaDispositivo.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Fecha Salida debe tener el sig formato AAAA-MM-DD\n";				
		document.frmModificarDispositivo.fechaSalidaDispositivo.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarDispositivo.fechaSalidaDispositivo.style.background = "white";			
	}
	
	if(!errores){
		if(fechaEntrada>=fechaSalida){
			errores = true;
			sErrores += "La fecha de entrada no puede ser posterior a la fecha de salida";	
			document.frmModificarDispositivo.fechaSalidaDispositivo.style.background = "yellow"; //Marcar error	
			document.frmModificarDispositivo.fechaEntradaDispositivo.style.background = "yellow"; //Marcar error		
		}
	}
	
	if(errores)
		alert(sErrores);
	else{
		//modificarDispositivo
          var oDispositivo = new Dispositivo(id, marca, modelo, rGarantia, fechaEntrada, fechaSalida);
        var sDatos = "datos=" + JSON.stringify(oDispositivo);

        $.post("dispositivos/modificardispositivo.php", sDatos, respuestaModificarDispositivo, 'json');
	}	
     function respuestaModificarDispositivo(oDatosDevueltos, sStatus, oAjax) {

        // oDatosDevueltos[0]  --- si hay o no error
        if (oDatosDevueltos[0] == false) {
            // Mensaje
            alert(oDatosDevueltos[1]);

            // Como ha ido bien cierro el formulario
            $("#divfrmmodificardispositivo").dialog("close");

        } else {
            alert(oDatosDevueltos[1]);
        }


}
}