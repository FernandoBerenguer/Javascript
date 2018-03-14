 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "mobilexpressdb";
$usuario   = "root";
$password  = "";

//recogemos los datos
$datos=$_POST['datos'];
//los codificamos
$oDispositivo = json_decode($datos);

// Abrir conexion con la BD
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);
if($conexion->connect_error){
        die("Conexión fallida: ".$conexion->connect_error);
    }
$conexion ->set_charset("utf8");//asi es el caracter utf8 si es msqli

$sql = "SELECT id_dispositivo FROM dispositivo WHERE id_dispositivo='".$oDispositivo->idDispositivo."'";


if ($res = $conexion->query($sql)){
    $contador = $res->num_rows;    
}

if($contador==0)
{
	$mensaje= 'No existe ese dispositivo';
	$error = true;

}
else
{	
	$sql = "DELETE FROM dispositivo WHERE id_dispositivo='$oDispositivo->idDispositivo'";

	if($conexion->query($sql) === TRUE){
	        $mensaje = "Baja de Dispositivo correcta";
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