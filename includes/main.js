import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// manager

const manager = new THREE.LoadingManager();
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};
 
manager.onLoad = function ( ) {
    console.log( 'Loading complete!');
};
 
manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
    console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};
 
manager.onError = function ( url ) {
    console.log( 'There was an error loading ' + url );
};

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

//directional 

const light = new THREE.DirectionalLight( 0xFFFFFF );
light.position.set(1, 2, 3);
//const helper = new THREE.DirectionalLightHelper( light,100 );
scene.add(light );

const light1 = new THREE.DirectionalLight( 0xFFFFFF );
light1.position.set(0, 3, 0);
//const helper1 = new THREE.DirectionalLightHelper( light1,100 );
scene.add(light1 );

const light2 = new THREE.DirectionalLight( 0xFFFFFF );
light2.position.set(1, 5, -30);
//const helper2 = new THREE.DirectionalLightHelper( light2,100 );
scene.add(light2 );

const light3 = new THREE.DirectionalLight( 0xFFFFFF );
light3.position.set(-5,0,0);
//const helper3 = new THREE.DirectionalLightHelper( light3,100 );
scene.add(light3);

/*const pointLight = new THREE.PointLight( 0xff0000, 1, 100 );
pointLight.position.set( 10, 10, 10 );
scene.add( pointLight );*/

/*const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );*/

// agregar cubos
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const geometry_2 = new THREE.BoxGeometry( 1, 1, 1 );
const material_2 = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube_2 = new THREE.Mesh( geometry_2, material_2 );
scene.add( cube_2 );

scene.background = new THREE.Color(0x15A4CE);

camera.position.z = 5;
//cube.position.x= 1;
cube_2.position.x=5;

Modelos3D();
Barco2();
Barco3();
Barco4();
Barco5();

function animate() {
	requestAnimationFrame( animate );

	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

//***************************************//
// REPRESENTAR POSICION ACTUAL DE Modelos3D//

const modelos3DPosition = {
    x: 1,
    y: 1,
    z: 0
};
// REPRESENTAR POSICION ACTUAL DEL BARCO2//
const barco2Position = {
    x: 3,
    y: 0,
    z: 0
};
//***************************************//

animate();

function Modelos3D() {
    const loaderBarco = new OBJLoader(manager);
    var mtlBarco = new MTLLoader(manager);

    mtlBarco.load('../models/barco2/barco.mtl', function (materials) {
        materials.preload();
        loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco2/barco.obj', function (object) {
            object.scale.copy(new THREE.Vector3(0.001, 0.001, 0.001));
            object.position.set(modelos3DPosition.x, modelos3DPosition.y, modelos3DPosition.z);
            object.rotation.x = ((Math.PI / 2) * -1);
            scene.add(object);

            // Escuchar eventos de teclado para mover "Modelos3D"
            document.addEventListener('keydown', (event) => {
                switch (event.key) {
                    case 'w':
                        modelos3DPosition.z -= 0.1; // Mover hacia adelante
                        break;
                    case 'a':
                        modelos3DPosition.z += 0.1; // Mover hacia atrás
                        break;
                    case 's':
                        modelos3DPosition.x -= 0.1; // Mover hacia la izquierda
                        break;
                    case 'd':
                        modelos3DPosition.x += 0.1; // Mover hacia la derecha
                        break;
                }
                // Actualizar la posición del modelo
                object.position.set(modelos3DPosition.x, modelos3DPosition.y, modelos3DPosition.z);
            });
        });
        console.log(materials);
    });
}

function Barco2(){
    const loaderBarco = new OBJLoader(manager);
    var mtlBarco = new MTLLoader(manager);

    mtlBarco.load('../models/barco1/Barco1.mtl',function (materials){
        materials.preload();
        loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco1/Barco1.obj', function (object) {
            object.scale.copy( new THREE.Vector3(0.01,0.01,0.01));
            object.position.set(barco2Position.x, barco2Position.y, barco2Position.z);
            scene.add( object );

            // Escuchar eventos de teclado para mover "Barco2"
            document.addEventListener('keydown', (event) => {
                switch (event.key) {
                    case 'ArrowUp':
                        barco2Position.z -= 0.1; // Mover hacia adelante
                        break;
                    case 'ArrowDown':
                        barco2Position.z += 0.1; // Mover hacia atrás
                        break;
                    case 'ArrowLeft':
                        barco2Position.x -= 0.1; // Mover hacia la izquierda
                        break;
                    case 'ArrowRight':
                        barco2Position.x += 0.1; // Mover hacia la derecha
                        break;
                }
                // Actualizar la posición del modelo
                object.position.set(barco2Position.x, barco2Position.y, barco2Position.z);
            });
        });
        console.log(materials);
    });
}
function Barco3(){
    const loaderBarco = new OBJLoader(manager);
   // var mtlBarco = new MTLLoader(manager);

    //mtlBarco.load('models/barco3/Barco3.mtl',function (materials){
        //materials.preload();
      //  loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco3/Barco3.obj',
        
        function ( object ){
            object.scale.copy( new THREE.Vector3(0.001,0.001,0.001));
            object.position.set(-3, 0, 0);
            scene.add( object );

        });
       // console.log(materials);
   // });
}
function Barco4(){
    const loaderBarco = new OBJLoader(manager);
    var mtlBarco = new MTLLoader(manager);

    mtlBarco.load('../models/barco4/Barco4.mtl',function (materials){
        materials.preload();
        loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco4/Barco4.obj',
        
        function ( object ){
            object.scale.copy( new THREE.Vector3(1,1,1));
            object.position.set(-5, 2, 0);
            scene.add( object );

        });
        console.log(materials);
    });
}

function Barco5(){
    const loaderBarco = new OBJLoader(manager);
    var mtlBarco = new MTLLoader(manager);

    mtlBarco.load('../models/barco5/submarino.mtl',function (materials){
        materials.preload();
        loaderBarco.setMaterials(materials);
        loaderBarco.load('../models/barco5/submarino.obj',
        
        function ( object ){
            object.scale.copy( new THREE.Vector3(0.7,0.7,0.7));
            object.position.set(1, -1, 0);
            scene.add( object );

        });
        console.log(materials);
    });
}