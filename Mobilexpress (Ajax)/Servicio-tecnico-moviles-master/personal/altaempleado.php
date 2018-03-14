<?php

// Va a devolver una respuesta JSON que no se debe cachear
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "mobilexpressdb";
$usuario   = "root";
$password  = "";

$nifEmpleado=$_REQUEST['nifEmpleado'];
$nombreEmpleado=$_REQUEST['nombreEmpleado'];
$apellidosEmpleado=$_REQUEST['apellidosEmpleado'];
$direccionEmpleado=$_REQUEST['direccionEmpleado'];
$telefonoEmpleado=$_REQUEST['telefonoEmpleado'];


// Abrir conexion con la BD
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);
if($conexion->connect_error){
        die("Conexión fallida: ".$conexion->connect_error);
    }
$conexion ->set_charset("utf8");//asi es el caracter utf8 si es msqli

$sql = "SELECT * FROM persona WHERE dni_o_cif='".$nifEmpleado."' and tipo='Empleado' ";


if ($res = $conexion->query($sql)){
    $contador = $res->num_rows;
}

if($contador>0)
{
	$mensaje= 'Ya existe ese empleado';
	$error = true;

}
else
{
<<<<<<< HEAD
	$sql = "INSERT INTO persona(dni_o_cif, tipo, nombre, apellidos, telefono, direccion) VALUES ('$nifEmpleado','Empleado', '$nombreEmpleado', '$apellidosEmpleado', '$telefonoEmpleado', '$direccionEmpleado')";
=======
	$sql = "INSERT INTO persona(dni_o_cif, tipo, nombre, apellidos, telefono, direccion) VALUES ('$nifEmpleado','Personal', '$nombreEmpleado', '$apellidosEmpleado', '$telefonoEmpleado', '$direccionEmpleado')";
>>>>>>> origin/master

	if($conexion->query($sql) === TRUE){
	        $mensaje = "Alta de Empleado correcta";
		    $error = FALSE;
	    }
	    else {
		    $mensaje = "Error: ".$sql." ".$conn->error;
		    $error = TRUE;
		}

}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta);

mysqli_close($conexion);

?>
