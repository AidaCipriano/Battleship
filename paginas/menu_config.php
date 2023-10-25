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
    <title>Menú de Configuración</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body class="gif">
    <div  class="container d-flex justify-content-center align-items-center h-100 divdiv containertres fondodos">
      <div class="containerdos fondo">
        <h1 class="text-center letras"> <b>Menú de configuración</b></h1>
        <form id="configForm">
            <label class="letras2" for="volume"><b>Volumen:</b></label>
            <input type="range" id="volume" name="volume" min="0" max="100" value="50" class="form-control-range letras2">
            
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="music" name="music" checked>
                <label class="form-check-label letras2" for="music"><b>Música de fondo</b></label>
            </div>                       

            <div style="text-align:center">
                <a href="pantalladeljuego.php"><button type="button" id="saveButton" class="btn btn-primary button2">Guardar Configuración</button></a>
                &nbsp;&nbsp;
               <a href="pantalladeljuego.php"> <button type="button" id="logoutButton" class="btn btn-primary button3">Salir</button></a>
            </div>
        </form>
    </div>  
    </div>
    

    <script src="../includes/xcript_config.js"></script>
    <script src="../includes/script.js"></script>
</body>
</html>