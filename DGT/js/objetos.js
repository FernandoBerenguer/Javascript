// Clase Persona - constructor
function Persona(sNif, sNombre, sApellidos, sDireccion){
	this.nombre = sNombre;
	this.apellidos = sApellidos;
	this.nif = sNif;
	this.direccion = sDireccion;
	
}

Persona.prototype.toHTMLRow = function(){

	var sHTMLRow = "";
	
	sHTMLRow = "<tr><td>" + this.nif + "</td><td>" + this.nombre + "</td><td>" + this.apellidos + "</td><td>" + this.direccion + "</td></tr>";
	
	return sHTMLRow;
}

//Clase conductor - constructor
function Conductor(sNif, sNombre, sApellidos, sDireccion, dFechaCadu){
	Persona.call(this,sNif, sNombre, sApellidos, sDireccion);
	
	this.fechaCadu = dFechaCadu;
}

// Aqui es donde heredamos propiedades y metodos
Conductor.prototype = Object.create(Persona.prototype);
Conductor.prototype.constructor = Conductor;

Conductor.prototype.toHTMLRow = function(){

	var sHTMLRow = "";
	
	sHTMLRow = "<tr><td>" + this.nif + "</td><td>" + this.nombre + "</td><td>" + this.apellidos + "</td><td>" + this.direccion + "</td><td>" + this.fechaCadu.toLocaleDateString('es-ES') + "</td></tr>";
	
	return sHTMLRow;
}


//Clase Guardia - constructor
function Guardia(sNif, sNombre, sApellidos, sDireccion, sRango){
	Persona.apply(this, [ sNif, sNombre, sApellidos, sDireccion ]);
	
	this.rango = sRango;
}

// Aqui es donde heredamos propiedades y metodos
Guardia.prototype = Object.create(Persona.prototype);
Guardia.prototype.constructor = Guardia;

Guardia.prototype.toHTMLRow = function(){

	var sHTMLRow = "";
	
	sHTMLRow = "<tr><td>" + this.nif + "</td><td>" + this.nombre + "</td><td>" + this.apellidos + "</td><td>" + this.direccion + "</td><td>" + this.rango + "</td></tr>";
	
	return sHTMLRow;
}

//Clase Multa
function Multa(sID, oConductor, oGuardia, sImporteMulta, sDescripcionMulta, dtFechaMulta){
	this.id = sID;
	this.conductor = oConductor;
	this.guardia = oGuardia;
	this.importeMulta = sImporteMulta;
	this.pagada = false;
	this.descripcionMulta = sDescripcionMulta;
	this.fechaMulta = dtFechaMulta;
}
// Aqui es donde heredamos propiedades y metodos
// Multa.prototype = Object.create(Persona.prototype);
Multa.prototype.constructor = Multa;

Multa.prototype.toHTMLRow = function(){

	var sHTMLRow = "";
	
	sHTMLRow = "<tr><td>" + this.id + "</td><td>" + this.conductor.nif + "</td><td>" + this.guardia.nif + "</td><td>" + this.importeMulta + "</td><td>" + this.pagada + "</td><td>" + this.descripcionMulta + "</td><td>" + this.fechaMulta.toLocaleDateString('es-ES') +"</td></tr>";
	
	return sHTMLRow;
}
//Clase multa Leve
function Leve(sID, oConductor, oGuardia, sImporteMulta, sDescripcionMulta, dtFechaMulta, bBonificada){
	Multa.call(this,sID, oConductor,oGuardia, sImporteMulta, sDescripcionMulta, dtFechaMulta);
	
	this.bonificada = bBonificada;
}

Leve.prototype = Object.create(Multa.prototype);
Leve.prototype.constructor = Leve;

Leve.prototype.toHTMLRow = function(){

	var sHTMLRow = "";
	
	sHTMLRow = "<tr><td>" + this.id + "</td><td>" + this.conductor.nif + "</td><td>" + this.guardia.nif + "</td><td>" + this.importeMulta + "</td><td>" + this.pagada + "</td><td>" + this.descripcionMulta + "</td><td>" + this.fechaMulta.toLocaleDateString('es-ES') +"</td><td>" + this.bonificada +"</td></tr>";
	
	return sHTMLRow;
}

//Clase multa Grave
function Grave(sID, oConductor, oGuardia, sImporteMulta, sDescripcionMulta, dtFechaMulta, sRetiradaPuntos){
	Multa.call(this,sID, oConductor, oGuardia, sImporteMulta, sDescripcionMulta, dtFechaMulta);
	
	this.retiradaPuntos = sRetiradaPuntos;
}

