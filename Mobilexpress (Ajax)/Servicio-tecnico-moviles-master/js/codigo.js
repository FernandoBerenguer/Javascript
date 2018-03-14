function Pieza_Repuesto(sNumSerie, sTipo, fPrecio, sIdReparacion, sCifProveedor) {
    this.sNumSerie = sNumSerie;
    this.sTipo = sTipo;
    this.fPrecio = fPrecio;
    this.sIdReparacion = sIdReparacion;
    this.sCifProveedor = sCifProveedor;
   // this.bActivo = true;
}

function Reparacion(sIdReparacion, sDniSolicitante,sModelo, sAveria, fImportePresupuestado, sComentarios) {
    this.sIdReparacion = sIdReparacion;
    this.sDniSolicitante = sDniSolicitante;
    this.sModelo = sModelo;
    this.sAveria = sAveria;

    this.fImportePresupuestado = fImportePresupuestado;
    this.sComentarios = sComentarios;
    this.bActivo = true;
}

function Persona(sDni_o_Cif, sTipo, sNombre, sApellidos, sTelefono, sDireccion) {
    this.sDni_o_Cif = sDni_o_Cif;
    this.sTipo = sTipo;
    this.sNombre = sNombre;
    this.sApellidos = sApellidos;
    this.sTelefono = sTelefono;
    this.sDireccion = sDireccion;
}


function Dispositivo(idDispositivo, sMarca, sModelo, rGarantia, fEntrada, fSalida) {
    this.idDispositivo = idDispositivo;
    this.sMarca = sMarca;
    this.sModelo = sModelo;
    this.rGarantia = rGarantia;
    this.fEntrada = fEntrada;
    this.fSalida = fSalida;
    this.bActivo = true;
}


