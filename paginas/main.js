
import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const group= new THREE.Group();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x0080FF } );
const cube = new THREE.Mesh( geometry, material );
cube.position.x=-7;
cube.position.y=-2;
scene.add( cube );

camera.position.z=7;

var cubeBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cubeBB.setFromObject(cube);

const geometry_cube2 = new THREE.BoxGeometry( 5, 5, 5 );
const material_cube2 = new THREE.MeshPhongMaterial( { color: 0x874141 } );
const cube2 = new THREE.Mesh( geometry_cube2, material_cube2 );
//scene.add( cube );
cube2.position.x=6;

var cube2BB =new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cube2BB.setFromObject(cube2);
group.add(cube2);

const geometry_cube3 = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
const material_cube3 = new THREE.MeshPhongMaterial( { color: 808080 } );
const cube3 = new THREE.Mesh( geometry_cube3, material_cube3 );
//scene.add( cube );
cube3.position.x=0;
cube3.position.y=3;

var cube3BB =new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cube3BB.setFromObject(cube3);
group.add(cube3);

const geometry_cube4 = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
const material_cube4 = new THREE.MeshPhongMaterial( { color: 0x674ea7 } );
const cube4 = new THREE.Mesh( geometry_cube4, material_cube4 );
//scene.add( cube );
var cube4BB =new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
cube4BB.setFromObject(cube4);
group.add(cube4);

/*Estatica */
// const geometry_sphere = new THREE.SphereGeometry( 15, 32, 16 );
// const material_sphere = new THREE.MeshPhongMaterial( { color:  0xBDFFDD} );
// const sphere = new THREE.Mesh( geometry_sphere, material_sphere );
// scene.add( sphere );
// sphere.scale.copy( new THREE.Vector3(0.01, 0.01, 0.01));
// sphere.position.x=3;

/*esta es la que gira*/ 
 const geometry_sphere2 = new THREE.SphereGeometry( 15, 32, 16 );
 const material_sphere2 = new THREE.MeshPhongMaterial( { color:  0xDDBDFF} );
 const sphere2 = new THREE.Mesh( geometry_sphere2, material_sphere2 );
scene.add( sphere2 );
sphere2.scale.copy( new THREE.Vector3(0.01, 0.01, 0.01));
sphere2.position.x=4;


 const geometry_cone = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
 const material_cone = new THREE.MeshPhongMaterial( {color: 0x00ff00ff} );
 const cone = new THREE.Mesh(geometry_cone, material_cone ); 
 scene.add(cone);
 cone.scale.copy( new THREE.Vector3(0.03, 0.03, 0.03));

 cone.position.x = -5;
 cone.position.y = 1.5;
 const geometry_cone2 = new THREE.ConeGeometry( 5, 20, 32 ); 
 const material_cone2 = new THREE.MeshPhongMaterial( {color: 0xBDDDFF} );
 const cone2 = new THREE.Mesh(geometry_cone2, material_cone2 ); 
 scene.add(cone2);
 cone2.scale.copy( new THREE.Vector3(0.05, 0.05, 0.05));

var intensidad=0.2;
const al= new THREE.AmbientLight(0xffffff,intensidad);
scene.add(al);

 const dl= new THREE.DirectionalLight(0xffffff,intensidad);
 dl.position.set(0,5,0);
 const dlhelper=new THREE.DirectionalLightHelper(dl,5);
 dl.scale.copy( new THREE.Vector3(.5, .5, .5));
 group.add(dl,dlhelper);

// const pl= new THREE.PointLight(0xffffff,10,10.0);
// pl.position.set(-7,1.5,0);
// const pointLightHelp= new THREE.PointLightHelper(pl);
// pl.scale.copy( new THREE.Vector3(.5, .5, .5));
// group.add(pl,pointLightHelp);


// const pl2= new THREE.PointLight(0xffffff,10,10.0);
// pl2.position.set(0,0,0);
// const pointLightHelp2= new THREE.PointLightHelper(pl2);
// pl2.scale.copy( new THREE.Vector3(.5, .5, .5));
// group.add(pl2,pointLightHelp2);


