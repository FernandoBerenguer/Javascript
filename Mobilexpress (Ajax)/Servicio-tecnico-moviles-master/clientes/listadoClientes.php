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


$sql = 'SELECT dni_o_cif,nombre,apellidos,telefono,direccion FROM persona WHERE tipo="Cliente"';

$res = $conexion->query($sql);

$respuesta="<?xml version='1.0' encoding='UTF-8'?><personas>";
		while($fila=mysqli_fetch_assoc($res)){
			$respuesta.="<cliente>";
				$respuesta.="<idcliente>".$fila['dni_o_cif']."</idcliente>";
				$respuesta.="<nombre>".$fila['nombre']."</nombre>";
				$respuesta.="<apellido>".$fila['apellidos']."</apellido>";
				$respuesta.="<movil>".$fila['telefono']."</movil>";
				$respuesta.="<direccion>".$fila['direccion']."</direccion>";
			$respuesta.="</cliente>";
		} 
		
$respuesta.="</personas>";	

echo $respuesta;

mysqli_close($conexion);

?>