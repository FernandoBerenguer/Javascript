// Creacion del dialogo
$("#divfrmaltaproveedor").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmAltaProveedor")[0].reset();
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
function reiniciarValidacionesAltaProveedor(){
	document.frmAltaProveedor.reset();
	document.frmAltaProveedor.nifProveedor.style.background = "white";
	document.frmAltaProveedor.nombreProveedor.style.background = "white";	
	document.frmAltaProveedor.tipoProveedor.style.background = "white";
}

document.getElementById("altaProveedor").addEventListener("click",validarAltaProveedor,false);
document.frmAltaProveedor.volver.addEventListener("click",volverAltaProveedor,false);

function volverAltaProveedor(){
	$("#divfrmaltaproveedor").dialog("close");    	
}

function validarAltaProveedor(){	
	var nif = document.frmAltaProveedor.nifProveedor.value.trim();
	var nombre = document.frmAltaProveedor.nombreProveedor.value.trim();
	var tipo = document.frmAltaProveedor.tipoProveedor.value.trim();		
		
	var errores = false;
	var expRegNif = /^[0-9]{8}[a-zA-Z]{1}$/;
	var expRegNombre = /^[[a-zA-Z\s]{3,20}$/;
	var expRegTipo = /^[[a-zA-Z\s]{3,15}$/;
		
	//validaciones
	var sErrores = "";

	//NIf
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmAltaProveedor.nifProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El Nif debe contener 8 números y 1 letra \n";			
		document.frmAltaProveedor.nifProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaProveedor.nifProveedor.style.background = "white";	
	}

	//nombre
	if (expRegNombre.test(nombre) == false){		
		errores = true;					
		document.frmAltaProveedor.nombreProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El nombre debe contener entre 3 y 20 caracteres\n";			
		document.frmAltaProveedor.nombreProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaProveedor.nombreProveedor.style.background = "white";	
	}	
	
	//tipo
	if (expRegTipo.test(tipo) == false){		
		errores = true;					
		document.frmAltaProveedor.tipoProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El campo tipo debe contener entre 3 y 15 caracteres\n";			
		document.frmAltaProveedor.tipoProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaProveedor.tipoProveedor.style.background = "white";	
	}	
	
	if(errores)
		alert(sErrores);
	else{
		//altaProveedor
        var sDatos = $("#frmAltaProveedor").serialize();

        $.post("proveedores/altaproveedor.php", sDatos, respuestaAltaProveedor, 'json');
	}		
     function respuestaAltaProveedor(oDatosDevueltos, sStatus, oAjax) {

        // oDatosDevueltos[0]  --- si hay o no error
        if (oDatosDevueltos[0] == false) 
            {
                // Mensaje
                alert(oDatosDevueltos[1]);

                // Como ha ido bien cierro el formulario
                $("#divfrmaltaproveedor").dialog("close"); 

            } 
        else 
            {
                alert(oDatosDevueltos[1]);
            }


    }
}
