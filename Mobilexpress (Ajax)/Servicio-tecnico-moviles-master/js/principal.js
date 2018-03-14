//var oSAT = new SAT();
// Cargar datos desde XML
//cargarDatosXML();
//eventos botones menu

//document.getElementById("menu").addEventListener("click", mostrarInicio, false);
function ocultarMenu(){
	document.getElementById("menuDesplegable").style.visibility = "hidden";
}

function mostrarMenu(){
	document.getElementById("menuDesplegable").style.visibility = "visible";

}

document.getElementById("navAltaCliente").addEventListener("click", mostrarAltaCliente, false);
document.getElementById("navBajaCliente").addEventListener("click", mostrarBajaCliente, false);
document.getElementById("navModificarCliente").addEventListener("click", mostrarModificarCliente, false);

document.getElementById("navAltaEmpleado").addEventListener("click", mostrarAltaEmpleado, false);
document.getElementById("navBajaEmpleado").addEventListener("click", mostrarBajaEmpleado, false);
document.getElementById("navModificarEmpleado").addEventListener("click", mostrarModificarEmpleado, false);

document.getElementById("navAltaProveedor").addEventListener("click", mostrarAltaProveedor, false);
document.getElementById("navBajaProveedor").addEventListener("click", mostrarBajaProveedor, false);
document.getElementById("navModificarProveedor").addEventListener("click", mostrarModificarProveedor, false);


document.getElementById("navAltaDispositivo").addEventListener("click", mostrarAltaDispositivo, false);
document.getElementById("navBajaDispositivo").addEventListener("click", mostrarBajaDispositivo, false);
document.getElementById("navModificarDispositivo").addEventListener("click", mostrarModificarDispositivo, false);

document.getElementById("navAltaPieza").addEventListener("click", mostrarAltaPieza, false);
document.getElementById("navBajaPieza").addEventListener("click", mostrarBajaPieza, false);
document.getElementById("navModificarPieza").addEventListener("click", mostrarModificarPieza, false);

document.getElementById("navAltaReparación").addEventListener("click", mostrarAltaReparacion, false);
document.getElementById("navModificarReparación").addEventListener("click", mostrarModificarReparacion, false);
document.getElementById("navEliminarReparacion").addEventListener("click", mostrarBajaReparacion, false);

function mostrarAltaCliente(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmAltaCliente').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmaltacliente"></div>').appendTo('#formularios').load("clientes/frmaltacliente.html",
            function() {
                $.getScript("clientes/altacliente.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesAltaCliente();
		$('#divfrmaltacliente').dialog("open");
    }
}

function mostrarBajaCliente(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmBajaCliente').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmbajacliente"></div>').appendTo('#formularios').load("clientes/frmbajacliente.html",
            function() {
                $.getScript("clientes/bajacliente.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesBajaCliente();
		$('#divfrmbajacliente').dialog("open");
    }
}

function mostrarModificarCliente(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmModificarCliente').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmmodificarcliente"></div>').appendTo('#formularios').load("clientes/frmmodificarcliente.html",
            function() {
                $.getScript("clientes/modificarcliente.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesModificarCliente();
		$('#divfrmmodificarcliente').dialog("open");
    }
}

function mostrarAltaEmpleado(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmAltaEmpleado').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmaltaempleado"></div>').appendTo('#formularios').load("personal/frmaltaempleado.html",
            function() {
                $.getScript("personal/altaempleado.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesAltaEmpleado();
		$('#divfrmaltaempleado').dialog("open");
    }
}

function mostrarBajaEmpleado(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmBajaEmpleado').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmbajaempleado"></div>').appendTo('#formularios').load("personal/frmbajaempleado.html",
            function() {
                $.getScript("personal/bajaempleado.js");
            });

    } else {// si se cargo abrimos el dialogo
		$('#divfrmbajaempleado').dialog("open");
		reiniciarValidacionesBajaEmpleado();
    }
}

function mostrarModificarEmpleado(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmModificarEmpleado').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmmodificarempleado"></div>').appendTo('#formularios').load("personal/frmmodificarempleado.html",
            function() {
                $.getScript("personal/modificarempleado.js");
            });

    } else {// si se cargo abrimos el dialogo
		$('#divfrmmodificarempleado').dialog("open");
		reiniciarValidacionesModificarEmpleado();
    }
}

