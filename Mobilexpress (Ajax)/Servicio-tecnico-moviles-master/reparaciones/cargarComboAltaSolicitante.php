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

$sql = 'select dni_o_cif, nombre, apellidos from persona where tipo = "Cliente"';

$res = $conexion->query($sql);
$respuesta="";
    while($fila=mysqli_fetch_assoc($res)){
        $respuesta.='<option value="'.$fila['dni_o_cif'].'">';
        $respuesta.=$fila['nombre']." ";
        $respuesta.=$fila['apellidos'];
        $respuesta.="</option>";
        }

echo $respuesta;

mysqli_close($conexion);
?>