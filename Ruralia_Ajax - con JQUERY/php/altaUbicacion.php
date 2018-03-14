<?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "ruralia";
$usuario   = "root";
$password  = "";

$ubicacion=$_REQUEST['ubicacion'];

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());

$sql = "select max(CodUbic) from Ubicaciones";

$resultados = mysql_query($sql, $conexion) or die(mysql_error());

// Recupero maximo codigo (campo no autonumerico)
$codigo = mysql_fetch_row($resultados)[0];
// Sumo uno para obtenr un codigo no utilizado
$codigo = $codigo + 1;

$mensaje='INSERTADO CON EXITO';
$error = false;

// Inserto el registro
$sql = "insert into Ubicaciones (CodUbic, Nombre) VALUES ($codigo,'$ubicacion')";

$resultados = @mysql_query($sql, $conexion) or die(mysql_error());
	
// Formateo la respuesa como un array JSON
$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysql_close($conexion);

?> 