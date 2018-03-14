// Manejador tras la carga completa de la página
window.addEventListener("load",inicio,false);

function inicio(){

	mform1.id_submitbutton.addEventListener("click",validarEnvio,false);
	
	// Alternativa: Validacion sobre evento de formulario submit
	//mform1.addEventListener("submit",validarEnvio,false);

}

function validarEnvio(oEvento){
	var oE = oEvento || window.event;
	var bValido=true;
	var sError = "";
	var bVacios=true;
	var sErrorVacios="";
	
	// Campo username
	var userName = mform1.id_username.value.trim();
	
	var oExpReg = /^[a-z\d_]{6,15}$/i //nombre de usuario entre 6 y 15 caracteres.
	if (userName == ""){
		sErrorVacios+="El nombre de usuario no puede estar vacio \n";
		bVacios=false;
		mform1.id_username.classList.add("errorbox");
		mform1.id_username.focus();
		
	}else{
		if (oExpReg.test(userName) == false){

			mform1.id_username.classList.add("errorbox");
			mform1.id_username.focus();
			bValido = false;
			sError += "El nombre solo admite caracteres alfanumericos entre 6 y 15 caracteres \n"; 
		} else {
			mform1.id_username.classList.remove("errorbox");
		}
	}


	//campos contraseñas
	var pass = mform1.id_password.value.trim();
    var oExpReg2 = /(?=^.{6,}$)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
	if (pass == ""){
		sErrorVacios+="La contraseña no puede estar vacia \n";
		bVacios=false;
		mform1.id_password.classList.add("errorbox");
		mform1.id_password.focus();
	}else{
	    if (oExpReg.test(pass) == false){

	    	mform1.id_password.classList.add("errorbox");
			mform1.id_password.focus();
			bValido = false;
			sError += "La contraseña debe tener mas de 6 caracteres. Una mayuscula, una minuscula y un numero.\n"; 
		} else {
			mform1.id_password.classList.remove("errorbox");
		}
	}

	//pass2
	var pass2 = mform1.id_password2.value.trim();
	if (pass == ""){
		sErrorVacios+="La contraseña (2) no puede estar vacia \n";
		bVacios=false;
		mform1.id_password2.classList.add("errorbox");
		mform1.id_password2.focus();
	}else{
		if (pass2!=pass){
			mform1.id_password2.classList.add("errorbox");
			mform1.id_password2.focus();
			bValido = false;
			sError += "La contraseña no coincide.\n"; 
		}
		else{
			mform1.id_password2.classList.remove("errorbox");
		}
	}

	//campo correo electronico
	var sEmail = mform1.id_email.value.trim();
	
	oExpReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i;
	
	
	if(sEmail == ""){
		sErrorVacios+="El email no puede estar vacio \n";
		bVacios=false;
		mform1.id_email.classList.add("errorbox");
		mform1.id_email.focus();
	}else{
		if (oExpReg.test(sEmail) == false){

			mform1.id_email.classList.add("errorbox");
			mform1.id_email.focus();
			bValido = false;
			sError += "El email debe ser valido \n"; 
		} else {
			mform1.id_email.classList.remove("errorbox");
		}
	}

	//mail2
	var mail2 = mform1.id_email2.value.trim();
	if (mail2 == ""){
		sErrorVacios+="El email (2) no puede estar vacio \n";
		bVacios=false;
		mform1.id_email2.classList.add("errorbox");
		mform1.id_email2.focus();
	}else{
		if (mail2!=sEmail){
			mform1.id_email2.classList.add("errorbox");
			mform1.id_email2.focus();
			bValido = false;
			sError += "El email no coincide.\n"; 
		}
		else{
			mform1.id_email2.classList.remove("errorbox");
		}
	}
	// Campo nombre
	var sNombre = mform1.id_firstname.value.trim();
	
	var oExpReg = /^[a-z\s]{6,40}$/i;
	
	if (sNombre == "") {
		sErrorVacios+="El nombre no puede estar vacio \n";
		bVacios=false;
		mform1.id_firstname.classList.add("errorbox");
		mform1.id_firstname.focus();
	}else{
		if (oExpReg.test(sNombre) == false){

			mform1.id_firstname.classList.add("errorbox");
			mform1.id_firstname.focus();
			bValido = false;
			sError = "El nombre solo admite caracteres alfabeticos y entre 6 y 40 caracteres \n"; 
		} else {
			mform1.id_firstname.classList.remove("errorbox");
		}
	}
// Campo apellidos
	var sApellidos = mform1.id_lastname.value.trim();
	
	var oExpReg = /^[a-z\s]{6,40}$/i;
	
	if (sApellidos == "") {
		sErrorVacios+="Los apellidos no puede estar vacio \n";
		bVacios=false;
		mform1.id_lastname.classList.add("errorbox");
		mform1.id_lastname.focus();
	}else{
		if (oExpReg.test(sApellidos) == false){

			mform1.id_lastname.classList.add("errorbox");
			mform1.id_lastname.focus();
			bValido = false;
			sError = "Los apellidos solo admiten caracteres alfabeticos y entre 6 y 40 caracteres \n"; 
		} else {
			mform1.id_lastname.classList.remove("errorbox");
		}
	}

// Campo ciudad
	var sCiudad = mform1.id_city.value.trim();
	
	var oExpReg = /^[a-z\s]{4,15}$/i;
	
	if (sCiudad == "") {
		sErrorVacios+="La ciudad no puede estar vacio \n";
		bVacios=false;
		mform1.id_city.classList.add("errorbox");
		mform1.id_city.focus();
	}else{
		if (oExpReg.test(sCiudad) == false){

			mform1.id_city.classList.add("errorbox");
			mform1.id_city.focus();
			bValido = false;
			sError = "La ciudad solo admiten caracteres alfabeticos y entre 4 y 15 caracteres \n"; 
		} else {
			mform1.id_city.classList.remove("errorbox");
		}
	}

	// Campo codigo postal
	var sCodigoPostal = mform1.id_cp.value.trim();
	
	var oExpReg = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/i;
	
	if (sCodigoPostal == "") {
		sErrorVacios+="El codigo postal no puede estar vacio \n";
		bVacios=false;
		mform1.id_cp.classList.add("errorbox");
		mform1.id_cp.focus();
	}else{
		if (oExpReg.test(sCodigoPostal) == false){

			mform1.id_cp.classList.add("errorbox");
			mform1.id_cp.focus();
			bValido = false;
			sError = "El codigo postal debe ser valido \n"; 
		} else {
			mform1.id_cp.classList.remove("errorbox");
		}
	}

	// Campo select
	var sSelected = mform1.id_country.selectedIndex;
	
	
	if (sSelected == "") {
		sErrorVacios+="Seleccione un pais \n";
		bVacios=false;
		mform1.id_country.classList.add("errorbox");
		mform1.id_country.focus();
	}else
	{
		mform1.id_country.classList.remove("errorbox");
	}


	

	if (!bVacios){
		alert(sErrorVacios);
		oE.preventDefault();
	}

	if (!bValido){
		alert(sError);
		oE.preventDefault();
		}
	

}