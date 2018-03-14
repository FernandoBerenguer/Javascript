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
$oPieza = json_decode($datos);

// Abrir conexion con la BD
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);
if($conexion->connect_error){
        die("Conexión fallida: ".$conexion->connect_error);
    }
$conexion ->set_charset("utf8");//asi es el caracter utf8 si es msqli

$sql = "SELECT num_serie FROM piezas WHERE num_serie='".$oPieza->sNumSerie."'";


if ($res = $conexion->query($sql)){
    $contador = $res->num_rows;
}

if($contador>0)
{
	$mensaje= 'Ya existe esa pieza';
	$error = true;

}
else
{
	$sql = "INSERT INTO piezas(num_serie, tipo, precio, id_reparacion, cif_proveedor) VALUES ('$oPieza->sNumSerie','$oPieza->sTipo','$oPieza->fPrecio', '$oPieza->sIdReparacion', '$oPieza->sCifProveedor')";

	if($conexion->query($sql) === TRUE){
	        $mensaje = "Pieza registrada";
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