function mostrarAltaProveedor(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmAltaProveedor').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmaltaproveedor"></div>').appendTo('#formularios').load("proveedores/frmaltaproveedor.html",
            function() {
                $.getScript("proveedores/altaproveedor.js");
            });

    } else {// si se cargo abrimos el dialogo
		$('#divfrmaltaproveedor').dialog("open");
		reiniciarValidacionesAltaProveedor();
    }
}

function mostrarBajaProveedor(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmBajaProveedor').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmbajaproveedor"></div>').appendTo('#formularios').load("proveedores/frmbajaproveedor.html",
            function() {
                $.getScript("proveedores/bajaproveedor.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesBajaProveedor();
		$('#divfrmbajaproveedor').dialog("open");
    }
}

function mostrarModificarProveedor(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmModificarProveedor').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmmodificarproveedor"></div>').appendTo('#formularios').load("proveedores/frmmodificarproveedor.html",
            function() {
                $.getScript("proveedores/modificarproveedor.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesModificarProveedor();
		$('#divfrmmodificarproveedor').dialog("open");
    }
}


function mostrarAltaDispositivo(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmAltaDispositivo').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmaltadispositivo"></div>').appendTo('#formularios').load("dispositivos/frmaltadispositivo.html",
            function() {
                $.getScript("dispositivos/altadispositivo.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesAltaDispositivo();
		$('#divfrmaltadispositivo').dialog("open");
    }
}

function mostrarBajaDispositivo(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmBajaDispositivo').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmbajadispositivo"></div>').appendTo('#formularios').load("dispositivos/frmbajadispositivo.html",
            function() {
                $.getScript("dispositivos/bajadispositivo.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesBajaDispositivo();
		$('#divfrmbajadispositivo').dialog("open");
    }
}

function mostrarModificarDispositivo(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmModificarDispositivo').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmmodificardispositivo"></div>').appendTo('#formularios').load("dispositivos/frmmodificardispositivo.html",
            function() {
                $.getScript("dispositivos/modificardispositivo.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesModificarDispositivo();
		$('#divfrmmodificardispositivo').dialog("open");
    }
}


function mostrarAltaPieza(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmAltaPieza').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmaltapieza"></div>').appendTo('#formularios').load("piezasderepuesto/frmaltapieza.html",
            function() {
                $.getScript("piezasderepuesto/altapieza.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesAltaPieza();
		vaciarComboIdReparacion();
		cargarComboIdReparacion();
		vaciarComboCifProveedor();
		cargarComboCifProveedor();

		$('#divfrmaltapieza').dialog("open");
    }
}

function mostrarBajaPieza(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmBajaPieza').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmbajapieza"></div>').appendTo('#formularios').load("piezasderepuesto/frmbajapieza.html",
            function() {
                $.getScript("piezasderepuesto/bajapieza.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesBajaPieza();
		$('#divfrmbajapieza').dialog("open");
    }
}

function mostrarModificarPieza(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmModificarPieza').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmmodificarpieza"></div>').appendTo('#formularios').load("piezasderepuesto/frmmodificarpieza.html",
            function() {
                $.getScript("piezasderepuesto/modificarpieza.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesModificarPieza();
		$('#divfrmmodificarpieza').dialog("open");
    }
}


function mostrarAltaReparacion(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmAltaReparacion').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmaltareparacion"></div>').appendTo('#formularios').load("reparaciones/frmaltareparacion.html",
            function() {
                $.getScript("reparaciones/altareparacion.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesAltaReparacion();
		vaciarComboAltaReparaciones();
		vaciarComboAltaSolicitante();
		cargarComboAltaReparaciones();
		cargarComboAltaSolicitante();
		$('#divfrmaltareparacion').dialog("open");
    }
}

function mostrarBajaReparacion(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmBajaReparacion').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmbajareparacion"></div>').appendTo('#formularios').load("reparaciones/frmbajareparacion.html",
            function() {
                $.getScript("reparaciones/bajareparacion.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesBajaReparacion();
		vaciarComboBajaReparaciones();
		$('#divfrmbajareparacion').dialog("open");
    }
}

function mostrarModificarReparacion(){
	ocultarMenu();
	// Verifico si ya he cargado el formulario antes
    if ($('#frmModificarReparacion').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmmodificarreparacion"></div>').appendTo('#formularios').load("reparaciones/frmmodificarreparacion.html",
            function() {
                $.getScript("reparaciones/modificarreparacion.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesModificarReparacion();
		vaciarComboModificarReparaciones();
		$('#divfrmmodificarreparacion').dialog("open");
    }
}

document.getElementById("navListadoClientes").addEventListener("click", mostrarListadoClientes, false);
document.getElementById("navListadoProveedores").addEventListener("click", mostrarListadoProveedores, false);
document.getElementById("navListadoEmpleados").addEventListener("click", mostrarListadoEmpleados, false);
document.getElementById("navListadoDispositivos").addEventListener("click", mostrarListadoDispositivos, false);
document.getElementById("navListadoReparaciones").addEventListener("click", mostrarListadoReparaciones, false);

//LISTADOS
function ocultarInicio(){
	document.getElementById("jumbo").style.display = "none";
}

//document.getElementById("volverListadoCliente").addEventListener("click",volverListado,false);
function volverListado(){	
	document.getElementById("jumbo").style.display = "block";
	$("#listados").html("");
}

var oAjaxListado = null;
var tipoListado = null;

function mostrarListadoClientes(){
	ocultarInicio();
	$("#listados").html("");
	tipoListado="clientes";
	llamadaAjaxListado("clientes/listadoClientes.php");
}

function mostrarListadoProveedores(){
	ocultarInicio();
	$("#listados").html("");
	tipoListado="proveedores";
	llamadaAjaxListado("proveedores/listadoProveedores.php");
}

function mostrarListadoEmpleados(){
	ocultarInicio();
	$("#listados").html("");
	tipoListado="empleados";
	llamadaAjaxListado("personal/listadoEmpleados.php");
}


function mostrarListadoDispositivos(){    
	ocultarInicio();
	$("#listados").html("");
	tipoListado="dispositivos";	
	// Verifico si ya he cargado el formulario antes
    if ($('#frmListadoDispositivos').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmlistadodispositivos"></div>').appendTo('#formularios').load("dispositivos/frmlistardispositivos.html",
            function() {
                $.getScript("dispositivos/listadodispositivos.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesListadoDispositivos();		
		$('#divfrmlistadodispositivos').dialog("open");
    }
}

function mostrarListadoReparaciones(){
    ocultarInicio();
	$("#listados").html("");
	tipoListado="reparaciones";	
	// Verifico si ya he cargado el formulario antes
    if ($('#frmListadoReparaciones').size() == 0) {// si la longitud es 0 no se cargo
        $('<div id="divfrmlistadoreparaciones"></div>').appendTo('#formularios').load("reparaciones/frmlistarreparaciones.html",
            function() {
                $.getScript("reparaciones/listarreparaciones.js");
            });

    } else {// si se cargo abrimos el dialogo
		reiniciarValidacionesListadoReparaciones();		
		$('#divfrmlistadoreparaciones').dialog("open");
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

function llamadaAjaxListado(sURL){

	oAjaxListado = objetoXHR();

	oAjaxListado.open("GET",sURL,true);

	oAjaxListado.onreadystatechange = respuestaListado;

	oAjaxListado.send(null);
}

function llamadaAjaxListadoParametros(sURL,sDatos){

	oAjaxListado = objetoXHR();
		
	oAjaxListado.open("POST",sURL,true);

	oAjaxListado.onreadystatechange = respuestaListado;

	oAjaxListado.send(sDatos);
}


function respuestaListado(){
	if(oAjaxListado.readyState == 4 && oAjaxListado.status ==200){
		//Recojo el documento XML en variable global
		var oXML = oAjaxListado.responseXML;
		switch(tipoListado){
			//SIN FILTROS
			case 'clientes':
			procesaListadoClientesXML(oXML);
			break;

			case 'proveedores':
			procesaListadoProveedoresXML(oXML);
			break;

			case 'empleados':
			procesaListadoEmpleadosXML(oXML);
			break;

			/*CON FILTROS

			case 'dispositivos':
			procesaListadoDispositivosXML(oXML);
			break;

			case 'reparaciones':
			procesaListadoReparacionesXML(oXML);
			break;

			case 'FGFGGFFGSG':
			(oXML);
			break;*/
		}
	}
}

function procesaListadoClientesXML(oXML){
	var jqTabla = $('<table class="table" id="listado">');

	var oCliente = oXML.getElementsByTagName("cliente");
	$('<tr><th>DNI</th><th>NOMBRE</th><th>APELLIDOS</th><th>TELEFONO</th><th>DIRECCION</th>').appendTo(jqTabla);

	for(var i=0;i<oCliente.length;i++){
		$('<tr>' +
			'<td>'+oCliente[i].getElementsByTagName('idcliente')[0].textContent+'</td>' +
			'<td>'+oCliente[i].getElementsByTagName('nombre')[0].textContent+'</td>' +
			'<td>'+oCliente[i].getElementsByTagName('apellido')[0].textContent+'</td>' +
			'<td>'+oCliente[i].getElementsByTagName('movil')[0].textContent+'</td>' +
			'<td>'+oCliente[i].getElementsByTagName('direccion')[0].textContent+'</td>' +
		 '</tr>').appendTo(jqTabla);
	 }
	 jqTabla.appendTo("#listados");
	  $('<input type="button" name="volver" class="btn bg-success btn-primary" value="Volver" onclick ="volverListado();" />').appendTo("#listados");

}


function procesaListadoEmpleadosXML(oXML){
	var jqTabla = $('<table class="table" id="listado">');

	var oEmpleado = oXML.getElementsByTagName("empleado");
	$('<tr><th>ID</th><th>NOMBRE</th><th>APELLIDOS</th><th>TELEFONO</th><th>DIRECCION</th>').appendTo(jqTabla);

	for(var i=0;i<oEmpleado.length;i++){
		$('<tr>' +
			'<td>'+oEmpleado[i].getElementsByTagName('id')[0].textContent+'</td>' +
			'<td>'+oEmpleado[i].getElementsByTagName('nombre')[0].textContent+'</td>' +
			'<td>'+oEmpleado[i].getElementsByTagName('apellido')[0].textContent+'</td>' +
			'<td>'+oEmpleado[i].getElementsByTagName('movil')[0].textContent+'</td>' +
			'<td>'+oEmpleado[i].getElementsByTagName('direccion')[0].textContent+'</td>' +
		 '</tr>').appendTo(jqTabla);
	 }
	 jqTabla.appendTo("#listados");
	  $('<input type="button" name="volver" class="btn bg-success btn-primary" value="Volver" onclick ="volverListado();" />').appendTo("#listados");

}


function procesaListadoProveedoresXML(oXML){
	var jqTabla = $('<table class="table" id="listado">');

	var oProveedor = oXML.getElementsByTagName("proveedor");
	$('<tr><th>ID</th><th>NOMBRE</th><th>APELLIDOS</th><th>TELEFONO</th><th>DIRECCION</th>').appendTo(jqTabla);

	for(var i=0;i<oProveedor.length;i++){
		$('<tr>' +
			'<td>'+oProveedor[i].getElementsByTagName('id')[0].textContent+'</td>' +
			'<td>'+oProveedor[i].getElementsByTagName('nombre')[0].textContent+'</td>' +
			'<td>'+oProveedor[i].getElementsByTagName('apellido')[0].textContent+'</td>' +
			'<td>'+oProveedor[i].getElementsByTagName('movil')[0].textContent+'</td>' +
			'<td>'+oProveedor[i].getElementsByTagName('direccion')[0].textContent+'</td>' +
		 '</tr>').appendTo(jqTabla);
	 }
	 jqTabla.appendTo("#listados");
	  $('<input type="button" name="volver" class="btn bg-success btn-primary" value="Volver" onclick ="volverListado();" />').appendTo("#listados");

}


/*function procesaListadoDispositivosXML(oXML){
	var jqTabla = $('<table class="table" id="listado">');

	var oDispositivo = oXML.getElementsByTagName("dispositivo");
	$('<tr><th>ID</th><th>MARCA</th><th>MODELO</th><th>GARANTIA</th><th>FECHA ENTRADA</th>th>FECHA SALIDA</th>').appendTo(jqTabla);

	for(var i=0;i<oDispositivo.length;i++){
		$('<tr>' +
			'<td>'+oDispositivo[i].getElementsByTagName('id_dispositivo')[0].textContent+'</td>' +
			'<td>'+oDispositivo[i].getElementsByTagName('marca')[0].textContent+'</td>' +
			'<td>'+oDispositivo[i].getElementsByTagName('modelo')[0].textContent+'</td>' +
			'<td>'+oDispositivo[i].getElementsByTagName('garantia')[0].textContent+'</td>' +
			'<td>'+oDispositivo[i].getElementsByTagName('entrada')[0].textContent+'</td>' +
			'<td>'+oDispositivo[i].getElementsByTagName('salida')[0].textContent+'</td>' +
		 '</tr>').appendTo(jqTabla);
	 }
	 jqTabla.appendTo("#listados");
	  $('<input type="button" name="volver" class="btn bg-success btn-primary" value="Volver" onclick ="volverListado();" />').appendTo("#listados");

}*/
