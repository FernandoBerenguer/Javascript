// Creacion del dialogo
$("#divfrmmodificarproveedor").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmModificarProveedor")[0].reset();
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

document.getElementById("modificarProveedor").addEventListener("click",validarModificarProveedor,false);
document.frmModificarProveedor.volver.addEventListener("click",volverModificarProveedor,false);

function volverModificarProveedor(){
	$("#divfrmmodificarproveedor").dialog("close");    	
}


function reiniciarValidacionesModificarProveedor() {
	document.frmModificarProveedor.reset();
	document.frmModificarProveedor.nifProveedor.style.background = "white";
	document.frmModificarProveedor.nombreProveedor.style.background = "white";	
	document.frmModificarProveedor.tipoProveedor.style.background = "white";
}

function validarModificarProveedor(){
	var nif = document.frmModificarProveedor.nifProveedor.value.trim();
	var nombre = document.frmModificarProveedor.nombreProveedor.value.trim();
	var tipo = document.frmModificarProveedor.tipoProveedor.value.trim();		
		
	var errores = false;
	var expRegNif = /^[0-9]{8}[a-zA-Z]{1}$/;
	var expRegNombre = /^[[a-zA-Z\s]{3,20}$/;
	var expRegTipo = /^[[a-zA-Z\s]{3,15}$/;
		
	//validaciones
	var sErrores = "";

	//NIf
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmModificarProveedor.nifProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El Nif debe contener 8 números y 1 letra \n";			
		document.frmModificarProveedor.nifProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarProveedor.nifProveedor.style.background = "white";	
	}

	//nombre
	if (expRegNombre.test(nombre) == false){		
		errores = true;					
		document.frmModificarProveedor.nombreProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El nombre debe contener entre 3 y 20 caracteres\n";			
		document.frmModificarProveedor.nombreProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarProveedor.nombreProveedor.style.background = "white";	
	}	
	
	//tipo
	if (expRegTipo.test(tipo) == false){		
		errores = true;					
		document.frmModificarProveedor.tipoProveedor.focus();	//Este campo obtiene el foco			
		sErrores += "El campo tipo debe contener entre 3 y 15 caracteres\n";			
		document.frmModificarProveedor.tipoProveedor.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarProveedor.tipoProveedor.style.background = "white";	
	}	
	
	if(errores)
		alert(sErrores);
	else{
		//modif proveedor
	       var sDatos = $("#frmModificarProveedor").serialize();

        $.post("proveedores/modificarproveedor.php", sDatos, respuestaModificarProveedor, 'json');
	}		
     function respuestaModificarProveedor(oDatosDevueltos, sStatus, oAjax) {

        // oDatosDevueltos[0]  --- si hay o no error
        if (oDatosDevueltos[0] == false) 
            {
                // Mensaje
                alert(oDatosDevueltos[1]);

                // Como ha ido bien cierro el formulario
                $("#divfrmmodificarproveedor").dialog("close"); 

            } 
        else 
            {
                alert(oDatosDevueltos[1]);
            }


    }	
}