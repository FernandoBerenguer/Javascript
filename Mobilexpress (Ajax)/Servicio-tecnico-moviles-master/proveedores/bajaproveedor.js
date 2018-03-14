// Creacion del dialogo
$("#divfrmbajaproveedor").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmBajaProveedor")[0].reset();
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

document.getElementById("bajaProveedor").addEventListener("click",validarBajaProveedor,false);
document.frmBajaProveedor.volver.addEventListener("click",volverBajaProveedor,false);

function volverBajaProveedor(){
	$("#divfrmbajaproveedor").dialog("close");    	
}

function reiniciarValidacionesBajaProveedor(){
	document.frmBajaProveedor.reset();
	document.frmBajaProveedor.nifProveedor.style.background = "white";
}

function validarBajaProveedor(){
	var nif = document.frmBajaProveedor.nifProveedor.value.trim();	
		
	var errores = false;
	var expRegNif = /^[0-9]{8}[a-zA-Z]{1}$/;
	
		
	//validaciones
	var sErrores = "";

	//NIf
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmBajaProveedor.nifProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El Nif debe contener 8 números y 1 letra \n";			
		document.frmBajaProveedor.nifProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmBajaProveedor.nifProveedor.style.background = "white";	
	}
	
	if(errores)
		alert(sErrores);
	else{
		//bajaProveedor
	   var sDatos = $("#frmBajaProveedor").serialize();

        $.post("proveedores/bajaproveedor.php", sDatos, respuestaBajaProveedor, 'json');

    }

function respuestaBajaProveedor(oDatosDevueltos, sStatus, oAjax) {

        // oDatosDevueltos[0]  --- si hay o no error
        if (oDatosDevueltos[0] == false) {
            // Mensaje
            alert(oDatosDevueltos[1]);

            // Como ha ido bien cierro el formulario
            $("#divfrmbajaproveedor").dialog("close"); 

        } else {
            alert(oDatosDevueltos[1]);
        }


    }		
}
