<?php
//no chachee la llamada
//header('Cache-Control: no-cache, must-revalidate');
//header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
$servidor  = "localhost";
$basedatos = "mobilexpressdb";
$usuario   = "root";
$password  = "";


$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);//el parametro bd se añade si es msqli

 if($conexion->connect_error){
        die("Conexión fallida: ".$conexion->connect_error);
    }

$conexion ->set_charset("utf8");//asi es el caracter utf8 si es msqli

$sql = "select dispositivo.id_dispositivo,dispositivo.marca,dispositivo.modelo from dispositivo,reparacion_dispositivo,reparacion where reparacion.id_reparacion=reparacion_dispositivo.id_reparacion AND reparacion_dispositivo.id_dispositivo!=dispositivo.id_dispositivo or reparacion.en_reparacion = false AND reparacion.id_reparacion=reparacion_dispositivo.id_reparacion AND reparacion_dispositivo.id_dispositivo=dispositivo.id_dispositivo;";

$res = $conexion->query($sql);
$respuesta="";
    while($fila=mysqli_fetch_assoc($res)){
        $respuesta.='<option value="'.$fila['id_dispositivo'].'">';
        $respuesta.=$fila['marca']."-";
        $respuesta.=$fila['modelo'];
        $respuesta.="</option>";
        }

echo $respuesta;

mysqli_close($conexion);
?>
