<?php
  session_start();
  include 'controladores/conexion.php';
  $user = $_SESSION['user_id'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú de Inicio - Mi Videojuego</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/styles.css">
    <link href="https://fonts.cdnfonts.com/css/copperplate" rel="stylesheet">  
</head>
<body class="gif">
    

    <div class="container d-flex justify-content-center align-items-center h-100 divdiv containertres fondodos">

            <div class="containerdos fondo">
                <h1 class="text-center letras"> <b>Menú de pausa </b></h1>
                <a href="pantalladeljuego.php"> <button class="btn btn-primary button3">Regresar</button></a>
                <a href="iniciosesion.php"> <button class="btn btn-primary button3">Salir</button></a>
            </div>
        </div>
    </div>
    
    <script src="../includes/script.js"></script>
</body>
</html>

