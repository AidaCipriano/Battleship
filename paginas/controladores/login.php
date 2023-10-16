<?php

	session_start();
	error_reporting(0);

	
	if (isset($_SESSION['user_id'])) {
	header('location:../pantalladeljuego.php');
	}

	require 'conexion.php';


	if(isset($_POST['login'])) {
	
	if(
        strlen($_POST['email'])     >= 1 &&
        strlen($_POST['password'])  >= 1 
    ){
        $email = trim($_POST['email']);
        $password = trim($_POST['password']);
        $consulta = "CALL sp_Inicio_Sesion('$email', '$password')";
       // $consulta = "INSERT INTO usuario(id_usuario, email, nombreusuario, contrasena)
       //                 VALUES('$idsuario', '$email', '$username', '$password')";
        $resultado = mysqli_query($conexion, $consulta);
		$filas = mysqli_fetch_array($resultado);
        if($resultado){
			$_SESSION['user_id'] = $filas['nombreusuario'];
			header("location:../pantalladeljuego.php");
        }
        else{
            echo('Error');
        }


    }

}

require 'conexion.php';

if(isset($_POST['login'])) {

$email = $_POST['email'];
$pass = $_POST['password'];

$sql = "SELECT * FROM usuario WHERE email = '$email' and contrasena = '$pass'";
$resultado = mysqli_query($conexion,$sql);
$numero_registros = mysqli_num_rows($resultado);
	if($numero_registros != 0) {
		// Inicio de sesión exitoso
		//echo "Inicio de sesión exitoso. Bienvenido, " . $email . "!";
		header("location:../pantalladeljuego.php");
	} else {
		// Credenciales inválidas
		echo "Credenciales inválidas. Por favor, verifica tu nombre de usuario y/o contraseña."."<br>";
		echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
	}
}
?>
