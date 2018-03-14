// Variables globales
var oDGT = new DGT();

datosIniciales();

function datosIniciales(){
	
oDGT.altaConductor( new Conductor("1", "Fernando", "Berenguer", "Calle falsa", new Date("2018/12/25")));
oDGT.altaConductor( new Conductor("2", "Fer", "Ber", "Calle real", new Date("2018/12/25")));
oDGT.altaConductor( new Conductor("3", "nando", "B", "Calle 3", new Date("2018/12/25")));
oDGT.altaConductor( new Conductor("4", "Fernan", "B", "Calle 4", new Date("2018/12/25")));
oDGT.altaConductor( new Conductor("5", "Fernando", "B", "Calle 5", new Date("2018/12/25")));

oDGT.altaGuardia(new Guardia("1", "Juan", "Perez", "Calle 1", "Capitan"));
oDGT.altaGuardia(new Guardia("2", "Miguel", "Lopez", "Calle 2", "General"));
oDGT.altaGuardia(new Guardia("3", "David", "Ocampos", "Calle 3", "Marinero informatico"));

oDGT.altaMulta(new Grave(parseInt("4"), new Conductor("3", "nando", "B", "Calle 3", new Date("2018/12/25")), new Guardia("3", "David", "Ocampos", "Calle 3", "Marinero informatico"), parseFloat("150"), "Radar", new Date("2017/12/22"), parseInt("6")));


oDGT.altaMulta(new Leve(parseInt("1"), new Conductor("2", "Fer", "Ber", "Calle real", new Date("2018/12/25")), new Guardia("1", "Juan", "Perez", "Calle 1", "Capitan"), parseFloat("120"), "Velocidad", new Date("2010/10/20"), true));
oDGT.altaMulta(new Leve(parseInt("2"), new Conductor("1", "Fernando", "Berenguer", "Calle falsa", new Date("2018/12/25")), new Guardia("2", "Miguel", "Lopez", "Calle 2", "General"), parseFloat("180"), "Parking", new Date("2010/10/25"), false));
oDGT.altaMulta(new Leve(parseInt("3"), new Conductor("4", "Fernan", "B", "Calle 4", new Date("2018/12/25")), new Guardia("1", "Juan", "Perez", "Calle 1", "Capitan"), parseFloat("100"), "Cinturon", new Date("2010/10/18"), true));



}


function altaCond(){

	top.frames["formularios"].document.frmAltaConductor.style.display = "block";
	top.frames["formularios"].document.frmAltaGuardia.style.display = "none";
	top.frames["formularios"].document.frmRegMulta.style.display = "none";
	top.frames["formularios"].document.frmPagarMulta.style.display = "none";
	top.frames["formularios"].document.frmImprimirMulta.style.display = "none";
	top.frames["formularios"].document.frmMultaFecha.style.display = "none";
}

function altaGuar(){
	
	top.frames["formularios"].document.frmAltaGuardia.style.display = "block";
	top.frames["formularios"].document.frmRegMulta.style.display = "none";
	top.frames["formularios"].document.frmAltaConductor.style.display = "none";
	top.frames["formularios"].document.frmPagarMulta.style.display = "none";
	top.frames["formularios"].document.frmImprimirMulta.style.display = "none";
	top.frames["formularios"].document.frmMultaFecha.style.display = "none";

}

function registroMulta(){

	top.frames["formularios"].document.frmRegMulta.style.display = "block";
	top.frames["formularios"].document.frmAltaConductor.style.display = "none";
	top.frames["formularios"].document.frmAltaGuardia.style.display = "none";
	top.frames["formularios"].document.frmPagarMulta.style.display = "none";
	top.frames["formularios"].document.frmImprimirMulta.style.display = "none";
	top.frames["formularios"].document.frmMultaFecha.style.display = "none";
}

function pagarMulta(){

	top.frames["formularios"].document.frmPagarMulta.style.display = "block";
	top.frames["formularios"].document.frmRegMulta.style.display = "none";
	top.frames["formularios"].document.frmAltaConductor.style.display = "none";
	top.frames["formularios"].document.frmAltaGuardia.style.display = "none";
	top.frames["formularios"].document.frmImprimirMulta.style.display = "none";
	top.frames["formularios"].document.frmMultaFecha.style.display = "none";
	
}

function imprimirMulta(){
	top.frames["formularios"].document.frmImprimirMulta.style.display = "block";
	top.frames["formularios"].document.frmRegMulta.style.display = "none";
	top.frames["formularios"].document.frmAltaConductor.style.display = "none";
	top.frames["formularios"].document.frmAltaGuardia.style.display = "none";
	top.frames["formularios"].document.frmPagarMulta.style.display = "none";
	top.frames["formularios"].document.frmMultaFecha.style.display = "none";
	
}

