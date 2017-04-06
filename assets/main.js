var intervalId = null;

//Variables teclas
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
//Variables Snake
var snake = document.getElementById('snake');
var xi=0;
var yi=0;
var i=0;
var tope=400;
var constante = 100;
//Variable botón reiniciar
var boton = document.getElementById('boton');


//Funciones que darán movimiento a Snake
var moverDerecha= function(){
 	if(xi<tope){
 		snake.style.marginLeft = ((xi+=100) +"px").toString();
 	} else{
 		clearInterval(intervalId)
 	}
 }
 var moverIzq = function(){
 	if(xi>i){
 		snake.style.marginLeft = ((xi-=100) +"px").toString();
 	} else{
 		clearInterval(intervalId)
 	}
 }
 var moverAbajo = function (){
 	if(yi<tope){
 		snake.style.marginTop = ((yi+=100) +"px").toString();
 	} else{
 		clearInterval(intervalId)
 	}
 }
 var moverArriba = function(){
 	if(yi>i){
 		snake.style.marginTop = ((yi-=100) +"px").toString();
 	} else{
 		clearInterval(intervalId)
 	}
 }
 //Función perdiste
function perdiste(){
	alert("perdiste");
}
//Función que accede a las teclas y les asigna comportamiento.
function teclaPulsada(evento){
	console.log('evento')
		switch(evento.keyCode){
    case teclas.UP:
    	intervalId = setInterval(moverArriba, 800)
    break;
    case teclas.DOWN:
    	intervalId = setInterval(moverAbajo, 800)
    break;
    case teclas.LEFT:
    	intervalId = setInterval(moverIzq, 800)
    break;
    case teclas.RIGHT:
    	intervalId = setInterval(moverDerecha, 800)
    break;
  }
}
//Función para reiniciar juego
function reiniciar(){
	snake.style.marginLeft = (i +"px").toString();
	snake.style.marginTop = (i + "px").toString();
}

function detener(){
	document.removeEventListener("keydown", teclaPulsada);
}




//EVENTOS
document.addEventListener("keydown", teclaPulsada);
boton.addEventListener("click", reiniciar)



