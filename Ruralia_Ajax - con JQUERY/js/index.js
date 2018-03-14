/* INICIO */
$("#menu").menu({
    classes: {
        "ui-menu": "highlight"
    }
});

$("#mnuAltaPropietario").click(cargaAltaPropietario);

function cargaAltaPropietario() {

    $("#formularios").load("altaPropietario/frmAltaPropietario.html")

}

/* VARIABLES PARA AJAX */
var oAjaxAltaProp = null;
var oAjaxAltaCliente = null;
var oAjaxAltaUbicacion = null;
var oAjaxGetPropietarios = null;
var oAjaxGetUbicaciones = null;
var oAjaxAltaCasa = null;


// Manejo al inicio
window.addEventListener('load', iniciar, false);

function iniciar() {

    frmAltaPropietario.btnAceptarProp.addEventListener('click', altaPropietario, false);
    frmAltaCliente.btnAceptarCliente.addEventListener('click', altaCliente, false);
    frmAltaUbicacion.btnAceptarUbicacion.addEventListener('click', altaUbicacion, false);
    document.getElementById("mnuAltaCasa").addEventListener('click', mostrarfrmAltaCasa, false);
    $('#btnAltaCasa').click(altaCasa);
}

function altaPropietario() {

    // Aqui habría que hacer la validacion del formulario
    // if (validarAltaPropietario()){

    //Creo un objeto propietario
    var oProp = new Propietario(frmAltaPropietario.txtCodProp.value, frmAltaPropietario.txtNombreProp.value, frmAltaPropietario.txtApellidosProp.value, frmAltaPropietario.txtTelefonoProp.value);

    // Formateo de parametro POST
    var sParametroPOST = "datos=" + JSON.stringify(oProp);

    // Codifico para envio
    sParametroPOST = encodeURI(sParametroPOST);

    // Script de envio
    var sURL = encodeURI("php/altaPropietario.php");

    llamadaAjaxAltaPropietario(sURL, sParametroPOST);
}


/* LLAMADAS AJAX */
function llamadaAjaxAltaPropietario(sURL, sParametroPOST) {

    oAjaxAltaProp = objetoXHR();

    oAjaxAltaProp.open("POST", sURL, true);

    // Para peticiones con metodo POST        
    oAjaxAltaProp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    oAjaxAltaProp.onreadystatechange = respuestaAltaProp;
    //	oAjaxAltaProp.addEventListener("readystatechange",respuestaAltaProp,false);

    oAjaxAltaProp.send(sParametroPOST);
}

function respuestaAltaProp() {

    if (oAjaxAltaProp.readyState == 4 && oAjaxAltaProp.status == 200) {
        var oArrayRespuesta = JSON.parse(oAjaxAltaProp.responseText);

        if (oArrayRespuesta[0] == true) {
            alert("Error : " + oArrayRespuesta[1]);
        } else {
            alert("OK : " + oArrayRespuesta[1]);
        }
    }
}

function altaCliente() {

    // Aqui habría que hacer la validacion del formulario
    // if (validarAltaCliente()){

    //Creo un objeto cliente
    var oCliente = new Cliente(frmAltaCliente.txtCodCliente.value, frmAltaCliente.txtNombreCliente.value, frmAltaCliente.txtApellidosCliente.value, frmAltaCliente.txtTelefonoCliente.value);

    // Formateo de parametro POST
    var sParametroPOST = "datos=" + JSON.stringify(oCliente);

    // Codifico para envio
    sParametroPOST = encodeURI(sParametroPOST);

    // Script de envio
    var sURL = encodeURI("php/altaCliente.php");

    llamadaAjaxAltaCliente(sURL, sParametroPOST);
}

function llamadaAjaxAltaCliente(sURL, sParametroPOST) {

    oAjaxAltaCliente = objetoXHR();

    oAjaxAltaCliente.open("POST", sURL, true);

    // Para peticiones con metodo POST        
    oAjaxAltaCliente.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    oAjaxAltaCliente.onreadystatechange = respuestaAltaCliente;
    //	oAjaxAltaCliente.addEventListener("readystatechange",respuestaAltaCliente,false);

    oAjaxAltaCliente.send(sParametroPOST);
}

function respuestaAltaCliente() {

    if (oAjaxAltaCliente.readyState == 4 && oAjaxAltaCliente.status == 200) {
        var oArrayRespuesta = JSON.parse(oAjaxAltaCliente.responseText);

        if (oArrayRespuesta[0] == true) {
            alert("Error : " + oArrayRespuesta[1]);
        } else {
            alert("OK : " + oArrayRespuesta[1]);
        }
    }
}

function altaUbicacion() {

    // Aqui habría que hacer la validacion del formulario
    // if (validarAltaUbicacion()){

    //Desactivar boton de envio
    frmAltaUbicacion.btnAceptarUbicacion.disabled = true;

    var sParametroGET = encodeURI("ubicacion=" + frmAltaUbicacion.txtUbicacion.value);

    // Script de envio
    var sURL = encodeURI("php/altaUbicacion.php?");

    llamadaAjaxAltaUbicacion(sURL, sParametroGET);
}

