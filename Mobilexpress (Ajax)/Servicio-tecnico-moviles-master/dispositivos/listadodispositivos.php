 <?php
 
// Va a devolver una respuesta JSON que no se debe cachear
header("Content-Type: text/xml");
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "mobilexpressdb";
$usuario   = "root";
$password  = "";

$garantia=$_REQUEST['sDatos'];

// Abrir conexion con la BD
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);
if($conexion->connect_error){
        die("Conexión fallida: ".$conexion->connect_error);
}
$conexion ->set_charset("utf8");//asi es el caracter utf8 si es msqli



$sql='SELECT id_dispositivo,marca,modelo,garantia,entrada,salida,activo FROM dispositivo';


 if($garantia=="S") {
   $sql = "SELECT * FROM dispositivo WHERE garantia='Si';";
   }
		 
if($garantia=="N"){
     $sql = "SELECT * FROM dispositivo WHERE garantia='No';";
 }
        

$res = $conexion->query($sql);

$resultado="<?xml version='1.0' encoding='UTF-8'?><dispositivos>";
		while($fila=mysqli_fetch_assoc($res)){
			$resultado.="<dispositivo>";
				$resultado.="<id>".$fila['id_dispositivo']."</id>";
				$resultado.="<marca>".$fila['marca']."</marca>";
				$resultado.="<modelo>".$fila['modelo']."</modelo>";
				$resultado.="<garantia>".$fila['garantia']."</garantia>";
				$resultado.="<entrada>".$fila['entrada']."</entrada>";
                $resultado.="<salida>".$fila['salida']."</salida>";
                $resultado.="<activo>".$fila['activo']."</activo>";
			$resultado.="</dispositivo>";
		}
$resultado.="</dispositivos>";

echo $resultado;
mysqli_close($conexion);

?>
