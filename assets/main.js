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
function moverDerecha(){
 	if(xi<tope){
 		snake.style.marginLeft = ((xi+=100) +"px").toString();
 	} else{
 		perdiste()
 	}
 }
 function moverIzq(){
 	if(xi>i){
 		snake.style.marginLeft = ((xi-=100) +"px").toString();
 	} else{
 		perdiste()
 	}
 }
 function moverAbajo(){
 	if(yi<tope){
 		snake.style.marginTop = ((yi+=100) +"px").toString();
 	} else{
 		perdiste()
 	}
 }
 function moverArriba(){
 	if(yi>i){
 		snake.style.marginTop = ((yi-=100) +"px").toString();
 	} else{
 		perdiste()
 	}
 }
 //Función perdiste
function perdiste(){
	alert("perdiste");
	document.removeEventListener("keydown", teclaPulsada);
}
//Función que accede a las teclas y les asigna comportamiento.
function teclaPulsada(evento){
	console.log('evento')
		switch(evento.keyCode){
    case teclas.UP:
    	moverArriba()
    break;
    case teclas.DOWN:
    	moverAbajo()
    break;
    case teclas.LEFT:
    	moverIzq()
    break;
    case teclas.RIGHT:
    	moverDerecha()
    break;
  }
}
//Función para reiniciar juego
function reiniciar(){
	snake.style.marginLeft = (i +"px").toString();
	snake.style.marginTop = (i + "px").toString();
}



//EVENTOS
document.addEventListener("keydown", teclaPulsada);
boton.addEventListener("click", reiniciar)



