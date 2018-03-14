function Propietario(iCodPropietario,sNombre,sApellidos,sTelefono){
	this.CodPropietario = iCodPropietario;
	this.Nombre = sNombre;
	this.Apellidos = sApellidos;
	this.Telefono = sTelefono;
}

function Cliente(iCodCliente,sNombre,sApellidos,sTelefono){
	this.CodCliente = iCodCliente;
	this.Nombre = sNombre;
	this.Apellidos = sApellidos;
	this.Telefono = sTelefono;
}

function Casa(iCodCasa, iCodPropietario, iCodUbicacion, sDescripcion, iHabitaciones, sPiscina, dbPrecio){
	this.CodCasa = iCodCasa;
	this.CodPropietario = iCodPropietario;
	this.CodUbicacion = iCodUbicacion;
	this.Descripcion = sDescripcion;
	this.Habitaciones = iHabitaciones;
	this.Piscina = sPiscina;
	this.Precio = dbPrecio;
}