function multaFecha(){
	top.frames["formularios"].document.frmMultaFecha.style.display = "block";
	top.frames["formularios"].document.frmImprimirMulta.style.display = "none";
	top.frames["formularios"].document.frmRegMulta.style.display = "none";
	top.frames["formularios"].document.frmAltaConductor.style.display = "none";
	top.frames["formularios"].document.frmAltaGuardia.style.display = "none";
	top.frames["formularios"].document.frmPagarMulta.style.display = "none";
}


function procesoAltaConductor(){

	cad="";
	var sNifCond = top.frames['formularios'].document.frmAltaConductor.txtNifConductor.value.trim();
	var sNombreCond = top.frames["formularios"].document.frmAltaConductor.txtNombreConductor.value.trim();
	var sApellidosConductor = top.frames["formularios"].document.frmAltaConductor.txtApellidosConductor.value.trim();
	var sDireccionCond = top.frames["formularios"].document.frmAltaConductor.txtDireccionConductor.value.trim();
	var fCaducidadCond = top.frames["formularios"].document.frmAltaConductor.fechaCaducidadCarnetConductor.value.trim();

	if( sNifCond.length == 0 || sNombreCond.length == 0 || sApellidosConductor.length == 0 || sDireccionCond.length == 0 || fCaducidadCond.length == 0){
		cad="Datos incompletos";
	} else {
	
		var oConductor = new Conductor(sNifCond,sNombreCond,sApellidosConductor,sDireccionCond,new Date(fCaducidadCond));
		
		if (oDGT.altaConductor(oConductor)){
			cad="El conductor ya ha sido registrado anteriormente";
		}
		else{
			cad="Conductor registrado correctamente";
		}
		top.frames["formularios"].document.frmAltaConductor.style.display = "none";
		top.frames["formularios"].document.frmAltaConductor.reset();			
		} 

	var oCapa= top.frames['listados'].document.getElementById('capa');

	oCapa.innerHTML=cad;

}

function procesoAltaGuardia(){
	var cad="";

	var sNifGuardia = top.frames['formularios'].document.frmAltaGuardia.txtNifGuardia.value.trim();
	var sNombreGuar = top.frames["formularios"].document.frmAltaGuardia.txtNombreGuardia.value.trim();
	var sApellidosGuardia = top.frames["formularios"].document.frmAltaGuardia.txtApellidosGuardia.value.trim();
	var sDireccionGuar = top.frames["formularios"].document.frmAltaGuardia.txtDireccionGuardia.value.trim();
	var rangoGuardia = top.frames["formularios"].document.frmAltaGuardia.rangoGuardiaCivil.value.trim();

	if( sNifGuardia.length == 0 || sNombreGuar.length == 0 || sApellidosGuardia.length == 0 || sDireccionGuar.length == 0 || rangoGuardia.length == 0) {
		cad="Datos incompletos";
	} else {
	
		var oGuardia = new Guardia(sNifGuardia,sNombreGuar,sApellidosGuardia,sDireccionGuar,rangoGuardia);
		
		if (oDGT.altaGuardia(oGuardia)){
			cad="El guardia ya ha sido registrado anteriormente";
		}
		else{
			cad="Guardia registrado correctamente";
		}
		top.frames["formularios"].document.frmAltaGuardia.style.display = "none";
		top.frames["formularios"].document.frmAltaGuardia.reset();
		} 
	var oCapa= top.frames['listados'].document.getElementById('capa');

	oCapa.innerHTML=cad;
}