function llamadaAjaxAltaUbicacion(sURL, sParametroGET) {

    oAjaxAltaUbicacion = objetoXHR();

    oAjaxAltaUbicacion.open("GET", sURL + sParametroGET, true);

    oAjaxAltaUbicacion.onreadystatechange = respuestaAltaUbicacion;

    oAjaxAltaUbicacion.send(null);
}

function respuestaAltaUbicacion() {

    if (oAjaxAltaUbicacion.readyState == 4 && oAjaxAltaUbicacion.status == 200) {

        var oArrayRespuesta = JSON.parse(oAjaxAltaUbicacion.responseText);

        if (oArrayRespuesta[0] == true) {
            alert("Error : " + oArrayRespuesta[1]);
        } else {
            alert("OK : " + oArrayRespuesta[1]);
        }

        //Activar boton de envio
        frmAltaUbicacion.btnAceptarUbicacion.disabled = false;


    }
}

/* Rellenar combo - desplegable - <select> */
function mostrarfrmAltaCasa() {

    //Aqui viene mostrar el formulario
    // frmAltaCasa.display = block;

    //Rellenar combo propietarios
    llamadaAjaxGetPropietarios("php/getPropietarios.php");


    //Rellenar combo ubicaciones
    llamadaAjaxGetUbicaciones("php/getUbicaciones.php");

}

function llamadaAjaxGetUbicaciones(sURL) {

    oAjaxGetUbicaciones = objetoXHR();

    oAjaxGetUbicaciones.open("GET", sURL, true);

    oAjaxGetUbicaciones.onreadystatechange = respuestaGetUbicaciones;

    oAjaxGetUbicaciones.send(null);
}

function respuestaGetUbicaciones() {
    if (oAjaxGetUbicaciones.readyState == 4 && oAjaxGetUbicaciones.status == 200) {

        var oArrayUbicaciones = JSON.parse(oAjaxGetUbicaciones.responseText);

        $("#cmbUbicaciones").empty();

        $.each(oArrayUbicaciones, function(i, elemento) {

            $('<option value="' + elemento.CodUbic + '" >' + elemento.Nombre + '</option>').appendTo("#cmbUbicaciones");

        });

    }
}




function llamadaAjaxGetPropietarios(sURL) {

    oAjaxGetPropietarios = objetoXHR();

    oAjaxGetPropietarios.open("GET", sURL, true);

    oAjaxGetPropietarios.onreadystatechange = respuestaGetPropietarios;

    oAjaxGetPropietarios.send(null);
}

function respuestaGetPropietarios() {
    if (oAjaxGetPropietarios.readyState == 4 && oAjaxGetPropietarios.status == 200) {

        var oArrayPropietarios = JSON.parse(oAjaxGetPropietarios.responseText);

        $("#cmbPropietario").empty();

        jQuery.each(oArrayPropietarios, function(i, elemento) {


            $('<option value="' + elemento.CodPropietario + '" >' + elemento.Nombre + '</option>').appendTo("#cmbPropietario");



        });

    }
}

function altaCasa() {

    // if(validarAltaCasa())

    //Creo un objeto casa

    var sPiscina = ($('#chkPiscina').prop("checked") == true ? "S" : "N");


    var oCasa = new Casa(0, $('#cmbPropietario').val(), $('#cmbUbicaciones').val(), frmAltaCasa.txtDescripcion.value, $('#txtHabitaciones').val(), sPiscina, frmAltaCasa.txtPrecio.value);

    // Formateo de parametro POST
    var sParametroPOST = "datos=" + JSON.stringify(oCasa);

    // Codifico para envio
    sParametroPOST = encodeURI(sParametroPOST);

    // Script de envio
    var sURL = encodeURI("php/altaCasa.php");

    llamadaAjaxAltaCasa(sURL, sParametroPOST);
}


function llamadaAjaxAltaCasa(sURL, sParametroPOST) {

    oAjaxAltaCasa = objetoXHR();

    oAjaxAltaCasa.open("POST", sURL, true);

    // Para peticiones con metodo POST        
    oAjaxAltaCasa.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    oAjaxAltaCasa.onreadystatechange = respuestaAltaCasa;
    //	oAjaxAltaCasa.addEventListener("readystatechange",respuestaAltaCasa,false);

    oAjaxAltaCasa.send(sParametroPOST);
}

function respuestaAltaCasa() {

    if (oAjaxAltaCasa.readyState == 4 && oAjaxAltaCasa.status == 200) {
        var oArrayRespuesta = JSON.parse(oAjaxAltaCasa.responseText);

        if (oArrayRespuesta[0] == true) {
            alert("Error : " + oArrayRespuesta[1]);
        } else {
            alert("OK : " + oArrayRespuesta[1]);
        }
    }
}