//metodos
/*class SAT {
    constructor() {
        this._personas = [];
        this._dispositivos = [];
        this._apuntes = []; //pagos y cobros
        this._proveedores = [];
        this._piezas = [];
        this._reparaciones = [];
    }

    //CLIENTES
    altaCliente(oCliente) {
        var esta = false;

        for (var i in this._personas) {
            if (oCliente.sDNI == this._personas[i].sDNI && this._personas[i].bActivo == true && this._personas[i] instanceof Cliente) {
                esta = true;
            } else if (this._personas[i].bActivo == false) {
                //el cliente existe pero esta inactivo
                this._personas[i].bActivo = true;
                esta = false;
            }
        }
        if (!esta) {
            this._personas.push(oCliente);
        }
        return esta;
    }

    bajaCliente(nif) {
        var bEncontrado = false;
        for (var i in this._personas) {
            if (nif == this._personas[i].sDNI && this._personas[i].bActivo == true && this._personas[i] instanceof Cliente) {
                bEncontrado = true;
                this._personas[i].bActivo = false;
            } else {
                //dispositivo ya inactivo
                //cad="Dispositivo dado de baja anteriormente";
            }
        }

        return bEncontrado;
    }

    modificarCliente(oCliente) {
        var bEncontrado = false;
        for (var i in this._personas) {
            if (oCliente.sDNI == this._personas[i].sDNI && this._personas[i].bActivo == true && this._personas[i] instanceof Cliente) {
                this._personas[i].sNombre = oCliente.sNombre;
                this._personas[i].sApellidos = oCliente.sApellidos;
                this._personas[i].sDireccion = oCliente.sDireccion;
                this._personas[i].sTelefono = oCliente.sTelefono;
                bEncontrado = true;
            }
        }
        return bEncontrado;
    }


    //DISPOSITIVOS
    altaDispositivos(oDispositivos) {
        var bEncontrado = false;
        for (var i in this._dispositivos) {
            if (this._dispositivos[i].sMarca == oDispositivos.sMarca && this._dispositivos[i].sModelo == oDispositivos.sModelo && this._dispositivos[i].bActivo == true) {
                bEncontrado = true;
            } else if (this._dispositivos[i].bActivo == false){
                //el dispositivo existe pero esta inactivo (eliminado)
                this._dispositivos[i].bActivo = true;
                bEncontrado = false;
            }
        }
        if (!bEncontrado) {
            this._dispositivos.push(oDispositivos);
        }

        return bEncontrado;
    }

    modificarDispositivos(oDispositivos) {
        var bEncontrado = false;
        for (var i in this._dispositivos) {
            if (this._dispositivos[i].sMarca == oDispositivos.sMarca && this._dispositivos[i].sModelo == oDispositivos.sModelo && this._dispositivos[i].bActivo == true) {
                this._dispositivos[i].rGarantia = oDispositivos.rGarantia;
                this._dispositivos[i].fechaEntrada = oDispositivos.fechaEntrada;
                this._dispositivos[i].fechaSalida = oDispositivos.fechaSalida;
                bEncontrado = true;

            } else {
                //el dispositivo existe pero esta inactivo (eliminado)
                // cad="El dispositivo ya exite, pero esta inactivo";
            }
        }
        return bEncontrado;
    }

    bajaDispositivos(marca, modelo) {
        var bEncontrado = false;
        for (var i in this._dispositivos) {

            if (this._dispositivos[i].sMarca == marca && this._dispositivos[i].sModelo == modelo && this._dispositivos[i].bActivo == true) {
                bEncontrado = true;
                this._dispositivos[i].bActivo = false;
            } else {
                //dispositivo ya inactivo
            }
        }
        return bEncontrado;
    }

    //PIEZAS
    altaPieza(oPieza) {
        var esta = false;

        for (var i in this._piezas) {
            if (oPieza.id == this._piezas[i].id && this._piezas[i].bActivo == true) {
                esta = true;
            } else if (this._piezas[i].bActivo == false){
                //la pieza existe pero esta inactiva (eliminada)
                this._piezas[i].bActivo = true;
                esta = false;
            }
        }
        if (!esta) {
            this._piezas.push(oPieza);
        }
        return esta;
    }

    bajaPieza(id) {
        var bEncontrado = false;
        for (var i in this._piezas) {
            if (this._piezas[i].sId == id && this._piezas[i].bActivo == true) {
                bEncontrado = true;
                this._piezas[i].bActivo = false;
            } else {
                //ya esta la pieza inactiva
                //cad="Pieza dada de baja anteriormente";
            }
        }

        return bEncontrado;
    }

    modificarPieza(oPieza) {
        var bEncontrado = false;
        for (var i in this._piezas) {
            if (this._piezas[i].sId == oPieza.sId && this._piezas[i].bActivo == true) {
                this._piezas[i].sTipo = oPieza.sTipo;
                this._piezas[i].fPrecio = oPieza.fPrecio;
                bEncontrado = true;
            }
        }
        return bEncontrado;
    }

    //PROVEEDORES
    altaProveedor(oProveedor) {
        var bEncontrado = false;
        for (var i in this._proveedores) {
            if (this._proveedores[i].sCIF == oProveedor.sCIF && this._proveedores[i].bActivo == true) {
                bEncontrado = true;
            } else if (this._proveedores[i].bActivo == false){
                //el proveedor existe pero esta inactivo (eliminado)
               this._proveedores[i].bActivo = true;
               bEncontrado = false;
            }
        }
        if (!bEncontrado) {
            this._proveedores.push(oProveedor);
        }

        return bEncontrado;
    }

    bajaProveedor(nif) {
        var bEncontrado = false;
        for (var i in this._proveedores) {
            if (this._proveedores[i].sCIF == nif && this._proveedores[i].bActivo == true) {
                bEncontrado = true;
                this._proveedores[i].bActivo = false;
            } else {
                //ya esta el proveedor inactiva
                //cad="Proveedor dado de baja anteriormente";
            }
        }

        return bEncontrado;
    }

    modificarProveedor(oProveedor) {
        var bEncontrado = false;
        for (var i in this._proveedores) {
            if (this._proveedores[i].sCIF == oProveedor.sCIF && this._proveedores[i].bActivo == true) {
                this._proveedores[i].sNombre = oProveedor.sNombre;
                this._proveedores[i].sTipo = oProveedor.sTipo;
                bEncontrado = true;
            }
        }
        return bEncontrado;
    }

    //EMPLEADOS
    altaEmpleado(oEmpleado) {
        var esta = false;

        for (var i in this._personas) {
            if (oEmpleado.sDNI == this._personas[i].sDNI && this._personas[i].bActivo == true && this._personas[i] instanceof Personal) {
                esta = true;
            } else if(this._personas[i].bActivo == false){
                //el cliente existe pero esta inactivo
                this._personas[i].bActivo = false;
                esta = false;
            }
        }
        if (!esta) {
            this._personas.push(oEmpleado);
        }
        return esta;
    }

    bajaEmpleado(nif) {
        var bEncontrado = false;
        for (var i in this._personas) {
            if (nif == this._personas[i].sDNI && this._personas[i].bActivo == true && this._personas[i] instanceof Personal) {
                bEncontrado = true;
                this._personas[i].bActivo = false;
            } else {
                //dispositivo ya inactivo
                //cad="Dispositivo dado de baja anteriormente";
            }
        }

        return bEncontrado;
    }

    modificarEmpleado(oEmpleado) {
        var bEncontrado = false;
        for (var i in this._personas) {
            if (oEmpleado.sDNI == this._personas[i].sDNI && this._personas[i].bActivo == true && this._personas[i] instanceof Personal) {
                this._personas[i].sNombre = oEmpleado.sNombre;
                this._personas[i].sApellidos = oEmpleado.sApellidos;
                this._personas[i].sDireccion = oEmpleado.sDireccion;
                this._personas[i].sTelefono = oEmpleado.sTelefono;
                this._personas[i].sIBAN = oEmpleado.sIBAN;
                this._personas[i].sCargo = oEmpleado.sCargo;
                bEncontrado = true;
            }
        }
        return bEncontrado;
    }

    altaReparacion(oReparacion)
    {
        var bEncontrado = false;
        for (var i in this._reparaciones) {
            if (this._reparaciones[i].sModelo == oReparacion.sModelo && this._reparaciones[i].bActivo == true) {
                bEncontrado = true;
            } else if (this._reparaciones[i].bActivo == false){
                // ya inactivo
                this._reparaciones[i].bActivo = true;
                bEncontrado = false;
            }
        }
		if (!bEncontrado) {
            this._reparaciones.push(oReparacion);
		}
        return bEncontrado;
    }

    modificarReparacion(oReparacion)
    {
        var bEncontrado = false;
        for (var i in this._reparaciones) {
            if (this._reparaciones[i].sModelo == oReparacion.sModelo && this._reparaciones[i].bActivo == true) {
                bEncontrado = true;
                this._reparaciones.pop(oReparacion);
                this._reparaciones.push(oReparacion);
            }
        }
        return bEncontrado;
    }

    pintarListadoClientes(nombre)
    {
	var nombre = nombre;
    var tabla   = document.createElement("table");
    tabla.classList.add("table");
    tabla.classList.add("table-striped");

    var tblHead = document.createElement("thead");

    var fila = document.createElement("tr");

    var th = document.createElement("th");  
    var textoTH = document.createTextNode("NIF");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("NOMBRE");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("APELLIDOS");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("DIRECCION");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("TELEFONO");
    th.appendChild(textoTH);
    fila.appendChild(th);

    tblHead.appendChild(fila);

    tabla.appendChild(tblHead);

    var tblBody = document.createElement("tbody");

    for (var i in this._personas)
    {
        if (this._personas[i].bActivo==true && this._personas[i] instanceof Cliente && nombre =="") 
        {
            var fila = document.createElement("tr");

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sDNI);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sNombre);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sApellidos);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sDireccion);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sTelefono);
            td.appendChild(textoTD);
            fila.appendChild(td);

            tblBody.appendChild(fila);
            tabla.appendChild(tblBody);
        }
		else if(this._personas[i].bActivo==true && this._personas[i] instanceof Cliente && nombre ==this._personas[i].sNombre){
			
			var fila = document.createElement("tr");

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sDNI);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sNombre);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sApellidos);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sDireccion);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sTelefono);
            td.appendChild(textoTD);
            fila.appendChild(td);

            tblBody.appendChild(fila);
            tabla.appendChild(tblBody);
		}
    }

    return tabla;
    }

      pintarListadoDispositivos(garantia)
    {	
    var tabla   = document.createElement("table");
    tabla.classList.add("table");
    tabla.classList.add("table-striped");

    var tblHead = document.createElement("thead");

    var fila = document.createElement("tr");

    var th = document.createElement("th");  
    var textoTH = document.createTextNode("MARCA");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("MODELO");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("GARANTIA");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("FECHA DE ENTRADA");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("FECHA DE SALIDA");
    th.appendChild(textoTH);
    fila.appendChild(th);

    tblHead.appendChild(fila);

    tabla.appendChild(tblHead);

    var tblBody = document.createElement("tbody");

	
	if(garantia=="S" || garantia=="N"){
		for (var i in this._dispositivos){
			if (this._dispositivos[i].bActivo==true && this._dispositivos[i].rGarantia==garantia){
				var fila = document.createElement("tr");

				var td = document.createElement("td");
				var textoTD = document.createTextNode(this._dispositivos[i].sMarca);
				td.appendChild(textoTD);
				fila.appendChild(td);

				var td = document.createElement("td");
				var textoTD = document.createTextNode(this._dispositivos[i].sModelo);
				td.appendChild(textoTD);
				fila.appendChild(td);

				var td = document.createElement("td");

				if (this._dispositivos[i].rGarantia=="N") {
					var textoTD = document.createTextNode("NO");
				}
				else if (this._dispositivos[i].rGarantia=="S") {
					var textoTD = document.createTextNode("SI");
				}

				td.appendChild(textoTD);
				fila.appendChild(td);

				var td = document.createElement("td");
				var textoTD = document.createTextNode(this._dispositivos[i].fEntrada.toLocaleDateString('es-ES'));
				td.appendChild(textoTD);
				fila.appendChild(td);

				var td = document.createElement("td");
				var textoTD = document.createTextNode(this._dispositivos[i].fSalida.toLocaleDateString('es-ES'));
				td.appendChild(textoTD);
				fila.appendChild(td);

				tblBody.appendChild(fila);
				tabla.appendChild(tblBody);
			}
		}
	}
	else{		
		for (var i in this._dispositivos){
			if (this._dispositivos[i].bActivo==true){
				var fila = document.createElement("tr");

				var td = document.createElement("td");
				var textoTD = document.createTextNode(this._dispositivos[i].sMarca);
				td.appendChild(textoTD);
				fila.appendChild(td);

				var td = document.createElement("td");
				var textoTD = document.createTextNode(this._dispositivos[i].sModelo);
				td.appendChild(textoTD);
				fila.appendChild(td);

				var td = document.createElement("td");

				if (this._dispositivos[i].rGarantia=="N") {
					var textoTD = document.createTextNode("NO");
				}
				else if (this._dispositivos[i].rGarantia=="S") {
					var textoTD = document.createTextNode("SI");
				}

				td.appendChild(textoTD);
				fila.appendChild(td);

				var td = document.createElement("td");
				var textoTD = document.createTextNode(this._dispositivos[i].fEntrada.toLocaleDateString('es-ES'));
				td.appendChild(textoTD);
				fila.appendChild(td);

				var td = document.createElement("td");
				var textoTD = document.createTextNode(this._dispositivos[i].fSalida.toLocaleDateString('es-ES'));
				td.appendChild(textoTD);
				fila.appendChild(td);

				tblBody.appendChild(fila);
				tabla.appendChild(tblBody);			
			}
		}
    }
	return tabla;
}


        pintarListadoProveedores()
    {

    var tabla   = document.createElement("table");
    tabla.classList.add("table");
    tabla.classList.add("table-striped");

    var tblHead = document.createElement("thead");

    var fila = document.createElement("tr");

    var th = document.createElement("th");  
    var textoTH = document.createTextNode("CIF");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("NOMBRE");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("TIPO");
    th.appendChild(textoTH);
    fila.appendChild(th);


    tblHead.appendChild(fila);

    tabla.appendChild(tblHead);

    var tblBody = document.createElement("tbody");

    for (var i in this._proveedores)
    {
        if (this._proveedores[i].bActivo==true) 
        {
            var fila = document.createElement("tr");

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._proveedores[i].sCIF);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._proveedores[i].sNombre);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._proveedores[i].sTipo);
            td.appendChild(textoTD);
            fila.appendChild(td);

            tblBody.appendChild(fila);
            tabla.appendChild(tblBody);
        }
    }
	return tabla;
}
    
       pintarListadoEmpleados()
    {

    var tabla   = document.createElement("table");
    tabla.classList.add("table");
    tabla.classList.add("table-striped");

    var tblHead = document.createElement("thead");

    var fila = document.createElement("tr");

    var th = document.createElement("th");  
    var textoTH = document.createTextNode("NIF");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("NOMBRE");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("APELLIDOS");
    th.appendChild(textoTH);
    fila.appendChild(th);

     var th = document.createElement("th");
    var textoTH = document.createTextNode("DIRECCION");
    th.appendChild(textoTH);
    fila.appendChild(th);

     var th = document.createElement("th");
    var textoTH = document.createTextNode("TELEFONO");
    th.appendChild(textoTH);
    fila.appendChild(th);

     var th = document.createElement("th");
    var textoTH = document.createTextNode("IBAN (Cuenta bancaria)");
    th.appendChild(textoTH);
    fila.appendChild(th);

     var th = document.createElement("th");
    var textoTH = document.createTextNode("CARGO");
    th.appendChild(textoTH);
    fila.appendChild(th);


    tblHead.appendChild(fila);

    tabla.appendChild(tblHead);

    var tblBody = document.createElement("tbody");

    for (var i in this._personas)
    {
        if (this._personas[i].bActivo==true && this._personas[i] instanceof Personal) 
        {
            var fila = document.createElement("tr");

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sDNI);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sNombre);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sApellidos);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sDireccion);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sTelefono);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sIBAN);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._personas[i].sCargo);
            td.appendChild(textoTD);
            fila.appendChild(td);

            tblBody.appendChild(fila);
            tabla.appendChild(tblBody);
        }
    }

    return tabla;
}

       pintarListadoReparaciones()
    {

    var tabla   = document.createElement("table");
    tabla.classList.add("table");
    tabla.classList.add("table-striped");

    var tblHead = document.createElement("thead");

    var fila = document.createElement("tr");

    var th = document.createElement("th");  
    var textoTH = document.createTextNode("MODELO");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("AVERIA");
    th.appendChild(textoTH);
    fila.appendChild(th);

    var th = document.createElement("th");
    var textoTH = document.createTextNode("ESTADO");
    th.appendChild(textoTH);
    fila.appendChild(th);

     var th = document.createElement("th");
    var textoTH = document.createTextNode("IMPORTE");
    th.appendChild(textoTH);
    fila.appendChild(th);

     var th = document.createElement("th");
    var textoTH = document.createTextNode("COMENTARIOS");
    th.appendChild(textoTH);
    fila.appendChild(th);

    tblHead.appendChild(fila);

    tabla.appendChild(tblHead);

    var tblBody = document.createElement("tbody");

    for (var i in this._reparaciones)
    {
        if (this._reparaciones[i].bActivo==true) 
        {
            var fila = document.createElement("tr");

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._reparaciones[i].sModelo);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._reparaciones[i].sAveria);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._reparaciones[i].sEstado);
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._reparaciones[i].fImportePresupuestado+" €");
            td.appendChild(textoTD);
            fila.appendChild(td);

            var td = document.createElement("td");
            var textoTD = document.createTextNode(this._reparaciones[i].sComentarios);
            td.appendChild(textoTD);
            fila.appendChild(td);

            tblBody.appendChild(fila);
            tabla.appendChild(tblBody);
        }
    }

    return tabla;
	}
}*/
