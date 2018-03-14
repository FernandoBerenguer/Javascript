//# sourceURL=reparaciones/listadoReparaciones.js
$("#divfrmlistadoreparaciones").dialog({
    autoOpen: true,  // Es el valor por defecto
    // beforeClose: antesDeCerrarse,
    close: function () {
        
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

document.getElementById("listadoReparaciones").addEventListener("click",comprobarListadoReparaciones,false);
document.frmListadoReparaciones.volver.addEventListener("click",volverListadoReparaciones,false);

function volverListadoReparaciones(){
	$("#divfrmlistadoreparaciones").dialog("close");
	volverListado();
}

function reiniciarValidacionesListadoReparaciones(){
	document.frmListadoReparaciones.reset();	
}

function comprobarListadoReparaciones(){	
	var sDatos = $("#frmListadoReparaciones").serialize();
    $.post("reparaciones/listadoReparaciones.php", sDatos, resListadoReparacion, 'json');    
}

function resListadoReparacion(oDatosDevueltos, sStatus, oAjax) {		
		$("#divfrmlistadoreparaciones").dialog("close");		
		$("#listados").append(oDatosDevueltos[0]);
    


}	

	
	
  