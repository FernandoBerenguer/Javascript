// Creacion del dialogo
$("#divfrmbajapieza").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmBajaPieza")[0].reset();
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

document.getElementById("bajaPieza").addEventListener("click",validarBajaPieza,false);
document.frmBajaPieza.volver.addEventListener("click",volverBajaPieza,false);

function volverBajaPieza(){
	$("#divfrmbajapieza").dialog("close");    	
}

function reiniciarValidacionesBajaPieza(){
	document.frmBajaPieza.reset();
	document.frmBajaPieza.idPieza.style.background = "white";
}

function validarBajaPieza(){
	var id = document.frmBajaPieza.idPieza.value.trim();
		
	var errores = false;
	var expRegId = /^[a-zA-Z0-9]{4}$/;
	var expRegTipo = /^[a-zA-Z\s]{3,20}$/;
	var expRegPrecio = /^\d*[.]?\d{1,3}[€]$/;
		
	//validaciones
	var sErrores = "";

	//ID
	if (expRegId.test(id) == false){		
		errores = true;					
		document.frmBajaPieza.idPieza.focus();	//Este campo obtiene el foco			
		sErrores += "El id debe contener 4 caracteres \n";			
		document.frmBajaPieza.idPieza.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmBajaPieza.idPieza.style.background = "white";	
	}	
	
	if(errores)
		alert(sErrores);
	else{
		//BajaPieza    
	   
		var sParametroPOST ="datos=" + JSON.stringify(id);
		
       // sParametroPOST = encodeURI(sParametroPOST);

        var sURL = "piezasderepuesto/bajaPieza.php";

	    llamadaAjaxAltaPieza(sURL,sParametroPOST);
	
	};       
		
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
            $("#divfrmbajapieza").dialog("close");
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