function procesoAltaMulta(){

	var sIdMulta = top.frames['formularios'].document.frmRegMulta.idMulta.value.trim();
	var sNifCond = top.frames["formularios"].document.frmRegMulta.nifConductorMulta.value.trim();
	var sNifGuardia = top.frames["formularios"].document.frmRegMulta.nifGuardiaMulta.value.trim();
	var sImporteMulta = top.frames['formularios'].document.frmRegMulta.importeMulta.value.trim();
	var sDescripcion = top.frames["formularios"].document.frmRegMulta.descripcionMulta.value.trim();
	var dtFecha = top.frames["formularios"].document.frmRegMulta.fechaMulta.value.trim();


	var rbtLeve = top.frames["formularios"].document.getElementById("rbtGravedad-0").checked;
	
	if( sIdMulta.length == 0 || sNifCond.length == 0 || sNifGuardia.length == 0 || sImporteMulta.length == 0 || sDescripcion.length == 0 || dtFecha.length == 0) {
		cad="Datos incompletos";
	} else {
	
		if (rbtLeve){
		var rbtBonificada = top.frames["formularios"].document.frmMultaLeve.bonificada.checked;
		var oMulta = new Leve(parseInt(sIdMulta),new Conductor(sNifCond,"","","",""),new Guardia(sNifGuardia,"","","",""),parseFloat(sImporteMulta),sDescripcion,new Date(dtFecha),rbtBonificada);
		cad=oDGT.altaMulta(oMulta);
		top.frames["formularios"].document.frmRegMulta.style.display = "none";
		top.frames["formularios"].document.frmRegMulta.reset();
		}
		else{
		var sPuntos = top.frames["formularios"].document.getElementById("retiradaPuntos").value;
		if (sPuntos == "" || sPuntos <= 0) {
			cad="Debe rellenar los puntos";
		}else {
		var oMulta = new Grave(parseInt(sIdMulta),new Conductor(sNifCond,"","","",""),new Guardia(sNifGuardia,"","","",""),parseFloat(sImporteMulta),sDescripcion,new Date(dtFecha),parseInt(sPuntos));
		cad=oDGT.altaMulta(oMulta);
		top.frames["formularios"].document.frmRegMulta.style.display = "none";
		top.frames["formularios"].document.frmRegMulta.reset();
		}
	}
	}
		var oCapa= top.frames['listados'].document.getElementById('capa');

		oCapa.innerHTML=cad;
}

function procesoPagarMulta(){

		var idMultaAPagar = top.frames["formularios"].document.frmPagarMulta.idMulta.value;
		if (idMultaAPagar.length == 0){
			cad="Datos incompletos";
		}
		else{
			cad=oDGT.pagaMulta(idMultaAPagar);
			top.frames["formularios"].document.frmPagarMulta.style.display = "none";
			top.frames["formularios"].document.frmPagarMulta.reset();
		}		

		var oCapa= top.frames['listados'].document.getElementById('capa');

		oCapa.innerHTML=cad;

}

function procesoMultaFecha(){

	var dtFechaInicio = top.frames["formularios"].document.frmMultaFecha.fechaInicio.value.trim();
	var dtFechaFin = top.frames["formularios"].document.frmMultaFecha.fechaFin.value.trim();
		

		if (dtFechaInicio.length == 0 || dtFechaFin.length == 0){
			cad="Datos incompletos";
		}
		else{
			cad=oDGT.multaFecha(dtFechaInicio,dtFechaFin);
			top.frames["formularios"].document.frmMultaFecha.style.display = "none";
			top.frames["formularios"].document.frmMultaFecha.reset();
		}		

		var oCapa= top.frames['listados'].document.getElementById('capa');

		oCapa.innerHTML=cad;

}

function procesoImprimirMulta(){

	
	var imprimirMultaId = top.frames["formularios"].document.frmImprimirMulta.idMulta.value.trim();
	
	if (imprimirMultaId.length == 0) {
		cad="Datos incompletos";
	}else{

		var cad=oDGT.multaImprimir(imprimirMultaId);
		top.frames["formularios"].document.frmImprimirMulta.style.display = "none";
		top.frames["formularios"].document.frmImprimirMulta.reset();
	}
	


	/*var oCapa= top.frames['listados'].document.getElementById('capa');

	oCapa.innerHTML=cad;*/

	var imprimirMultaVentana = window.open();

	imprimirMultaVentana.document.write(cad);
	imprimirMultaVentana.document.close();	

}

 


function mostrarListadoConductor(){

	var cad="";

	cad=oDGT.listadoConductor();

	var oCapa= top.frames['listados'].document.getElementById('capa');

	oCapa.innerHTML=cad;

}

function mostrarListadoGuardia(){

	var cad="";

	cad=oDGT.listadoGuardia();

	var oCapa= top.frames['listados'].document.getElementById('capa');

	oCapa.innerHTML=cad;

}

function multaGuardia(){

	var cad="";

	cad=oDGT.listadoMultaGuardia();

	var oCapa= top.frames['listados'].document.getElementById('capa');

	oCapa.innerHTML=cad;

}

function mostrarSaldoConductor(){

	var cad="";

	cad=oDGT.saldoConductor();

	var oCapa= top.frames['listados'].document.getElementById('capa');

	oCapa.innerHTML=cad;
}

function mostrarPuntosConductor(){
	var cad="";

	cad=oDGT.puntosConductor();

	var oCapa= top.frames['listados'].document.getElementById('capa');

	oCapa.innerHTML=cad;
}

