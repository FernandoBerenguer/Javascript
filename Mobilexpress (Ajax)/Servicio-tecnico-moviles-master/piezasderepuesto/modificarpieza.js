// Creacion del dialogo
$("#divfrmmodificarpieza").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmModificarPieza")[0].reset();
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

document.getElementById("modificarPieza").addEventListener("click",validarModificarPieza,false);
document.frmModificarPieza.volver.addEventListener("click",volverModificarPieza,false);

function volverModificarPieza(){
	$("#divfrmmodificarpieza").dialog("close");    	
}

function reiniciarValidacionesModificarPieza(){document.frmModificarPieza.reset();
	document.frmModificarPieza.idPieza.style.background = "white";
	document.frmModificarPieza.tipoPieza.style.background = "white";	
	document.frmModificarPieza.precioPieza.style.background = "white";
}

function validarModificarPieza(){
	var id = document.frmModificarPieza.idPieza.value.trim();
	var tipo = document.frmModificarPieza.tipoPieza.value.trim();
	var precio = document.frmModificarPieza.precioPieza.value.trim();
	
	var errores = false;
	var expRegId = /^[a-zA-Z0-9]{4}$/;
	var expRegTipo = /^[a-zA-Z\s]{3,20}$/;
	var expRegPrecio = /^\d*[.]?\d{1,3}$/;
		
	//validaciones
	var sErrores = "";

	//ID
	if (expRegId.test(id) == false){		
		errores = true;					
		document.frmModificarPieza.idPieza.focus();	//Este campo obtiene el foco			
		sErrores += "El id debe contener 4 caracteres \n";			
		document.frmModificarPieza.idPieza.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarPieza.idPieza.style.background = "white";	
	}
	
	//tipo
	if (expRegTipo.test(tipo) == false){		
		errores = true;					
		document.frmModificarPieza.tipoPieza.focus();	//Este campo obtiene el foco			
		sErrores += "El Tipo de pieza debe ser una cadena entre 3 y 20 caracteres \n";			
		document.frmModificarPieza.tipoPieza.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmModificarPieza.tipoPieza.style.background = "white";	
	}
	
	//Precio
	if (expRegPrecio.test(precio) == false){	
		errores = true;				
		document.frmModificarPieza.precioPieza.focus(); //Este campo obtiene el foco		
		sErrores += 'El campo Precio debe contener numeros y acabar con el caracter €\n';				
		document.frmModificarPieza.precioPieza.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmModificarPieza.precioPieza.style.background = "white";	
	}
	
	if(errores)
		alert(sErrores);
	else{
		//modificar
       var oPieza = new Pieza_Repuesto(id, tipo, precio, "", "");
	   
		var sParametroPOST ="datos=" + JSON.stringify(oPieza);
		
       // sParametroPOST = encodeURI(sParametroPOST);

        var sURL = "piezasderepuesto/modificarpieza.php";

	    llamadaAjaxAltaPieza(sURL,sParametroPOST);
	
	}
       
		
}

/* LLAMADAS AJAX */
function llamadaAjaxAltaPieza(sURL,sParametroPOST){

	oAjaxAltaPieza = objetoXHR();

	oAjaxAltaPieza.open("POST",sURL,true);

    oAjaxAltaPieza.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	oAjaxAltaPieza.onreadystatechange = respuestaAltaPieza;


	oAjaxAltaPieza.send(sParametroPOST);
}

function respuestaAltaPieza(){

	if(oAjaxAltaPieza.readyState == 4 && oAjaxAltaPieza.status ==200)	{
		var oArrayRespuesta = JSON.parse(oAjaxAltaPieza.responseText);

		if (oArrayRespuesta[0] == true){
			alert(oArrayRespuesta[1]);
		} else {
			alert(oArrayRespuesta[1]);
            $("#divfrmmodificarpieza").dialog("close");
		}
	}
}

function objetoXHR() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            var versionesIE = new Array('Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP');
            for (var i = 0; i < versionesIE.length; i++) {
                try {
                    return new ActiveXObject(versionesIE[i]);
                } catch (errorControlado) {} //Capturamos el error,
            }
        }
        throw new Error("No se pudo crear el objeto XMLHttpRequest");
}	
