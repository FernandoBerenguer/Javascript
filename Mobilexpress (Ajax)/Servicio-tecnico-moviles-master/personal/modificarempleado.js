// Creacion del dialogo
$("#divfrmmodificarempleado").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmModificarEmpleado")[0].reset();
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

document.getElementById("modificarEmpleado").addEventListener("click",validarModificarEmpleado,false);
document.frmModificarEmpleado.volver.addEventListener("click",volverModificarEmpleado,false);

function volverModificarEmpleado(){
	$("#divfrmmodificarempleado").dialog("close");    	
}

function reiniciarValidacionesModificarEmpleado(){
	document.frmModificarEmpleado.reset();	
    document.frmModificarEmpleado.nifEmpleado.style.background = "white";
	document.frmModificarEmpleado.nombreEmpleado.style.background = "white";
	document.frmModificarEmpleado.apellidosEmpleado.style.background = "white";
	document.frmModificarEmpleado.direccionEmpleado.style.background = "white";
	document.frmModificarEmpleado.telefonoEmpleado.style.background = "white";
	document.frmModificarEmpleado.ibanEmpleado.style.background = "white";
	document.frmModificarEmpleado.cargoEmpleado.style.background = "white";	
}

function validarModificarEmpleado(){	
	var nif = document.frmModificarEmpleado.nifEmpleado.value.trim();
	var nombre = document.frmModificarEmpleado.nombreEmpleado.value.trim();
	var apellidos = document.frmModificarEmpleado.apellidosEmpleado.value.trim();
	var direccion = document.frmModificarEmpleado.direccionEmpleado.value.trim();
	var telefono = document.frmModificarEmpleado.telefonoEmpleado.value.trim();	
	var iban = document.frmModificarEmpleado.ibanEmpleado.value.trim();
	var cargo = document.frmModificarEmpleado.cargoEmpleado.value.trim();	
	
	var errores = false;
	
	var expRegNif = /^\d{8}\w$/;
	var expRegNombre = /^[a-zA-Z\s]{3,20}$/;
	var expRegApellidos = /^[a-zA-Z\s]{3,30}$/;
	var expRegDireccion = /^[a-zA-Z0-9\s]{3,40}$/;
	var expRegTelefono = /^([9|7|6]{1})[0-9]{8}$/;
	var expRegIban = /^\d{4}\w$/;
	var expRegCargo = /^[a-zA-Z\s]{3,20}$/;;

	
	
	//validaciones
	var sErrores = "";
	
	
	//NIF
	if (expRegNif.test(nif) == false){		
		errores = true;					
		document.frmModificarEmpleado.nifEmpleado.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmModificarEmpleado.nifEmpleado.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarEmpleado.nifEmpleado.style.background = "white";	
	}
	
	//NOMBRE
	if (expRegNombre.test(nombre) == false){
		errores = true;	
		document.frmModificarEmpleado.nombreEmpleado.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Nombre debe contener al menos 3 caracteres\n";		
		document.frmModificarEmpleado.nombreEmpleado.style.background = "yellow"; //Marcar error
	}
	else {//Desmarcar error
		document.frmModificarEmpleado.nombreEmpleado.style.background = "white";	
	}


	//APELLIDOS
	if (expRegApellidos.test(apellidos) == false){
		errores = true;					
		document.frmModificarEmpleado.apellidosEmpleado.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Apellidos debe contener al menos 3 caracteres\n";		
		document.frmModificarEmpleado.apellidosEmpleado.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error
		document.frmModificarEmpleado.apellidosEmpleado.style.background = "white";	
	}


	//DIRECCION
	if (expRegDireccion.test(direccion) == false){
		errores = true;		
		document.frmModificarEmpleado.direccionEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El campo Direccion debe contener entre 3  y 40 caracteres\n";
		document.frmModificarEmpleado.direccionEmpleado.style.background = "yellow"; 	//Marcar error
	}
	else {	//Desmarcar error
		document.frmModificarEmpleado.direccionEmpleado.style.background = "white";	
	}


	//TELEFONO
	if (expRegTelefono.test(telefono) == false){
		errores = true;				
		document.frmModificarEmpleado.telefonoEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El campo Teléfono debe contener 9 números y empezar por 9 , 7 o 6\n";		
		document.frmModificarEmpleado.telefonoEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmModificarEmpleado.telefonoEmpleado.style.background = "white";	
	}

	
	//iban
	if (expRegIban.test(iban) == false){
		errores = true;				
		document.frmModificarEmpleado.ibanEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El campo iban debe contener 4 números y 1 letra\n ";		
		document.frmModificarEmpleado.ibanEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmModificarEmpleado.ibanEmpleado.style.background = "white";	
	}


	//Cargo
	if (expRegCargo.test(cargo) == false){
		errores = true;				 
		document.frmModificarEmpleado.cargoEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El Cargo Email debe tener entre 3 y 20 caracteres";		
		document.frmModificarEmpleado.cargoEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmModificarEmpleado.cargoEmpleado.style.background = "white";	
	}
		
	
	if(errores)
		alert(sErrores);
	else{
		//modificarEmpleado
         $.ajax({
            url: "personal/modificarempleado.php",
            async: true,
            cache: false,
            method: "POST",
            dataType: "json",
            data: $("#frmModificarEmpleado").serializeArray(),
            //  beforeSend: prepararDatosEnvio,
            complete: respuestaModificarEmpleado
        });
	}		
}

function respuestaModificarEmpleado(jqXHR, sStatus)
{
    var oDatosDevueltos = JSON.parse(jqXHR.responseText);
    //var oDatosDevueltos = jqXHR.responseJSON;

    if (sStatus == "success") {
        // oDatosDevueltos[0]  --- si hay o no error
        if (oDatosDevueltos[0] == false) {
            // Mensaje
            alert(oDatosDevueltos[1]);

            // Como ha ido bien cierro el formulario
            $("#divfrmmodificarempleado").dialog("close");

        } else {
            alert(oDatosDevueltos[1]);
        }
    } else {
        alert("Error del servidor: " + sStatus);
    }
}
