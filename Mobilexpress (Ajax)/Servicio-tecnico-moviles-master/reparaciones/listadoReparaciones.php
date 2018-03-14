 <?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "mobilexpressdb";
$usuario   = "root";
$password  = "";

$precio=$_POST['precioReparacion'];

// Abrir conexion con la BD
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);
if($conexion->connect_error){
        die("Conexión fallida: ".$conexion->connect_error);
    }
$conexion ->set_charset("utf8");//asi es el caracter utf8 si es msqli

if (is_numeric($precio))
    {
    $sql = "SELECT * FROM reparacion WHERE importe <= '$precio';";
    }
else
    {
    $sql = "SELECT * FROM reparacion;";
    }

$res = $conexion->query($sql);

$resultado='<table class="table" id="listados"><tr><th>ID</th><th>DNI</th><th>MODELO</th><th>AVERIA</th><th>IMPORTE</th><th>COMENTARIOS</th></tr>';
		while($fila=mysqli_fetch_assoc($res)){			
			$resultado.="<tr><td>".$fila['id_reparacion']."</td>";
			$resultado.="<td>".$fila['dni_solicitante']."</td>";
			$resultado.="<td>".$fila['modelo']."</td>";
			$resultado.="<td>".$fila['averia']."</td>";
			$resultado.="<td>".$fila['importe']."</td>";
            $resultado.="<td>".$fila['comentarios']."</td>";			
		}
$resultado.='</table><input type="button" name="volver" class="btn bg-success btn-primary" value="Volver" onclick ="volverListado();" />';


$respuesta = array($resultado);

echo json_encode($respuesta); 

mysqli_close($conexion);

?>
