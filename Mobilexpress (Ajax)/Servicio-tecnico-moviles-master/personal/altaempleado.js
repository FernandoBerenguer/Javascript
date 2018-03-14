 // Creacion del dialogo
$("#divfrmaltaempleado").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmAltaEmpleado")[0].reset();
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

document.getElementById("altaEmpleado").addEventListener("click",validarAltaEmpleado,false);
document.frmAltaEmpleado.volver.addEventListener("click",volverAltaEmpleado,false);

function volverAltaEmpleado(){
	$("#divfrmaltaempleado").dialog("close");    	
}

function reiniciarValidacionesAltaEmpleado(){
	document.frmAltaEmpleado.reset();	
    document.frmAltaEmpleado.nifEmpleado.style.background = "white";
	document.frmAltaEmpleado.nombreEmpleado.style.background = "white";
	document.frmAltaEmpleado.apellidosEmpleado.style.background = "white";
	document.frmAltaEmpleado.direccionEmpleado.style.background = "white";
	document.frmAltaEmpleado.telefonoEmpleado.style.background = "white";	
	document.frmAltaEmpleado.ibanEmpleado.style.background = "white";
	document.frmAltaEmpleado.cargoEmpleado.style.background = "white";		
}

function validarAltaEmpleado(){	
	var nif = document.frmAltaEmpleado.nifEmpleado.value.trim();
	var nombre = document.frmAltaEmpleado.nombreEmpleado.value.trim();
	var apellidos = document.frmAltaEmpleado.apellidosEmpleado.value.trim();
	var direccion = document.frmAltaEmpleado.direccionEmpleado.value.trim();
	var telefono = document.frmAltaEmpleado.telefonoEmpleado.value.trim();	
	var iban = document.frmAltaEmpleado.ibanEmpleado.value.trim();
	var cargo = document.frmAltaEmpleado.cargoEmpleado.value.trim();	
	
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
		document.frmAltaEmpleado.nifEmpleado.focus();	//Este campo obtiene el foco			
		sErrores += "El campo NIF debe contener 8 números y acabar en 1 letra\n";			
		document.frmAltaEmpleado.nifEmpleado.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaEmpleado.nifEmpleado.style.background = "white";	
	}
	
	//NOMBRE
	if (expRegNombre.test(nombre) == false){
		errores = true;	
		document.frmAltaEmpleado.nombreEmpleado.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Nombre debe contener al menos 3 caracteres\n";		
		document.frmAltaEmpleado.nombreEmpleado.style.background = "yellow"; //Marcar error
	}
	else {//Desmarcar error
		document.frmAltaEmpleado.nombreEmpleado.style.background = "white";	
	}


	//APELLIDOS
	if (expRegApellidos.test(apellidos) == false){
		errores = true;					
		document.frmAltaEmpleado.apellidosEmpleado.focus(); //Este campo obtiene el foco		
		sErrores += "El campo Apellidos debe contener al menos 3 caracteres\n";		
		document.frmAltaEmpleado.apellidosEmpleado.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error
		document.frmAltaEmpleado.apellidosEmpleado.style.background = "white";	
	}


	//DIRECCION
	if (expRegDireccion.test(direccion) == false){
		errores = true;		
		document.frmAltaEmpleado.direccionEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El campo Direccion debe contener entre 3  y 40 caracteres\n";
		document.frmAltaEmpleado.direccionEmpleado.style.background = "yellow"; 	//Marcar error
	}
	else {	//Desmarcar error
		document.frmAltaEmpleado.direccionEmpleado.style.background = "white";	
	}


	//TELEFONO
	if (expRegTelefono.test(telefono) == false){
		errores = true;				
		document.frmAltaEmpleado.telefonoEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El campo Teléfono debe contener 9 números y empezar por 9 , 7 o 6\n";		
		document.frmAltaEmpleado.telefonoEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmAltaEmpleado.telefonoEmpleado.style.background = "white";	
	}
	
	//iban
	if (expRegIban.test(iban) == false){
		errores = true;				
		document.frmAltaEmpleado.ibanEmpleado.focus();	//Este campo obtiene el foco
		sErrores += " El campo iban debe contener 4 numeros y 1 letra\n";		
		document.frmAltaEmpleado.ibanEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmAltaEmpleado.ibanEmpleado.style.background = "white";	
	}


	//Cargo
	if (expRegCargo.test(cargo) == false){
		errores = true;				 
		document.frmAltaEmpleado.cargoEmpleado.focus();	//Este campo obtiene el foco
		sErrores += "El Cargo Email debe tener entre 3 y 20 caracteres";		
		document.frmAltaEmpleado.cargoEmpleado.style.background = "yellow";//Marcar error
	}
	else {//Desmarcar error
		document.frmAltaEmpleado.cargoEmpleado.style.background = "white";	
	}		
	
	if(errores)
		alert(sErrores);
	else{
		//altaEmpleado
         $.ajax({
            url: "personal/altaempleado.php",
            async: true,
            cache: false,
            method: "POST",
            dataType: "json",
            data: $("#frmAltaEmpleado").serializeArray(),
            //  beforeSend: prepararDatosEnvio,
            complete: respuestaAltaEmpleado
        });
	   }
}

function respuestaAltaEmpleado(jqXHR, sStatus)
{
    var oDatosDevueltos = JSON.parse(jqXHR.responseText);
    //var oDatosDevueltos = jqXHR.responseJSON;

    if (sStatus == "success") {
        // oDatosDevueltos[0]  --- si hay o no error
        if (oDatosDevueltos[0] == false) {
            // Mensaje
            alert(oDatosDevueltos[1]);

            // Como ha ido bien cierro el formulario
            $("#divfrmaltaempleado").dialog("close");

        } else {
            alert(oDatosDevueltos[1]);
        }
    } else {
        alert("Error del servidor: " + sStatus);
    }
}
