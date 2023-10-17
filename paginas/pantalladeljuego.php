<?php
 // session_start();
 // include 'controladores/conexion.php';
 // $user = $_SESSION['user_id'];

?>
<!DOCTYPE html>
<html lang="en">

<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.min.js"></script>-->






<head>
  <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>-->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Videojuego</title>
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/styles.css">
  <link href="https://fonts.cdnfonts.com/css/copperplate" rel="stylesheet">
  <style>
    body {
      margin: 0;
    }
  </style>
  <script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>

  <script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@v0.155.0/build/three.module.js",
      "three/addons/": "https://unpkg.com/three@0.155.0/examples/jsm/"
    }
  }
</script>
</head>


<body>

<main>
<header class="py-3  header-pantallajuego border-bottom">
    <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">



      <ul class="nav col-12 col-lg-auto  mb-md-0">
            <li>
              <a class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> </a>
              <ul class="dropdown-menu dropdown-menu-dark ">
              <li><a class="dropdown-item" href="menu_config.php">Configuracion</a></li>
              <li><a class="dropdown-item" href="menu_pausa.php">Pausa</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="iniciosesion.php">Cerrar Sesion</a></li>
              </ul>
            </li>
          </ul>
    </div>

  </header>

  <body class="pantalla-juego">

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
		<script type="module" src="./../includes/main.js"></script>

  </body>
   
    
 
</main>

		
<script src="../includes/script.js"></script>
<script src="../js/bootstrap.bundle.min.js"></script>
</body>
</html>





