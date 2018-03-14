// Creacion del dialogo
$("#divfrmbajadispositivo").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmBajaDispositivo")[0].reset();
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
document.getElementById("bajaDispositivo").addEventListener("click",validarBajaDispositivo,false);
document.frmBajaDispositivo.volver.addEventListener("click",volverBajaDispositivo,false);

function volverBajaDispositivo(){
	$("#divfrmbajadispositivo").dialog("close");    	
}

function reiniciarValidacionesBajaDispositivo(){
	document.frmBajaDispositivo.reset();	
	document.frmBajaDispositivo.idDispositivo.style.background = "white";
}

function validarBajaDispositivo(){
	var id = document.frmBajaDispositivo.idDispositivo.value.trim();
	var errores = false;	
    
    var expRegId = /^[a-zA-Z0-9]{4}$/;

	
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
	
	if(errores)
		alert(sErrores);
	else{
		//bajadispositivo
         var oDispositivo = new Dispositivo(id, null, null, null, null, null);
         var sDatos = "datos=" + JSON.stringify(oDispositivo);

        $.post("dispositivos/bajadispositivo.php", sDatos, respuestaBajaDispositivo, 'json');
	}	
     function respuestaBajaDispositivo(oDatosDevueltos, sStatus, oAjax) {

        // oDatosDevueltos[0]  --- si hay o no error
        if (oDatosDevueltos[0] == false) {
            // Mensaje
            alert(oDatosDevueltos[1]);

            // Como ha ido bien cierro el formulario
            $("#divfrmbajadispositivo").dialog("close");

        } else {
            alert(oDatosDevueltos[1]);
        }
     }
}