Grave.prototype = Object.create(Multa.prototype);
Grave.prototype.constructor = Grave;

Grave.prototype.toHTMLRow = function(){

	var sHTMLRow = "";
	
	sHTMLRow = "<tr><td>" + this.id + "</td><td>" + this.conductor.nif + "</td><td>" +  this.guardia.nif + "</td><td>" + this.importeMulta + "</td><td>" + this.pagada + "</td><td>" + this.descripcionMulta + "</td><td>" + this.fechaMulta.toLocaleDateString('es-ES') +"</td><td>" + this.retiradaPuntos +"</td></tr>";
	
	return sHTMLRow;
}

Leve.prototype.toPrint = function(){



	var cadPrint="";

	cadPrint+= "<h3>Formato multa para imprimir</h3>"+
			   "<div class='container'><table class='table table-bordered'><thead><tr><th colspan='5'><center>Sancion Numero: "+this.id+"</center></th></tr></thead>"+
    		   "<thead><tr><th colspan='6'>Datos condcutor</th></tr></thead>"+
    		   "<tbody><tr><th>NIF:</th><th>Nombre:</th><th>Apellidos:</th><th>Direccion:</th><th>Caducidad del carnet:</th></tr>"+
    		   "<tr><td>"+this.conductor.nif+"</td><td>"+this.conductor.nombre+"</td><td>"+this.conductor.apellidos+"</td><td>"+this.conductor.direccion+"</td><td>"+this.conductor.fechaCadu.toLocaleDateString('es-ES')+"</td></tr>"+
		       "</tbody>"+
		       "<thead><tr><th colspan='5'>Datos Guardia Civil</th></tr></thead>"+
		       "<tbody><tr><th>NIF:</th><th colspan='2'>Nombre:</th><th colspan='2'>Rango:</th></tr>"+
		       "<tr><td>"+this.guardia.nif+"</td><td colspan='2'>"+this.guardia.nombre+"</td><td colspan='2'>"+this.guardia.rango+"</td></tr>"+
		       "</tbody>"+
		       "<thead><tr><th colspan='5'>Datos Multa</th></tr></thead>";
		       

		       if (!this.bonificada){
		       	cadPrint+="<tbody><tr><th>Gravedad:</th><th>Bonificacion:</th><th>Importe:</th><th>Descripcion:</th><th>Fecha:</th></tr>"+
		       	"<tr><td>Leve</td><td>NO</td><td>"+this.importeMulta+"</td><td>"+this.descripcionMulta+"</td><td>"+this.fechaMulta.toLocaleDateString('es-ES')+"</td></tr>";    	
		       }
		       else {		      
		       	cadPrint+="<tbody><tr><th>Gravedad:</th><th>Bonificacion:</th><th>Importe (bonificado):</th><th>Descripcion:</th><th>Fecha:</th></tr>"+
		       	"<tr><td>Leve</td><td>SI (25%)</td><td>"+this.importeMulta+" ("+this.importeMulta*0.75+")</td><td>"+this.descripcionMulta+"</td><td>"+this.fechaMulta.toLocaleDateString('es-ES')+"</td></tr>";
		  		}

		       cadPrint+="</tbody></table></div>";
	return cadPrint;
}


Grave.prototype.toPrint = function(){

	var cadPrint="";

	cadPrint+= "<h3>Formato multa para imprimir</h3>"+
			   "<div class='container'><table class='table table-bordered'><thead><tr><th colspan='5'><center>Sancion Numero: "+this.id+"</center></th></tr></thead>"+
    		   "<thead><tr><th colspan='6'>Datos condcutor</th></tr></thead>"+
    		   "<tbody><tr><th>NIF:</th><th>Nombre:</th><th>Apellidos:</th><th>Direccion:</th><th>Caducidad del carnet:</th></tr>"+
    		   "<tr><td>"+this.conductor.nif+"</td><td>"+this.conductor.nombre+"</td><td>"+this.conductor.apellidos+"</td><td>"+this.conductor.direccion+"</td><td>"+this.conductor.fechaCadu.toLocaleDateString('es-ES')+"</td></tr>"+
		       "</tbody>"+
		       "<thead><tr><th colspan='5'>Datos Guardia Civil</th></tr></thead>"+
		       "<tbody><tr><th>NIF:</th><th colspan='2'>Nombre:</th><th colspan='2'>Rango:</th></tr>"+
		       "<tr><td>"+this.guardia.nif+"</td><td colspan='2'>"+this.guardia.nombre+"</td><td colspan='2'>"+this.guardia.rango+"</td></tr>"+
		       "</tbody>"+
		       "<thead><tr><th colspan='5'>Datos Multa</th></tr></thead>";
   	cadPrint+="<tbody><tr><th>Gravedad:</th><th>Puntos retirados:</th><th>Importe:</th><th>Descripcion:</th><th>Fecha:</th></tr>"+
		       	"<tr><td>Grave</td><td>"+this.retiradaPuntos+"</td><td>"+this.importeMulta+"</td><td>"+this.descripcionMulta+"</td><td>"+this.fechaMulta.toLocaleDateString('es-ES')+"</td></tr>";    	
		     		      

	cadPrint+="</tbody></table></div>";
	return cadPrint;

}

