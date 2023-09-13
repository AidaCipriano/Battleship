import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
/*****************************************************************************/

const cube2 = cube.clone();

scene.add( cube2);
cube2.position.y=3;

const geometry_sphere = new THREE.SphereGeometry( 15, 32, 16);
const material_sphere = new THREE.MeshBasicMaterial( {color: 0x00ff00 });
const sphere = new THREE.Mesh( geometry_sphere, material_sphere);
scene.add(sphere);

sphere.position.x = 3;

sphere.scale.copy( new THREE.Vector3(0.05, 0.05, 0.05));



const geo = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const mate = new THREE.MeshBasicMaterial( {color: 0x6495ED} ); 
const capsule = new THREE.Mesh( geo, mate); scene.add( capsule );

capsule.position.y=2;
capsule.position.x=4;

const capsule2 = capsule.clone();

scene.add(capsule2);
capsule2.position.y=3;
capsule2.position.x=-5;

/****************************************************************************** */

const points = [];
for ( let i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const ge = new THREE.LatheGeometry( points );
const ma= new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const lathe = new THREE.Mesh( ge, ma );
scene.add( lathe );

lathe.scale.x=0.05;
lathe.scale.y= 0.05;
lathe.scale.z = 0.05;

lathe.position.x=-5;

//**************************************************************************** */
camera.position.z = 10;

function animate() {

	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	lathe.rotation.x += 0.01;
	lathe.rotation.y += 0.01;

	renderer.render( scene, camera );

}
var esta_logeado = false;

$(document).ready(function() {


 //$("#btnIniciar").on("click",iniciarSesion);

 $(document).keypress(function(e){

var tecla = String.fromCharCode(e.which);

if(tecla=='a'||tecla=='A'){
	camera.position.x--;
}

if(tecla=='b'||tecla=='B'){
	camera.position.x++;
}

if(tecla=='p'||tecla=='P'){
	$('canvas').hide();
	
	 var mensajeH2 = document.createElement('h2');
	 mensajeH2.textContent = 'SE TECLEO LA C';
	 document.body.appendChild(mensajeH2);
	 
}

if(tecla=='v'||tecla=='V'){

	$('canvas').show();
}

if(tecla=='u'||tecla=='U'){
	sphere.position.y++;
}

if(tecla=='j'||tecla=='J'){
	sphere.position.y--;
}

 });
});


function iniciarSesion(){

var formulario = document.getElementById("logeo");

formulario.addEventListener("click", function(event){
	event.preventDefault();

	var username = document.getElementById("username").value;
	var contra = document.getElementById("pass").value;

$.get("http://localhost:8080/WebServices/WebServices.php",{nombreUsuarios:"$username",contra:"$contra"},function(data){

if(data!=''){
	alert(data);
animate();
}


})

	
})
}