scene.add(group);
// cone2.position.x = -7;
// const radio = .7; 
// let tiempo = 0;



// const speedX = 0.04; 
// const speedY = 0.04; 

// let direccionX = 1; 
// let direccionY = 1; 


function animate() {
	

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;
	// cone2.position.x += 0.05;
	// pl.position.x+=0.05;
	// if (cone2.position.x > 0) {
    //     cone2.position.x = -7;
    //     pl.position.x=-7;
    // }


	// tiempo += 0.01; 
    // const angle = tiempo * 3;
    // const x = Math.cos(angle) * radio;
    // const y = Math.sin(angle) * radio;

   
    // sphere2.position.x = x + sphere.position.x;
    // sphere2.position.y = y + sphere.position.z;


	// cone.position.x += speedX * direccionX;



	// if (cone.position.x > 3.5) {
    //     cone.position.x = 3.5;
    //     direccionX = -1;
    // } else if (cone.position.x < -6.5) {
    //     cone.position.x = -6.5;
    //     direccionX = 1;
    // }

    
    // cone.position.y += speedY * direccionY;

    // if (cone.position.y > 3) {
    //     cone.position.y = 3;
    //     direccionY = -1;
    // } else if (cone.position.y < 2) {
    //     cone.position.y = 2;
    //     direccionY = 1;
    // }
    

    camera.position.x= cube4.position.x;
    camera.position.z=cube4.position.z+5;

    cube4BB.copy(cube4.geometry.boundingBox).applyMatrix4(cube4.matrixWorld);
    cubeBB.copy(cube.geometry.boundingBox).applyMatrix4(cube.matrixWorld);
    cube2BB.copy(cube2.geometry.boundingBox).applyMatrix4(cube2.matrixWorld);
    cube3BB.copy(cube3.geometry.boundingBox).applyMatrix4(cube3.matrixWorld);
    colisiones();
    requestAnimationFrame( animate );
	renderer.render( scene, camera );

}

// var esta_logeado = false;

$(document).ready(function() {
	animate();

 $("#btnIniciar").on("click",iniciarSesion);

 $(document).keypress(function(e){

 var tecla = String.fromCharCode(e.which);

if(tecla=='a'||tecla=='A'){
	cube4.position.x--;
}


if(tecla=='d' ||tecla=='D'){
    cube4.position.x++;
}



if(tecla=='w'||tecla=='W'){
    cube4.position.y++;
}

if(tecla=='s'||tecla=='S'){
    cube4.position.y--;
}



// if(tecla=='c'||tecla=='C'){
// 	if(al.intensity<1)
//     al.intensity+=0.1;
// }

// if(tecla=='v'||tecla=='V'){
// 	if(al.intensity>0)
//     al.intensity-=0.1;
// }



// if(tecla=='o'||tecla=='O'){
// 	camera.position.y+=0.05;
//     pl2.position.y+=0.05;
// }


// if(tecla=='k' ||tecla=='K'){
//     camera.position.x+=0.05;
//     pl2.position.x+=0.05;
// }



// if(tecla=='ñ'||tecla=='Ñ'){
//     camera.position.x-=0.05;
//     pl2.position.x-=0.05;
// }

// if(tecla=='l'||tecla=='L'){
//     camera.position.y-=0.05;
//     pl2.position.y-=0.05;
// }


 });


});

var vida=100
function colisiones(){
    if(cube4BB.intersectsBox(cube2BB)){
        console.log("colision");
        vida-=20;
        console.log("vida: "+vida);
        cube2.position.y=100;
    }

    if(cube4BB.intersectsBox(cubeBB)){
        console.log("colision");
        vida+=20;
        console.log("vida: "+vida);
        cube.position.y=100;
        
    }

    if(cube4BB.intersectsBox(cube3BB)){
        console.log("colision");
        if(intensidad<1){
            intensidad++;
            al.intensity = intensidad;
        }
       
       

        console.log("intensidad: "+ intensidad);
        cube3.position.y=100;
        
        
    }
}


function iniciarSesion(){

$.get("http://localhost/WebServices/WebServices.php",{nombreUsuario:"holi",contra:"123"},function(data){

if(data!=''){
	alert(data);

}


})

}