//Clase DGT

class DGT{

	constructor(multas,personas){
    this._multas = [];
    this._personas = [];
	}



	altaConductor(oConductor){

		
		var esta=false;

		for (var i in this._personas ) {
			if (oConductor.nif == this._personas[i].nif && this._personas[i] instanceof Conductor) {
				esta=true;

			}
		}
		if (!esta) {
			this._personas.push(oConductor);

		}
		return esta;
	}


	altaGuardia(oGuardia){
		var esta=false;

		for (var i in this._personas ) {
			if (oGuardia.nif == this._personas[i].nif && this._personas[i] instanceof Guardia) {
				esta=true;
			}
		}
		if (!esta) {
			this._personas.push(oGuardia);
		}
		return esta;
	}

	altaMulta(oMulta){
		var esta=false;
		var conductorBien=false;
		var guardiaBien=false;
		var cad="";

		for (var i in this._multas){
			if (oMulta.id == this._multas[i].id){
				esta=true;
				cad="La multa ya esta registrada";
			}
		}
		if (!esta){
			for (var i in this._personas){
				if (!conductorBien) {
					if (this._personas[i].nif == oMulta.conductor.nif && this._personas[i] instanceof Conductor){
						oMulta.conductor= this._personas[i];
						conductorBien=true;
					}
				}
				if (!guardiaBien){
					if (this._personas[i].nif == oMulta.guardia.nif && this._personas[i] instanceof Guardia) {
						oMulta.guardia= this._personas[i];
						guardiaBien=true;
					}
				}
			}
			if (!conductorBien){
				cad="El condcutor no existe";

			}
			else if (!guardiaBien){
				cad="El guardia no existe";
			}
			else{
				this._multas.push(oMulta);
			cad="La multa se ha registrado correctamente";
			}
		}

		return cad;
	}

	pagaMulta(sIdMultaAPagar){

		var cad="";
		var encontrada=false;

		for (var i in this._multas){
			if (this._multas[i].id == sIdMultaAPagar) {
				encontrada=true;
				if (!this._multas[i].pagada) {
					this._multas[i].pagada=true;
					cad="Multa pagada";
				}else {
					cad="Multa pagada anteriormente";
				}
			}
		}
		if (!encontrada) {
			cad="La multa no existe";
		}

		return cad;

	}

	listadoConductor(){

		var sHTMLTable = "<h3>Listado de conductores</h3>";

		sHTMLTable += '<table border="1">';
		
		sHTMLTable += "<tr><th>NIF</th><th>Nombre</th><th>Apellidos</th><th>Direccion</th><th>Caducidad carnet</th></tr>";
		
		for (var i in this._personas){
		
			if (this._personas[i] instanceof Conductor)
				sHTMLTable += this._personas[i].toHTMLRow();
		}
		
		sHTMLTable += "</table>";
		
		return sHTMLTable;


	}

	listadoGuardia(){

		var sHTMLTable = "<h3>Listado de guardias</h3>"; 
		sHTMLTable += '<table border="1">';
		
		sHTMLTable += "<tr><th>NIF</th><th>Nombre</th><th>Apellidos</th><th>Direccion</th><th>Rango</th></tr>";
		
		for (var i in this._personas){
		
			if (this._personas[i] instanceof Guardia)
				sHTMLTable += this._personas[i].toHTMLRow();
		}
		
		sHTMLTable += "</table>";
		
		return sHTMLTable;


	}

