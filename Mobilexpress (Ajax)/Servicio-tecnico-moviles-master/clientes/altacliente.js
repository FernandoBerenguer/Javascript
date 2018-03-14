//# sourceURL=altaCasa/altaCasa.js
// Creacion del dialogo
$("#divfrmaltacliente").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmAltaCliente")[0].reset();
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

document.getElementById("altaCliente").addEventListener("click",validarAltaCliente,false);
document.frmAltaCliente.volver.addEventListener("click",volverAltaCliente,false);

function volverAltaCliente(){
	$("#divfrmaltacliente").dialog("close");    	
}

function reiniciarValidacionesAltaCliente(){
	document.frmAltaCliente.reset();
	document.frmAltaCliente.nifCliente.style.background = "white";
	document.frmAltaCliente.nombreCliente.style.background = "white";	
	document.frmAltaCliente.apellidosCliente.style.background = "white";
	document.frmAltaCliente.direccionCliente.style.background = "white";
	document.frmAltaCliente.telefonoCliente.style.background = "white";
}

function validarAltaCliente(){
	var nif = document.frmAltaCliente.nifCliente.value.trim();
	var nombre = document.frmAltaCliente.nombreCliente.value.trim();
	var apellidos = document.frmAltaCliente.apellidosCliente.value.trim();
	var direccion = document.frmAltaCliente.direccionCliente.value.trim();
	var telefono = document.frmAltaCliente.telefonoCliente.value.trim();
	
	
	
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
		document.frmAltaCliente.nifCliente.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmAltaCliente.nifCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaCliente.nifCliente.style.background = "white";	
	}
	
	//NOMBRE
	if (expRegNombre.test(nombre) == false){
		errores = true;	
		document.frmAltaCliente.nombreCliente.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Nombre debe contener al menos 3 caracteres\n";		
		document.frmAltaCliente.nombreCliente.style.background = "yellow"; //Marcar error
	}
	else {//Desmarcar error
		document.frmAltaCliente.nombreCliente.style.background = "white";	
	}


//APELLIDOS
	if (expRegApellidos.test(apellidos) == false){
		errores = true;					
		document.frmAltaCliente.apellidosCliente.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Apellidos debe contener al menos 3 caracteres\n";		
		document.frmAltaCliente.apellidosCliente.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error
		document.frmAltaCliente.apellidosCliente.style.background = "white";	
	}


//DIRECCION
	if (expRegDireccion.test(direccion) == false){
		errores = true;		
		document.frmAltaCliente.direccionCliente.focus();	//Este campo obtiene el foco
		sErrores += "El campo Direccion debe contener entre 3  y 40 caracteres\n";
		document.frmAltaCliente.direccionCliente.style.background = "yellow"; 	//Marcar error
	}
	else {	//Desmarcar error
		document.frmAltaCliente.direccionCliente.style.background = "white";	
	}


//TELEFONO
	if (expRegTelefono.test(telefono) == false){
		errores = true;				
		document.frmAltaCliente.telefonoCliente.focus();	//Este campo obtiene el foco
		sErrores += "El campo Teléfono debe contener 9 números y empezar por 9 , 7 o 6 ";		
		document.frmAltaCliente.telefonoCliente.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmAltaCliente.telefonoCliente.style.background = "white";	
	}

	if(errores)
		alert(sErrores);
	else{
		//dar de alta en la base de datos
        var sDatos = $("#frmAltaCliente").serialize();

        $.post("clientes/altacliente.php", sDatos, respuestaAltaCliente, 'json');

    }

    function respuestaAltaCliente(oDatosDevueltos, sStatus, oAjax) {

    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) 
        {
            // Mensaje
            alert(oDatosDevueltos[1]);

            // Como ha ido bien cierro el formulario
            $("#divfrmaltacliente").dialog("close"); 

        } 
    else 
        {
            alert(oDatosDevueltos[1]);
        }


    }
}	
