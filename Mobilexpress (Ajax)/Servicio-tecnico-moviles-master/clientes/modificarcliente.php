 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "mobilexpressdb";
$usuario   = "root";
$password  = "";

$nifCliente=$_POST['nifCliente'];
$nombreCliente=$_POST['nombreCliente'];
$apellidosCliente=$_POST['apellidosCliente'];
$direccionCliente=$_POST['direccionCliente'];
$telefonoCliente=$_POST['telefonoCliente'];

// Abrir conexion con la BD
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);
if($conexion->connect_error){
        die("Conexión fallida: ".$conexion->connect_error);
    }
$conexion ->set_charset("utf8");//asi es el caracter utf8 si es msqli

$sql = "SELECT * FROM persona WHERE dni_o_cif='".$nifCliente."' and tipo='Cliente' ";


if ($res = $conexion->query($sql)){
    $contador = $res->num_rows;    
}

if($contador==0)
{
	$mensaje= 'No existe ese cliente';
	$error = true;

}
else
{	
	$sql = "UPDATE persona SET dni_o_cif='$nifCliente',tipo='Cliente',nombre='$nombreCliente',apellidos='$apellidosCliente',telefono='$telefonoCliente',direccion='$direccionCliente' WHERE dni_o_cif='".$nifCliente."'";

	if($conexion->query($sql) === TRUE){
	        $mensaje = "Modificacion de Cliente correcta";
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