	listadoMultaGuardia(){

		var cad="";
		var nif="";
		var acumulado=0;
		var contador=0;

		cad+= "<h3>Multas impuestas por guardia</h3>";
		cad+= "<table border=1>";
		cad+= "<tr><th>NIF</th><th>Nombre</th><th>Apellidos</th><th>Puesto</th><th>Multas</th><th>Importe</th></tr>";


		for (var i in this._personas){
			if (this._personas[i] instanceof Guardia) {
				nif=this._personas[i].nif;

				for (var j in this._multas) {
					if (this._multas[j].guardia.nif == nif) {
						contador++;
						if (this._multas[j] instanceof Leve && this._multas[j].bonificada) {
							acumulado+=this._multas[j].importeMulta * 0.75;
						}
						else{
							acumulado+=this._multas[j].importeMulta;
						}
					}
					
				}
				if (contador != 0){
				cad+="<tr><td>"+this._personas[i].nif+"</td><td>"+this._personas[i].nombre+"</td><td>"+this._personas[i].apellidos+"</td><td>"+this._personas[i].rango+"</td><td>"+contador+"</td><td>"+acumulado+" &euro;</td></tr>";
				}
			}
		acumulado=0;
		contador=0;
		}
		
		cad+="</table>";

		return cad;
	}

	saldoConductor(){

		var cad="";
		var nif="";
		var acumulador=0;

		cad+= "<h3>Saldo de multas sin pagar por conductor</h3>";
		cad+= "<table border=1>";
		cad+= "<tr><th>NIF</th><th>Saldo Pendiente</th></tr>";

			for (var i in this._personas) {
				if(this._personas[i] instanceof Conductor){
					nif=this._personas[i].nif;

					for (var j in this._multas){
						if (!this._multas[j].pagada) {
							if (this._multas[j].conductor.nif == nif) {
								if (this._multas[j] instanceof Leve && this._multas[j].bonificada) {
									acumulador+=this._multas[j].importeMulta * 0.75;
								}
								else{
									acumulador+=this._multas[j].importeMulta;
								}
							}
						}
					}
					if (acumulador != 0) {
						cad+="<tr><td>"+this._personas[i].nif+"</td><td>"+acumulador+" &euro;</td></tr>";
					}
					acumulador=0;
				}

			}
			cad+="</table>";

			return cad;
	}

	puntosConductor(){
		var cad="";
		var nif="";
		var acumulador=0;

		cad+= "<h3>Puntos retirados por conductor</h3>";
		cad+= "<table border=1>";
		cad+= "<tr><th>NIF</th><th>Puntos retirados</th></tr>";

		for(var i in this._personas){
			if (this._personas[i] instanceof Conductor) {
				nif=this._personas[i].nif;

				for (var j in this._multas) {
					if (this._multas[j].conductor.nif == nif) {
						if (this._multas[j] instanceof Grave) {
							acumulador+=this._multas[j].retiradaPuntos;
						}
					}
				}
				if (acumulador != 0) {
					cad+="<tr><td>"+this._personas[i].nif+"</td><td>"+acumulador+"</td></tr>";
			}
			acumulador=0;
		}
		
		}
		cad+="</table>";

		return cad;
	}


	multaFecha(dtInicio, dtFin){

		var cad="";	
		var idFecha="";
		var fechaFecha="";
		var importeFecha=0;
		var totalMultas=0;

		cad+= "<h3>Listado de multas por fecha</h3>";
		cad+= "<table border=1>";
		cad+= "<tr><th>ID</th><th>Fecha</th><th>Importe</th></tr>";

		for (var i in this._multas)
					if (Date.parse(this._multas[i].fechaMulta) >= Date.parse(dtInicio) && Date.parse(this._multas[i].fechaMulta) <= Date.parse(dtFin)) {
						idFecha=this._multas[i].id;
						fechaFecha=this._multas[i].fechaMulta;
						importeFecha=this._multas[i].importeMulta;
						totalMultas+=this._multas[i].importeMulta;
						cad+="<tr><td>"+idFecha+"</td><td>"+fechaFecha.toLocaleDateString('es-ES')+"</td><td>"+importeFecha+"</td></tr>";
					}
				}

	multaImprimir(imprimirMultaId){

		var cad="";

		cad+="<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>"+
			  "<html xmlns='http://www.w3.org/1999/xhtml'>"+
			  "<head><meta charset='utf-8'><title>Imprimir multa</title>"+
			  "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>"+
			  "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>"+
			  "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>"+
			  "</head><body>";

		for(var i in this._multas)
			if (this._multas[i].id == imprimirMultaId) {
			cad+=this._multas[i].toPrint();
			}

		cad+="</body></html>";
		return cad;}
}