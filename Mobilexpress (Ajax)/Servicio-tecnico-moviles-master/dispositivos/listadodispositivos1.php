 <?php
 
// Va a devolver una respuesta JSON que no se debe cachear
header("Content-Type: text/xml");
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "mobilexpressdb";
$usuario   = "root";
$password  = "";

// Abrir conexion con la BD
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);
if($conexion->connect_error){
        die("Conexión fallida: ".$conexion->connect_error);
}
$conexion ->set_charset("utf8");//asi es el caracter utf8 si es msqli


 
$sql = "SELECT * FROM dispositivo WHERE garantia='No';";
 
        

$res = $conexion->query($sql);

$resultado='<table class="table" id="listados"><tr><th>ID</th><th>MARCA</th><th>MODELO</th><th>GARANTIA</th><th>FECHA ENTRADA</th><th>FECHA SALIDA</th></tr>';
		while($fila=mysqli_fetch_assoc($res)){			
			$resultado.="<tr><td>".$fila['id_dispositivo']."</td>";
			$resultado.="<td>".$fila['marca']."</td>";
			$resultado.="<td>".$fila['modelo']."</td>";
			$resultado.="<td>".$fila['garantia']."</td>";
			$resultado.="<td>".$fila['entrada']."</td>";
            $resultado.="<td>".$fila['salida']."</td>";			
		}
$resultado.='</table><input type="button" name="volver" class="btn bg-success btn-primary" value="Volver" onclick ="volverListado();" />';

echo $resultado;
mysqli_close($conexion);

?>
