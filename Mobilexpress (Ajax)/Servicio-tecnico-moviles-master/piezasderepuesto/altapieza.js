//# sourceURL=altaPieza/altaPieza.js
// Creacion del dialogo
$("#divfrmaltapieza").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        $("#frmAltaPieza")[0].reset();
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

document.getElementById("altaPieza").addEventListener("click",validarAltaPieza,false);
document.frmAltaPieza.volver.addEventListener("click",volverAltaPieza,false);
cargarComboIdReparacion();
cargarComboCifProveedor();

function volverAltaPieza(){
	$("#divfrmaltapieza").dialog("close");    	
}


function reiniciarValidacionesAltaPieza(){
	document.frmAltaPieza.reset();
		
	document.frmAltaPieza.numSerie.style.background = "white";
	document.frmAltaPieza.tipoPieza.style.background = "white";
	document.frmAltaPieza.precioPieza.style.background = "white";
    document.frmAltaPieza.idReparacionAltaPieza.style.background = "white";
}

function validarAltaPieza(){
	var numSerie = document.frmAltaPieza.numSerie.value.trim();
	var tipo = document.frmAltaPieza.tipoPieza.value.trim();
	var precio = document.frmAltaPieza.precioPieza.value.trim();
    var idReparacion = document.frmAltaPieza.idReparacionAltaPieza.value.trim();
    var cifProveedor = document.frmAltaPieza.cifProveedor.value.trim();
	
	var errores = false;
	var expRegNumSerie = /^[a-zA-Z0-9]{4}$/;
	var expRegTipo = /^[a-zA-Z\s]{3,20}$/;
	var expRegPrecio = /^\d*[.]?\d{1,3}$/;    
    var expCifProveedor = /^\d{8}\w$/;
		
	//validaciones
	var sErrores = "";

	//Num serie
	if (expRegNumSerie.test(numSerie) == false){
		errores = true;					
		document.frmAltaPieza.numSerie.focus();	//Este campo obtiene el foco
		sErrores += "El num de serie debe contener 4 caracteres \n";
		document.frmAltaPieza.numSerie.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaPieza.numSerie.style.background = "white";
	}
	
	//Tipo
	if (expRegTipo.test(tipo) == false){		
		errores = true;					
		document.frmAltaPieza.tipoPieza.focus();	//Este campo obtiene el foco			
		sErrores += "El Tipo de pieza debe ser una cadena entre 3 y 20 caracteres \n";			
		document.frmAltaPieza.tipoPieza.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error		
		document.frmAltaPieza.tipoPieza.style.background = "white";	
	}
	
	//Precio
	if (expRegPrecio.test(precio) == false){	
		errores = true;				
		document.frmAltaPieza.precioPieza.focus(); //Este campo obtiene el foco		
		sErrores += 'El campo Precio debe contener numeros \n';				
		document.frmAltaPieza.precioPieza.style.background = "yellow"; //Marcar error
	}
	else { //Desmarcar error
		document.frmAltaPieza.precioPieza.style.background = "white";	
	}

    //ID Reparación
    if (idReparacion ==""){
		errores = true;
		document.frmAltaPieza.idReparacionAltaPieza.focus();	//Este campo obtiene el foco
		sErrores += "Primero debe dar de alta una reparacion \n";
		document.frmAltaPieza.idReparacionAltaPieza.style.background = "yellow";  //Marcar error
	}
	else {//Desmarcar error
		document.frmAltaPieza.idReparacionAltaPieza.style.background = "white";
	}    
	
	if(errores)
		alert(sErrores);
	else{
		//altaPieza
       var oPieza = new Pieza_Repuesto(numSerie, tipo, precio, idReparacion, cifProveedor);
	   
		var sParametroPOST ="datos=" + JSON.stringify(oPieza);
		
       // sParametroPOST = encodeURI(sParametroPOST);

        var sURL = "piezasderepuesto/altapieza.php";

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
            $("#divfrmaltapieza").dialog("close");
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

function cargarComboIdReparacion(){
//con load
$("#idReparacionAltaPieza").load("piezasderepuesto/comboIdReparacion.php");

}

function vaciarComboIdReparacion(){
	$('#idReparacionAltaPieza').each(function(){
          $('#idReparacionAltaPieza option').remove();
      });
}


function vaciarComboCifProveedor(){
	$('#cifProveedor').each(function(){
          $('#cifProveedor option').remove();
      });
}

function cargarComboCifProveedor(){
	//con load
$("#cifProveedor").load("piezasderepuesto/cargarComboCifProveedor.php");
}






