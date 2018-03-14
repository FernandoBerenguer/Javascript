<?php

// Va a devolver una respuesta JSON que no se debe cachear 
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');


$servidor  = "localhost";
$basedatos = "ruralia";
$usuario   = "root";
$password  = "";

$sCasa=$_REQUEST['datos'];

$oCasa = json_decode($sCasa);

// Abrir conexion con la BD
$conexion = mysql_connect($servidor, $usuario, $password) or die(mysql_error());
mysql_query("SET NAMES 'utf8'", $conexion);

mysql_select_db($basedatos, $conexion) or die(mysql_error());

$sql = "select max(CodCasa) from Casas";

$resultados = mysql_query($sql, $conexion) or die(mysql_error());

// Recupero maximo codigo (campo no autonumerico)
$codigo = mysql_fetch_row($resultados)[0];
// Sumo uno para obtenr un codigo no utilizado
$codigo = $codigo + 1;

$mensaje='INSERTADO CON EXITO';
$error = false;

// Inserto el registro
$sql = "insert into Casas (CodCasa,CodPropietario,CodUbic,Descripcion,Habitaciones,Piscina,Precio) VALUES ($codigo,'$oCasa->CodPropietario',$oCasa->CodUbicacion,'$oCasa->Descripcion',$oCasa->Habitaciones,'$oCasa->Piscina',$oCasa->Precio)";

$resultados = @mysql_query($sql, $conexion) or die(mysql_error());
	
// Formateo la respuesa como un array JSON
$respuesta = array($error,$mensaje);

echo json_encode($respuesta); 

mysql_close($conexion);

?> 