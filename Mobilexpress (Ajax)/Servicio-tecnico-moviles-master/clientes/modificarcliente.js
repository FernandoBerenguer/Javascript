// Creacion del dialogo
$("#divfrmmodificarcliente").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmModificarCliente")[0].reset();
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

document.getElementById("modificarCliente").addEventListener("click",validarModificarCliente,false);
document.frmModificarCliente.volver.addEventListener("click",volverModificarCliente,false);

function volverModificarCliente(){
	$("#divfrmmodificarcliente").dialog("close");    	
}

function reiniciarValidacionesModificarCliente(){
	document.frmModificarCliente.reset();
	document.frmModificarCliente.nifCliente.style.background = "white";
	document.frmModificarCliente.nombreCliente.style.background = "white";	
	document.frmModificarCliente.apellidosCliente.style.background = "white";
	document.frmModificarCliente.direccionCliente.style.background = "white";
	document.frmModificarCliente.telefonoCliente.style.background = "white";	
}

function validarModificarCliente(){
	var nif = document.frmModificarCliente.nifCliente.value.trim();
	var nombre = document.frmModificarCliente.nombreCliente.value.trim();
	var apellidos = document.frmModificarCliente.apellidosCliente.value.trim();
	var direccion = document.frmModificarCliente.direccionCliente.value.trim();
	var telefono = document.frmModificarCliente.telefonoCliente.value.trim();
	
	
	
	var errores = false;
	
	var expRegNif = /^\d{8}\w$/;
	var expRegNombre = /^[a-zA-Z\s]{3,20}$/;
	var expRegApellidos = /^[a-zA-Z\s]{3,30}$/;
	var expRegDireccion = /^[a-zA-Z0-9\s]{3,40}$/;
	var expRegTelefono = /^([9|7|6]{1})[0-9]{8}$/;
	
	//validaciones
	var sErrores = "";

	//NIF
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmModificarCliente.nifCliente.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmModificarCliente.nifCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarCliente.nifCliente.style.background = "white";	
	}
	
	//NOMBRE
	if (expRegNombre.test(nombre) == false){
		errores = true;	
		document.frmModificarCliente.nombreCliente.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Nombre debe contener al menos 3 caracteres\n";		
		document.frmModificarCliente.nombreCliente.style.background = "yellow"; //Marcar error
	}
	else {//Desmarcar error
		document.frmModificarCliente.nombreCliente.style.background = "white";	
	}


//APELLIDOS
	if (expRegApellidos.test(apellidos) == false){
		errores = true;					
		document.frmModificarCliente.apellidosCliente.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Apellidos debe contener al menos 3 caracteres\n";		
		document.frmModificarCliente.apellidosCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error
		document.frmModificarCliente.apellidosCliente.style.background = "white";	
	}


//DIRECCION
	if (expRegDireccion.test(direccion) == false){
		errores = true;		
		document.frmModificarCliente.direccionCliente.focus();	//Este campo obtiene el foco
		sErrores += "El campo Direccion debe contener entre 3  y 40 caracteres\n";
		document.frmModificarCliente.direccionCliente.style.background = "yellow"; 	//Marcar error
	}
	else {	//Desmarcar error
		document.frmModificarCliente.direccionCliente.style.background = "white";	
	}


//TELEFONO
	if (expRegTelefono.test(telefono) == false){
		errores = true;				
		document.frmModificarCliente.telefonoCliente.focus();	//Este campo obtiene el foco
		sErrores += "El campo Teléfono debe contener 9 números y empezar por 9 , 7 o 6 ";		
		document.frmModificarCliente.telefonoCliente.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmModificarCliente.telefonoCliente.style.background = "white";	
	}

	if(errores)
		alert(sErrores);
	else{
		//modificarCLiente
        var sDatos = $("#frmModificarCliente").serialize();

        $.post("clientes/modificarcliente.php", sDatos, respuestaModificaCliente, 'json');
	}
    function respuestaModificaCliente(oDatosDevueltos, sStatus, oAjax) {

        // oDatosDevueltos[0]  --- si hay o no error
        if (oDatosDevueltos[0] == false) {
            // Mensaje
            alert(oDatosDevueltos[1]);

            // Como ha ido bien cierro el formulario
            $("#divfrmmodificarcliente").dialog("close"); 

        } else {
            alert(oDatosDevueltos[1]);
        }


    }
}