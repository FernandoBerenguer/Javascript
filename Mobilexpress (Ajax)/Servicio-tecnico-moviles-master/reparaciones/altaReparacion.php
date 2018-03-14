 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "mobilexpressdb";
$usuario   = "root";
$password  = "";

$idReparacion=$_POST['idReparacion'];
$solicitante=$_POST['solicitanteAlta'];
$dispositivo=$_POST['repararDispositivoAlta'];
$averia=$_POST['averiaReparacion'];
$estado=$_POST['estadoReparacion'];
$comentarios=$_POST['comentarioReparacion'];

// Abrir conexion con la BD
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);
if($conexion->connect_error){
        die("Conexión fallida: ".$conexion->connect_error);
    }
$conexion ->set_charset("utf8");//asi es el caracter utf8 si es msqli

$sql = "SELECT id_reparacion FROM reparacion WHERE id_reparacion='".$idReparacion.";";

$contador="";
if ($res = $conexion->query($sql)){
    $contador = $res->num_rows;    
}

if($contador>0)
{
	$mensaje= 'Ya existe ese cliente';
	$error = true;

}
else
{	
	$sql = "INSERT INTO reparacion(id_reparacion, dni_solicitante, modelo, averia, importe, comentarios,en_reparacion) VALUES ('$idReparacion','$solicitante', '$dispositivo', '$averia', '$estado', '$comentarios',true)";

	if($conexion->query($sql) === TRUE){
	        $mensaje = "Alta de reparacion correcta";
		    $error = FALSE;
	    } 
	    else {
		    $mensaje = "Error: ".$sql." ".$conexion->error;
		    $error = TRUE;
		}
	
}

$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysqli_close($conexion);

?> 